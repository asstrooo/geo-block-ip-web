const geoip = require('geoip-lite');
//el pais que quieres que pueda acceder a tu pagina web
const allowedCountryCode = 'ES';

const http = require('http');
///esto hace la request para ver si tu ip es valida para entrar en la pagina web
http.createServer((req, res) => {
  const clientIP = req.connection.remoteAddress;
  //geocalizando la ip 
  const geo = geoip.lookup(clientIP);



  if (geo && geo.country === allowedCountryCode) {
    ///esto les dira que si que pueden acceder a la web ya que su ip se encuentra dentro de españa 
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bienvendio a mi WEB!');
  } else {
    //esto les dira que no pueden acceder a la web ya que su ip no  es de España
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Acceso denagado a tu ip :(.');
  }
}).listen(8080);





/// este daremos un mensaje en la cmd de que el sistema de ips esta bien puesto 
console.log ("sistema de ips puesto")


