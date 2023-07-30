import type { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run server.ts",
      desc: "run my app.ts file",
      allow: ["net", "read", "env", "run"],
      unstable: true,
    },
  },
};

export default config;