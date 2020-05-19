const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');
const bodyParser = require("koa-bodyparser");
const {logs} = require('./utils/common');
const app = new Koa();
const router = new Router();

//操作数据库,引入模块
const mongoose = require('mongoose');
const config = require('./config')
//mongoose,连接数据库
mongoose.connect(config.DB_CONN_STR, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err, db) {
    if (err) {
        console.log('mongo error:', err);
        return;
    }
    console.log("mongo success!");
})

// 设置跨域
app.use(cors())
app.use(bodyParser())
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Credentials', 'true');
    ctx.set("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (ctx.method === 'OPTIONS') {
        ctx.body = 200;
    } else {
        await next();
    }
});

const addUser = require('./routers/addInfo');
app.use(addUser.routes(), router.allowedMethods());

const searchUser = require('./routers/searchInfo');
app.use(searchUser.routes(), router.allowedMethods());

const updateInfo = require('./routers/updateInfo');
app.use(updateInfo.routes(), router.allowedMethods());

const deleteInfo = require('./routers/deleteInfo');
app.use(deleteInfo.routes(), router.allowedMethods());

app.listen(3001, () => {
    console.log('Server is running at port start...')
});