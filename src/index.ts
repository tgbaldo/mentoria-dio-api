import { createConnection } from "typeorm";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } from './settings';

(async() => {
    await createConnection({
        type: "mysql",
        host: DB_HOST,
        port: Number(DB_PORT),
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        entities: [__dirname + "/entity/*.{js,ts}"],
    });
    import('./app')
})();
