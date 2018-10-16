//专门用于配置mysql文件
//引入mysql文件
const mysql = require('mysql');
//配置文件
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'msg52'
});
//导出本模块
module.exports.connection = connection;