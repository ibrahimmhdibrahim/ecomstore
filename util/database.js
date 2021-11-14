import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "ecomstore",
    password: ""
});

export default pool.promise();