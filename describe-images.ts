import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

const dir = './public/images';
try {
  const files = fs.readdirSync(dir);
  console.log(`Contents of ${dir}:`);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    let dims = 'unknown';
    try {
      const fileOutput = execSync(`file "${fullPath}"`).toString();
      const match = fileOutput.match(/,\s*(\d+x\d+),/);
      if (match) {
        dims = match[1];
      } else {
        // Fallback match
        const match2 = fileOutput.match(/(\d+)\s*x\s*(\d+)/);
        if (match2) dims = `${match2[1]}x${match2[2]}`;
        else dims = fileOutput.trim();
      }
    } catch (err) {
      dims = 'error getting dims';
    }
    console.log(`- ${file}: ${stat.size} bytes, dimensions: ${dims}`);
  }
} catch (e) {
  console.log('Error reading directory:', e);
}
