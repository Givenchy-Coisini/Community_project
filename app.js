const express  = require("express");
const path = require('path')
const router= require('./router')
const bodyParser = require('body-parser')
const app =express()

app.use('/public',express.static(path.join(__dirname,'./public/')))
app.use('/node_modules',express.static(path.join(__dirname,'./node_modules/')))//相对路径改为绝对路径

app.engine('html',require('express-art-template'))
app.set('views',path.join(__dirname,'./views/'))//默认就是views目录

// ?挂载路由之前配置解析表单请求体插件
// parse application/x-www-form-urlencoded
//配置body-parser  只要加入这个配置，则在req请求对象上会 多出一个属性:body
//也就是说你就可以直接通过 req.body来获取表单post请求体数据了
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// 把路由容器挂载到app服务中
app.use(router)
app.listen(3000,()=>{
    console.log('server is ok')
})