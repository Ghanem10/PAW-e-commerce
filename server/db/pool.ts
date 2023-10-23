import { Pool } from 'pg';
import { config } from 'dotenv';
config();

const pool = new Pool({
    user: `${process.env.USER}`,
    password: `${process.env.PASSWORD}`,
    host: "localhost",
    port: 5432,
    database: "ecommerce"
});

export { pool };