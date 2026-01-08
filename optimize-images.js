import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { join } from 'path';

const QUALITY = {
  jpg: 80,
  png: 80,
  webp: 80,
};

const MAX_WIDTH = 1920;

async function optimizeImage(inputPath, outputPath, ext) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resize si es muy grande
    if (metadata.width > MAX_WIDTH) {
      image.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    // Optimizar según el formato
    if (ext === '.jpg' || ext === '.jpeg') {
      await image
        .jpeg({ quality: QUALITY.jpg, progressive: true })
        .toFile(outputPath);
    } else if (ext === '.png') {
      await image
        .png({ quality: QUALITY.png, compressionLevel: 9 })
        .toFile(outputPath);
    }

    console.log(`✓ Optimized: ${inputPath}`);
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  const imgDir = './public/img';
  const files = await readdir(imgDir);

  for (const file of files) {
    const ext = file.toLowerCase().slice(file.lastIndexOf('.'));
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputPath = join(imgDir, file);
      const outputPath = join(imgDir, `optimized-${file}`);
      await optimizeImage(inputPath, outputPath, ext);
    }
  }

  console.log('\n✓ All images optimized!');
  console.log('Replace original files with optimized- versions manually.');
}

main();
