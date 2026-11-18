import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const html = resolve(root, 'frontpage.html');
const png = resolve(root, 'entry.png');
const chrome = '/home/hatch/.cache/ms-playwright/chromium_headless_shell-1255/chrome-headless-shell-linux64/chrome-headless-shell';
execFileSync(chrome, ['--headless', '--disable-gpu', '--no-sandbox', '--hide-scrollbars', '--force-device-scale-factor=1', `--screenshot=${png}`, '--window-size=1024,1024', `file://${html}`], { stdio: 'inherit' });
execFileSync('python3', ['-c', `from PIL import Image\np='${png}'\nim=Image.open(p).convert('RGB')\nassert im.size==(1024,1024), im.size\nim.save(p,format='PNG',optimize=True)\nif __import__('os').path.getsize(p)>1048576: im.save(p,format='JPEG',quality=92,optimize=True)\nassert __import__('os').path.getsize(p)<=1048576\nprint(im.size, __import__('os').path.getsize(p))`], { stdio: 'inherit' });
