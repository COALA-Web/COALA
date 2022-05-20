const mysql = require("mysql");

const host = "coala.crmeanf0td5o.ap-northeast-2.rds.amazonaws.com";

module.exports = {
    connection: mysql.createConnection({
        host: host,
        user: "coala",
        password: "coala1234",
        database: "coala",
    }),
};