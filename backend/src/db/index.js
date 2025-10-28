import pg from "pg"
import { DB_NAME } from "../constants.js";

const db = new pg.Client({
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: DB_NAME,
        password: process.env.PG_PASSWORD,
        port: process.env.PG_PORT,
    });


export {db}
