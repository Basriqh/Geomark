import * as fs from 'fs';
import * as path from 'path';

function walk(dir: string, cb: (p: string) => void) {
  try {
    const list = fs.readdirSync(dir);
    for (const f of list) {
      const fp = path.join(dir, f);
      const stat = fs.statSync(fp);
      if (stat.isDirectory()) {
        walk(fp, cb);
      } else {
        cb(fp);
      }
    }
  } catch(e){}
}

const urls = new Set<string>();

walk('./.next', (fp) => {
  if (fp.endsWith('.js') || fp.endsWith('.html') || fp.endsWith('.json')) {
    try {
      const content = fs.readFileSync(fp, 'utf8');
      const matches = content.match(/https:\/\/lh3\.googleusercontent\.com\/[^\s"'}()]+/g);
      if (matches) {
        matches.forEach(u => {
          urls.add(u);
        });
      }
    } catch(e){}
  }
});

console.log('ALL UNIQUE GOOGLE CDN URLS FOUND IN CACHE:');
Array.from(urls).forEach(url => {
  console.log(`- ${url}`);
});
