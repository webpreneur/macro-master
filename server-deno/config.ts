import { load } from "https://deno.land/std@0.196.0/dotenv/mod.ts";

const config = await load();

export default config;

// export const APP_PORT = Number(Deno.env.get('APP_PORT'));
