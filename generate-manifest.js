const fs = require('fs');
const path = require('path');

const eventsDir = path.join(__dirname, 'public', 'events');
const outputFile = path.join(__dirname, 'public', 'events-manifest.json');

const generateManifest = () => {
  const files = fs.readdirSync(eventsDir)
    .filter(file => file.endsWith('.csv'))
    .map(file => ({
      filename: file,
      displayName: file.replace(/_/g, ' ')
                      .replace('.csv', '')
                      .replace(/\b\w/g, c => c.toUpperCase())
    }));

  fs.writeFileSync(outputFile, JSON.stringify(files));
  console.log('Generated events manifest:', files);
};

generateManifest();
