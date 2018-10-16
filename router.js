// import { handleSignin } from './controllers/user';
//导入express
const express = require('express');
//导入user用户模块
const user = require('./controllers/user')
//使用express.Router 实例化Router对象
const router = express.Router();
//使用router监听请求
router.get('/signin', user.showSignin);
//处理post提交表单中的数据的请求
router.post('/signin', user.handleSignin);
//把router模块导出
module.exports = router;