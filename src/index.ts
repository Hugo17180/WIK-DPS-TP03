import * as http from 'http';
import * as os from 'os';
const port = process.env.PING_LISTEN_PORT ?? 8080;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') { 
    res.writeHead(200, {
    });
    res.end(JSON.stringify(req.headers, null, 2));
    console.log(os.hostname());
  } else {
    res.statusCode=404;
    res.end();
  }
});
server.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur le port ${port}`);
});