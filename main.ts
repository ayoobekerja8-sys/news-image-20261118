import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const inputPath = fileURLToPath(new URL('./entry.png', import.meta.url));
const imageBytes = readFileSync(inputPath);
const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

if (imageBytes.length < signature.length || !imageBytes.subarray(0, signature.length).equals(signature)) {
  throw new Error('entry.png is missing the PNG signature.');
}

const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
const outputPath = join(outputDirectory, 'entry.png');

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, imageBytes);
console.log(`${outputPath} ${imageBytes.length} bytes`);
