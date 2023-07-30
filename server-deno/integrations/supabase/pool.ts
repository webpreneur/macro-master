
import { Pool } from "../../deps.ts";

import config from "../../config.ts";

const databaseUrl = Deno.env.get("DATABASE_URL") || config.DATABASE_URL;

try {
  if (!databaseUrl) {
    throw new Error("No database URL provided");
  }
} catch (error) {
  console.error(error);
}

// Create a database pool with three connections that are lazily established
const pool: Pool = new Pool(databaseUrl, 3, true);

export default pool;
