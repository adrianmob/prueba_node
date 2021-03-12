import { Pool } from "pg";
const pool = new Pool({
  host: "localhos",
  user: "adrian",
  password: "s",
  database: "prueba",
  port: "5432",
});

export default pool;
