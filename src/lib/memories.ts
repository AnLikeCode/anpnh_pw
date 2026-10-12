import fs from 'node:fs';
import path from 'node:path';

export interface MemoryPhoto {
  id: string;
  filename: string;
  src: string;
  alt: string;
  mtime: number;
}

/**
 * Automatically scans and returns all image files in `public/images/memories`.
 * Just drop any new image file (*.jpg, *.jpeg, *.png, *.webp, *.avif, *.gif)
 * into `public/images/memories/` and it will instantly appear in the exhibition.
 */
export function getMemoryPhotos(): MemoryPhoto[] {
  const dir = path.join(process.cwd(), 'public/images/memories');
  if (!fs.existsSync(dir)) return [];

  const allowedExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);
  let files: string[] = [];

  try {
    files = fs.readdirSync(dir).filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return allowedExts.has(ext) && !file.startsWith('.');
    });
  } catch (err) {
    console.error('Failed to read memories directory:', err);
    return [];
  }

  const photos: MemoryPhoto[] = files.map((file, idx) => {
    const fullPath = path.join(dir, file);
    let mtime = 0;
    try {
      mtime = fs.statSync(fullPath).mtimeMs;
    } catch {}

    const nameWithoutExt = path.parse(file).name.replace(/[-_]/g, ' ');

    return {
      id: `photo-${idx}-${file}`,
      filename: file,
      src: `/images/memories/${file}`,
      alt: nameWithoutExt,
      mtime,
    };
  });

  // Sort by modified time descending (newest photos first), fallback to filename
  return photos.sort((a, b) => b.mtime - a.mtime || a.filename.localeCompare(b.filename));
}
