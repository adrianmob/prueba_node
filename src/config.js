import { Pool } from "pg";
const pool = new Pool({
  host: "localhost",
  user: "adrian",
  password: "",
  database: "prueba",
  port: "5432",
});

export default pool;
