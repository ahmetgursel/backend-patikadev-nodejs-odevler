const http = require('http');

const server = http.createServer((req, res) => {
  console.log('bir istek gonderildi');

  url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Index Sayfasina Hos Geldiniz</h2>');
  } else if (url === '/hakkimda') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Hakkimda Sayfasina Hos Geldiniz</h2>');
  } else if (url === '/iletisim') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h2>Iletisim Sayfasina Hos Geldiniz</h2>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h2>Sayfa Bulunamadi!</h2>');
  }
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} uzerinde baslatilmistir.`);
});
