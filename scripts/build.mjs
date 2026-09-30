import { execSync } from 'child_process';
import fs from 'fs';

console.log('📦 1/3 Compilando versión web optimizada para GitHub Pages (dist/)...');
execSync('npx vite build', { stdio: 'inherit', env: { ...process.env, BUILD_SINGLEFILE: 'false' } });

console.log('📁 2/3 Sincronizando con carpeta docs/ para despliegue directo en GitHub Pages...');
if (fs.existsSync('docs')) {
  fs.rmSync('docs', { recursive: true, force: true });
}
fs.cpSync('dist', 'docs', { recursive: true });

console.log('⚡ 3/3 Generando archivo autocontenido para doble clic offline (aula_modelo_interactiva.html)...');
execSync('npx vite build --outDir dist-single', { stdio: 'inherit', env: { ...process.env, BUILD_SINGLEFILE: 'true' } });
fs.copyFileSync('dist-single/index.html', 'aula_modelo_interactiva.html');
fs.rmSync('dist-single', { recursive: true, force: true });

console.log('✅ Compilación completada con éxito.');
