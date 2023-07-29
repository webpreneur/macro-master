import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

import config from "./config.ts";

import router from "./routes/routes.ts";

const { APP_PORT } = config;

const port = APP_PORT ? Number(APP_PORT) : 8280;

console.log(APP_PORT)

const app = new Application();

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `--- Listening on: ${secure ? "https://" : "http://"}${
      hostname ?? "localhost"
    }:${port} ---`,
  );
});
await app.listen({ port });
