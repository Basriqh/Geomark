import * as http from 'http';

function checkUrl(url: string): Promise<{ code: number; headers: any }> {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      resolve({ code: res.statusCode || 0, headers: res.headers });
    }).on('error', (e) => {
      resolve({ code: -1, headers: e.message });
    });
  });
}

async function main() {
  console.log('Checking local server on port 3000...');
  const paths = [
    'http://localhost:3000/images/geomark-asphalt-roadway.jpg',
    'http://localhost:3000/geomark-logo.svg',
    'http://localhost:3000/'
  ];
  for (const p of paths) {
    const res = await checkUrl(p);
    console.log(`Path: ${p} -> Code: ${res.code}, Size: ${res.headers['content-length']}, Type: ${res.headers['content-type']}`);
  }
}

main();
