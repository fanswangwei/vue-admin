const Router = require('koa-router');
const router = new Router();
const {logs} = require('../utils/common');

const UserInfo = require('../dbs/models/userInfo');

//路由
router.post('/api/deleteUserInfo', async (ctx, next) => {
  logs(ctx, JSON.stringify(ctx.request.body))
  // 获取传递参数
  var params = ctx.request.body;
  // console.log(ctx.request.body);
  UserInfo.remove({_id: params.userInfoID}, async (err) => {
    if(err){
      console.log('mongo error: ', err)
      ctx.body = {
        code: 500,
        data: err
      }
      return;
    }
  })
  // 删除成功
  ctx.body = {
    code: 200,
    data: params,
    message: 'success'
  }
});

module.exports = router
