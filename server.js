const Zone = require('can-zone');
const express = require('express');
const fs = require('fs');
const app = express();

const steal = require("done-ssr/zones/steal");
const requests = require("done-ssr/zones/requests");
const dom = require("can-zone-jsdom");
const pushMutations = require("done-ssr/zones/push-mutations");

const PORT = process.env.PORT || 8080;

app.use(express.static('.', { index: false }));

app.get('*', async (request, response) => {
  response.writeHead(200, { 'content-type': 'text/html' });

  var zone = new Zone([
    // Overrides XHR, fetch
    requests(request),

    // Sets up a DOM
    dom(request, {
      executeScripts: false,
      html: __dirname + "/production.html"
    }),

    steal({
      config: __dirname + "/package.json!npm",
      main: "react-with-steal-and-ssr-demo/main"
    }),

    pushMutations(response)
  ]);

  const zonePromise = zone.run();

  await zone.data.initialStylesLoaded;
  response.write(zone.data.html);

  await zonePromise;
  response.end();
});

require('donejs-spdy').createServer({
  key: fs.readFileSync(process.env.KEY),
	cert: fs.readFileSync(process.env.CERT),
	spdy: {
		protocols: ['h2', 'http/1.1']
	}
}, app).listen(PORT);

console.error(`Server running at https://localhost:${PORT}`);
