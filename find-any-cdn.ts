import * as fs from 'fs';
import * as path from 'path';

function scan(dir: string) {
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          scan(fullPath);
        } else {
          if (stat.size < 5000000) { // skip very large files if any
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('lh3.googleusercontent.com')) {
              console.log(`Scan found in: ${fullPath}`);
              const regex = /(https:\/\/lh3\.googleusercontent\.com\/[a-zA-Z0-9_\-\/]+)/g;
              const matches = content.match(regex);
              if (matches) {
                const unique = Array.from(new Set(matches));
                console.log(`Unique matches in ${file}:`);
                unique.forEach(u => console.log(`  ${u}`));
              }
            }
          }
        }
      } catch (err) {}
    }
  } catch (err) {}
}

scan('./.next');
scan('./app');
