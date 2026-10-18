import fs from 'node:fs';
import path from 'node:path';

export interface CertificateItem {
  id: string;
  filename: string;
  src: string;
  alt: string;
  mtime: number;
}

/**
 * Automatically scans and returns all certificate images in `public/images/certificates`.
 * Drop any image file (*.jpg, *.jpeg, *.png, *.webp, *.avif) into
 * `public/images/certificates/` and it will automatically appear on the homepage.
 */
export function getCertificates(): CertificateItem[] {
  const dir = path.join(process.cwd(), 'public/images/certificates');
  if (!fs.existsSync(dir)) return [];

  const allowedExts = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
  let files: string[] = [];

  try {
    files = fs.readdirSync(dir).filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return allowedExts.has(ext) && !file.startsWith('.');
    });
  } catch (err) {
    console.error('Failed to read certificates directory:', err);
    return [];
  }

  const items: CertificateItem[] = files.map((file, idx) => {
    const fullPath = path.join(dir, file);
    let mtime = 0;
    try {
      mtime = fs.statSync(fullPath).mtimeMs;
    } catch {}

    const nameWithoutExt = path.parse(file).name.replace(/[-_]/g, ' ');

    return {
      id: `cert-${idx}-${file}`,
      filename: file,
      src: `/images/certificates/${file}`,
      alt: nameWithoutExt,
      mtime,
    };
  });

  return items.sort((a, b) => a.filename.localeCompare(b.filename));
}
