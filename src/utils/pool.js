import pg from 'pg';
const Pool = pg.Pool

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "kodeden",
  password: process.env.PASSWORD,
  port: 5433
});