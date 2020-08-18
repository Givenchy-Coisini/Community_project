const express = require('express')
// 路由多和复杂的时候需要单开一个文件夹routes来存放不同的js文件(路由)

const router = express.Router()
router.get('/',(req,res)=>{
    res.render('index.html')
})
router.get('/login',(req,res)=>{
    res.render('login.html')
})
router.post('/login',(req,res)=>{

})
router.get('/register',(req,res)=>{
    res.render('register.html')
})
router.post('/register',(req,res)=>{
    // 1.获取表单提交的数据
    // 2.操作数据库
    // 发送响应
    console.log(req.body)
})
module.exports = router