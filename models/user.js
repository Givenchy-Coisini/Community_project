const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    create_time: {
        type: Date,
        // 不要写Date.nowe() 因为会直接调用
        // 这里直接给了一个方法Date.now
        // 当你去new Model 的时候，如果你没有传递create_time，则mongoose会调用default指定的Date.now 使用其返回值作为默认值
        default: Date.now
    },
    last_modify_time:{
        type: Date,
        default: Date.now
    },
    avatar:{
        type:String,
        default:'/public/img/avatar-default.png'
    },
    bio:{
        type:String,
        default:''
    },
    sex:{
        type:Number,
        enum:[-1,0,1],
        default:-1
    },
    birthday:{
        type:Date
    },
    status:{
        type:Number,
        // 0没有权限设置
        // 1是否可以评论
        // 2是否可以登录
        enum:[0,1,2],
        default:0
    }
})


module.exports = mongoose.model('User', userSchema)