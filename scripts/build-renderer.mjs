import * as esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const prod = process.env.APEX_PROD === '1' || process.argv.includes('--prod');

await esbuild.build({
  entryPoints: [path.join(root, 'src/js/app.js')],
  bundle: true,
  outfile: path.join(root, 'src/js/app.bundle.js'),
  format: 'iife',
  platform: 'browser',
  target: ['chrome120'],
  sourcemap: prod ? false : true,
  minify: prod,
  logLevel: 'info',
  // three is bundled into the IIFE — no runtime node_modules/three required
});

console.log('Renderer bundle written to src/js/app.bundle.js');
