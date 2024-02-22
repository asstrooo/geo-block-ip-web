const geoip = require('geoip-lite');

const allowedCountryCode = 'ES';

const http = require('http');

http.createServer((req, res) => {
  const clientIP = req.connection.remoteAddress;
  const geo = geoip.lookup(clientIP);

  if (geo && geo.country === allowedCountryCode) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bienvendio a mi WEB!');
  } else {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Acceso denagado a tu ip :(.');
  }
}).listen(8080);
console.log ("sistema de ips puesto")
