import { createServer } from "http";
import dot from "dot";
import { hostname } from "os";

const template = dot.template(`
<!doctype html>
<html>
  <head>
    <title>Processed by {{=it.host}}</title>
  </head>
  <body>
    <h1>This page was created on the droplet with hostname: {{=it.host}}</h1>
  </body>
</html>
`);

const server = createServer((req, res) => {
  const host = hostname();
  res.end(template({ host }));
});

server.listen(3000);
