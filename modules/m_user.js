//模型：操作数据库，并返回数据库操作的结果
//导入db模块
const db = require('../tools/db_config');


//定义一个检查邮箱的
const checkEmail = function (email, callback) {
    const sql = 'SELECT * FROM `users` WHERE `email`=?';
    //执行SQL语句的人
    db.connection.query(sql, email, (err, data) => {
        if(err) {
            return callback(err, null);
        }
        callback(null, data);
    })
}

//导出此模块
module.exports.checkEmail = checkEmail;