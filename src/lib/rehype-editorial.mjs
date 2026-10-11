import { visit } from 'unist-util-visit';

/**
 * Small rehype plugin used for every Markdown file.
 *
 * 1. Prefixes root-relative links and image paths ("/images/...") with the
 *    configured base path, so content works on GitHub Pages project sites.
 * 2. Turns a paragraph that only contains an image into <figure>, using the
 *    Markdown image title as the caption:
 *        ![Alt text](/images/research/plot.png "Caption shown below")
 * 3. Lazy-loads images and wraps tables so they can scroll on small screens.
 */
export default function rehypeEditorial(options = {}) {
  const base = (options.base || '/').replace(/\/$/, '');

  const withBase = (value) => {
    if (typeof value !== 'string') return value;
    if (!value.startsWith('/') || value.startsWith('//')) return value;
    if (base && (value === base || value.startsWith(`${base}/`))) return value;
    return `${base}${value}`;
  };

  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'img') {
        node.properties.src = withBase(node.properties.src);
        node.properties.loading = 'lazy';
        node.properties.decoding = 'async';
      }
      if (node.tagName === 'a') {
        node.properties.href = withBase(node.properties.href);
      }

      if (node.tagName === 'table' && parent && typeof index === 'number') {
        if (parent.type === 'element' && parent.properties?.className?.includes?.('table-scroll')) return;
        parent.children[index] = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'] },
          children: [node],
        };
        return;
      }

      if (node.tagName === 'p' && parent && typeof index === 'number') {
        const meaningful = node.children.filter(
          (child) => !(child.type === 'text' && child.value.trim() === ''),
        );
        if (meaningful.length !== 1) return;
        const img = meaningful[0];
        if (img.type !== 'element' || img.tagName !== 'img') return;

        img.properties.src = withBase(img.properties.src);
        img.properties.loading = 'lazy';
        img.properties.decoding = 'async';
        const caption = img.properties.title;
        delete img.properties.title;

        const children = [img];
        if (caption) {
          children.push({
            type: 'element',
            tagName: 'figcaption',
            properties: {},
            children: [{ type: 'text', value: String(caption) }],
          });
        }
        parent.children[index] = {
          type: 'element',
          tagName: 'figure',
          properties: {},
          children,
        };
      }
    });
  };
}
