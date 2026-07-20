const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'components', 'BrandCollectionContent.tsx');
let content = fs.readFileSync(targetFile, 'utf8');

function getProducts(brandDir) {
  const fullPath = path.join(__dirname, 'public', 'Fabric Collection', brandDir);
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.jpeg'));
  return files.map(file => {
    const name = path.parse(file).name;
    // encode uri component for the image path since it contains spaces and % signs?
    // Next.js Image component handles spaces if it's passed as a string, but it's safer to just pass it directly.
    // However, % sign in filename might cause issues with Next.js router/loader. Wait, standard Next.js public files with % in them might be tricky. Let's just pass the exact file path and let Next.js handle it, maybe encodeURI.
    // I'll just use the literal string for now.
    let url = `/Fabric Collection/${brandDir}/${file}`;
    return `      { image: \`${url}\`, name: \`${name}\` }`;
  }).join(',\n');
}

const donnaProducts = getProducts('Donna Azzura');
const woolProducts = getProducts('The Wool Story');
const linenProducts = getProducts('The Linen Folk');

const donnaOld = `    products: [
      { image: '/products/0T1A3819.jpg.jpeg', name: 'Premium Suiting 0T1A' },
      { image: '/products/U2R (26).jpg.jpeg', name: 'Check Suiting U2R-26' },
      { image: '/products/U2R (27).jpg.jpeg', name: 'Check Suiting U2R-27' },
      { image: '/products/W1050_-_Web_03.jpg.jpeg', name: 'Textured Weave W1050' },
      { image: '/products/W1100_3.jpg.jpeg', name: 'Classic Suiting W1100' },
      { image: '/products/W1128_SECOND.jpg.jpeg', name: 'Premium Weave W1128' },
    ]`;

const woolOld = `    products: [
      { image: '/products/Wool 1.jpg.jpeg', name: 'Premium Wool Blend 1' },
      { image: '/products/Wool 2.jpg.jpeg', name: 'Premium Wool Blend 2' },
      { image: '/products/Wool 3.jpg.jpeg', name: 'Premium Wool Blend 3' },
      { image: '/products/Wool 4.jpg.jpeg', name: 'Premium Wool Blend 4' },
      { image: '/products/Wool 5.jpg.jpeg', name: 'Premium Wool Blend 5' },
      { image: '/products/Wool 6.jpg.jpeg', name: 'Premium Wool Blend 6' },
    ]`;

const linenOld = `    products: [
      { image: '/products/Linen 1.jpg.jpeg', name: 'Pure Linen Blend 1' },
      { image: '/products/Linen 2.jpg.jpeg', name: 'Pure Linen Blend 2' },
      { image: '/products/Linen 3.jpg.jpeg', name: 'Pure Linen Blend 3' },
      { image: '/products/Linen 4.jpg.jpeg', name: 'Pure Linen Blend 4' },
      { image: '/products/Linen 5.jpg.jpeg', name: 'Pure Linen Blend 5' },
      { image: '/products/Linen 6.jpg.jpeg', name: 'Pure Linen Blend 6' },
    ]`;

content = content.replace(donnaOld, `    products: [\n${donnaProducts}\n    ]`);
content = content.replace(woolOld, `    products: [\n${woolProducts}\n    ]`);
content = content.replace(linenOld, `    products: [\n${linenProducts}\n    ]`);

fs.writeFileSync(targetFile, content);
console.log('Update complete');
