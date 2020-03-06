const Koa = require('koa');
const addUser = require('./routers/addInfo');
const Router = require('koa-router');
const cors = require('koa2-cors');
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


app.use(cors())
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

router.get("/api/health", async (ctx) => {
    ctx.body = { code: 200 }
})

app.use(async (ctx) => {
    ctx.body = 'Hello World';
});

app.use(addUser.routes(), router.allowedMethods());

app.listen(3000, () => {
    console.log('Server is running at port 3000...')
});