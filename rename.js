const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const oldBaseDir = path.join(publicDir, 'Fabric Collection');
const newBaseDir = path.join(publicDir, 'fabric-collection');

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/%/g, '-percent-')     // Replace % with -percent-
    .replace(/[()]/g, '')           // Remove parentheses
    .replace(/,/g, '')              // Remove commas
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function processDirectory(oldBrandDirName, newBrandDirName) {
  const oldDirPath = path.join(oldBaseDir, oldBrandDirName);
  const newDirPath = path.join(newBaseDir, newBrandDirName);
  
  if (!fs.existsSync(newDirPath)) {
    fs.mkdirSync(newDirPath, { recursive: true });
  }

  const files = fs.readdirSync(oldDirPath);
  const products = [];

  files.forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      const ext = path.extname(file);
      const nameWithoutExt = path.basename(file, ext);
      
      const newNameWithoutExt = slugify(nameWithoutExt);
      const newFileName = newNameWithoutExt + ext;
      
      const oldFilePath = path.join(oldDirPath, file);
      const newFilePath = path.join(newDirPath, newFileName);
      
      // Copy file to new location
      fs.copyFileSync(oldFilePath, newFilePath);
      
      products.push({
        image: `/fabric-collection/${newBrandDirName}/${newFileName}`,
        name: nameWithoutExt // Keep original name for display
      });
    }
  });
  
  return products;
}

// Ensure base dir exists
if (fs.existsSync(oldBaseDir)) {
  if (!fs.existsSync(newBaseDir)) {
    fs.mkdirSync(newBaseDir);
  }

  const donnaProducts = processDirectory('Donna Azzura', 'donna-azzura');
  const woolProducts = processDirectory('The Wool Story', 'the-wool-story');
  const linenProducts = processDirectory('The Linen Folk', 'the-linen-folk');

  // Now update the BrandCollectionContent.tsx
  const targetFile = path.join(__dirname, 'components', 'BrandCollectionContent.tsx');
  let content = fs.readFileSync(targetFile, 'utf8');

  // We need to replace the products array for each brand
  function replaceProducts(content, brandKey, newProducts) {
    const regex = new RegExp(`('${brandKey}'|"${brandKey}"): \\{[\\s\\S]*?products: \\[[\\s\\S]*?\\]\\n\\s*\\}`, 'm');
    return content.replace(regex, (match) => {
      const productsStr = newProducts.map(p => `      { image: \`${p.image}\`, name: \`${p.name}\` }`).join(',\n');
      return match.replace(/products: \[[^\]]*\]/, `products: [\n${productsStr}\n    ]`);
    });
  }

  content = replaceProducts(content, 'donna-azzura', donnaProducts);
  content = replaceProducts(content, 'the-wool-story', woolProducts);
  content = replaceProducts(content, 'the-linen-folk', linenProducts);

  fs.writeFileSync(targetFile, content);
  console.log('Renamed files and updated BrandCollectionContent.tsx successfully.');
} else {
  console.log('Fabric Collection directory not found.');
}
