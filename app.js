//是程序的入口文件

//导包
const express = require('express');
//导入配置路由的包
const router = require('./router');
//导入body-parser包
const bodyParser = require('body-parser');
//实例化app对象
const app = express();

//统一处理静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));

//配置包
//需要使用模板引擎，配置模板引擎的包
app.engine('html', require('express-art-template'));

//配置导入的body-parser包
app.use(bodyParser.urlencoded({ extended: false }));
//使用app.use方法让app可以使用router
app.use(router);
//绑定端口号
app.listen(12347, () => {
    console.log('success------');
});