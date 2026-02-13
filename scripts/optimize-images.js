/**
 * Script para otimizar imagens do portfólio
 * Reduz significativamente o tamanho dos arquivos para melhor desempenho
 * Execute: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'src', 'assets');

async function optimizeImages() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    console.log('Execute primeiro: npm install sharp --save-dev');
    process.exit(1);
  }

  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
  let totalSaved = 0;
  let processed = 0;

  function collectFiles(dir, files = []) {
    fs.readdirSync(dir).forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        collectFiles(filePath, files);
      } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
        files.push(filePath);
      }
    });
    return files;
  }

  async function processFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    if (!imageExtensions.includes(ext)) return;

    const stat = fs.statSync(filePath);
    const originalSize = stat.size;
    if (originalSize < 20000) return; // Pular arquivos < 20KB

    const dir = path.dirname(filePath);
    const name = path.basename(filePath, ext);
    const tempPath = path.join(dir, `${name}_opt${ext}`);

    try {
      let pipeline = sharp(filePath);
      const metadata = await pipeline.metadata();
      const maxDimension = 1200;
      let resizeOpts = {};

      if (metadata.width > maxDimension || metadata.height > maxDimension) {
        resizeOpts = {
          width: metadata.width > metadata.height ? maxDimension : undefined,
          height: metadata.height > metadata.width ? maxDimension : undefined,
          fit: 'inside',
          withoutEnlargement: true
        };
      }

      if (ext === '.png') {
        pipeline = pipeline.resize(resizeOpts).png({ quality: 80, compressionLevel: 9 });
      } else if (['.jpg', '.jpeg'].includes(ext)) {
        pipeline = pipeline.resize(resizeOpts).jpeg({ quality: 82, mozjpeg: true });
      } else if (ext === '.webp') {
        pipeline = pipeline.resize(resizeOpts).webp({ quality: 82 });
      } else if (ext === '.gif') {
        if (metadata.width > 800) {
          pipeline = pipeline.resize(800);
        }
        pipeline = pipeline.gif();
      }

      await pipeline.toFile(tempPath);
      const newSize = fs.statSync(tempPath).size;

      if (newSize < originalSize) {
        fs.renameSync(tempPath, filePath);
        const saved = originalSize - newSize;
        totalSaved += saved;
        processed++;
        console.log(`✓ ${path.relative(assetsDir, filePath)}: ${(originalSize/1024).toFixed(1)}KB → ${(newSize/1024).toFixed(1)}KB (-${(saved/1024).toFixed(1)}KB)`);
      } else {
        fs.unlinkSync(tempPath);
      }
    } catch (err) {
      console.error(`Erro em ${path.relative(assetsDir, filePath)}:`, err.message);
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
  }

  const allFiles = collectFiles(assetsDir);
  console.log('Otimizando imagens...\n');

  for (const filePath of allFiles) {
    await processFile(filePath);
  }

  console.log(`\nConcluído! ${processed} imagens otimizadas. Economia total: ${(totalSaved/1024/1024).toFixed(2)} MB`);
}

optimizeImages().catch(err => {
  console.error('Erro:', err);
  process.exit(1);
});
