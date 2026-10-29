import { cp, mkdir, rm, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const html = await readFile(path.join(root, 'index.html'), 'utf8');
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const url = match[1];
  if (url.startsWith('/') || /^[a-z]+:/i.test(url)) continue;
  await readFile(path.join(root, url));
}
for (const expected of ['빠름보다 깊고,', '새로움보다 오래가는 것을 연구합니다.', 'https://plant-backend-720347906835.asia-east1.run.app/legal/privacy', 'https://plant-backend-720347906835.asia-east1.run.app/legal/terms']) {
  if (!html.includes(expected)) throw new Error(`Required content missing: ${expected}`);
}
if ((await readFile(path.join(root, 'CNAME'), 'utf8')).trim() !== 'neuritlab.com') throw new Error('Custom domain changed');
const out = path.join(root, 'dist');
await rm(out, { recursive: true, force: true });
await mkdir(out);
for (const entry of ['index.html', 'styles.css', 'assets', 'CNAME']) await cp(path.join(root, entry), path.join(out, entry), { recursive: true });
console.log(`Static production build complete: ${out}`);
console.log(`Assets: ${(await readdir(path.join(out, 'assets'))).join(', ')}`);
