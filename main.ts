import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve, join } from 'node:path';

const pngPath = new URL('./entry.png', import.meta.url);
const pngBytes = readFileSync(pngPath);
const pngHeader = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

if (pngBytes.length < pngHeader.length || !pngBytes.subarray(0, pngHeader.length).equals(pngHeader)) {
  throw new Error('The bundled entry.png does not have a valid PNG signature.');
}

const outputDirectory = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
const outputPath = join(outputDirectory, 'entry.png');

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(outputPath, pngBytes);
console.log(`${outputPath} ${pngBytes.length} bytes`);
