import { createServer } from "node:http";

const port = 8000;
server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end("Hello World");
});
