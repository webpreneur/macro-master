import { Application, oakCors } from "./deps.ts";

import config from "./config.ts";
import router from "./routes/routes.ts";

// Importing pool to initialize it on server start
import _pool from "./integrations/supabase/pool.ts";

const { APP_PORT } = config;

const port = APP_PORT ? Number(APP_PORT) : 8280;

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
