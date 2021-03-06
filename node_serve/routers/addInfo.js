const Router = require('koa-router');
const router = new Router();
const {logs} = require('../utils/common');

const UserInfo = require('../dbs/models/userInfo');

//路由
router.post('/api/addUserInfo', async (ctx, next) => {
  logs(ctx, JSON.stringify(ctx.request.body))
  // 获取传递参数
  var params = ctx.request.body;
  // console.log(ctx.request.body);
  for(let item in params) {
    if(item !== 'remark' && !params[item]){
      ctx.body = {
        code: 2001,
        data: { message: '缺少参数' }
      }
      return false;
    }
  }
  // 新建数据、保存数据
  let newData = new UserInfo(params)
  newData.save(function (err) {
    if (err) {
      console.log('mongo error: ', err)
      ctx.body = {
        code: 500,
        data: err
      }
      return;
    }
  });
  // 保存成功
  ctx.body = {
    code: 200,
    data: params,
    message: 'success'
  }
});

module.exports = router
