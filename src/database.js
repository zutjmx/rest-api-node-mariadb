const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sistemas',
    database: 'company'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Conexión a BD exitosa!!!');
    }
});

module.exports = mysqlConnection;
