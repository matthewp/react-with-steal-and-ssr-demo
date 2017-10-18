const Zone = require('can-zone');
const express = require('express');
const fs = require('fs');
const app = express();

const steal = require("done-ssr/zones/steal");
const requests = require("done-ssr/zones/requests");
const dom = require("can-zone-jsdom");

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

    steal({ config: __dirname + "/package.json!npm" })
  ]);

  const {html} = await zone.run();
  response.end(html);
});

require('http').createServer(app).listen(PORT);

console.error(`Server running at https://localhost:${PORT}`);
