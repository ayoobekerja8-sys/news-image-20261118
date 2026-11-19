import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const source = fileURLToPath(new URL('./entry.png', import.meta.url));
const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const bytes = readFileSync(source);
if (bytes.length < signature.length || !bytes.subarray(0, signature.length).equals(signature)) {
  throw new Error('entry.png is missing the PNG signature.');
}

const destination = join(resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output'), 'entry.png');
mkdirSync(dirname(destination), { recursive: true });
copyFileSync(source, destination);
console.log(`${destination} ${statSync(destination).size} bytes`);
