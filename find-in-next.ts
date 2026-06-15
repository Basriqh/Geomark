import * as fs from 'fs';
import * as path from 'path';

function findUrls(dir: string) {
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          findUrls(fullPath);
        } else {
          if (file.endsWith('.js') && !fullPath.includes('node_modules')) {
            const text = fs.readFileSync(fullPath, 'utf8');
            if (text.includes('lh3.googleusercontent.com')) {
              console.log(`Found CDN in: ${fullPath}`);
              const matches = text.match(/https:\/\/lh3\.googleusercontent\.com\/[^\s"'}]+/g);
              if (matches) {
                const unique = Array.from(new Set(matches));
                unique.forEach(m => {
                  try {
                    const idx = text.indexOf(m);
                    const context = text.substring(Math.max(0, idx - 150), Math.min(text.length, idx + m.length + 150));
                    console.log(`\nURL: ${m}`);
                    console.log(`Context:\n${context}\n${'-'.repeat(40)}`);
                  } catch (err) {}
                });
              }
            }
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
}

console.log('Searching compiled Next.js cache for Google CDN image URLs...');
findUrls('./.next');
