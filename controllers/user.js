//此文件用于处理函数
// connection.connect();

//导入数据库操作的模块
const m_user = require('../modules/m_user');

//查询填写的表单数据是否存在数据库中的sql语句
const handleSignin = (req, res) => {
    const body = req.body;
    // console.log(body); //获取到的data是对象的形式
    m_user.checkEmail(body.email, (err, data) => {
        if (err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            });
            // throw err;
        }
        // console.log(result);//返回值是一个数组
        //先验证邮箱是否存在，如果不存在数组为空
        if (data.length == 0) {
            return res.send({
                code: 1,
                message: '邮箱不存在'
            });
        }

        //如果邮箱存在则再验证邮箱对象的密码是否正确
        if (data[0].password !== body.password) {
            return res.send({
                code: 2,
                message: '密码不正确'
            })
        }
        //如果以上验证都通过了则
        //如果相等，登录成功，返回登录成功，前台进行页面的跳转
        res.send({
            code: 200,
            message: '登录成功'
        })
    })
}

    //登录页面的渲染
    const showSignin = (req, res) => {
        //渲染,使用render方法，会去views文件中找对应的文件
        res.render('signin.html');
    };

    //导出模块
    module.exports.showSignin = showSignin;
    module.exports.handleSignin = handleSignin;