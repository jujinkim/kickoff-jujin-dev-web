import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";
const root = resolve("dist");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".wasm": "application/wasm",
  ".md": "text/markdown; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
};
createServer(async (req, res) => {
  try {
    let file = resolve(
      root,
      `.${decodeURIComponent(new URL(req.url, "http://localhost").pathname)}`,
    );
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory()) file = resolve(file, "index.html");
    res.writeHead(200, {
      "Content-Type": types[extname(file)] ?? "application/octet-stream",
    });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(await readFile(resolve(root, "404.html")));
  }
}).listen(4322, "127.0.0.1", () =>
  console.log("Static verification server: http://127.0.0.1:4322"),
);
