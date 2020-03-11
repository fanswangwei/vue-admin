const Router = require('koa-router');
const router = new Router();
const {logs} = require('../utils/common');

const UserInfo = require('../dbs/models/userInfo');

router.post('/api/updateUserInfo', async (ctx, next) => {
  logs(ctx, JSON.stringify(ctx.request.body))
  let params = ctx.request.body;
  for(let item in params) {
    if(item !== 'remark' && !params[item]){
      ctx.body = {
        code: 2001,
        data: { message: '缺少参数' }
      }
      return false;
    }
  }
  // 更新数据
  console.log(params._id)
  UserInfo.update({_id: params._id}, {$set: params}, function (err) {
    if (err) {
      console.log('mongo error: ', err)
      ctx.body = {
        code: 500,
        data: err
      }
      return;
    }
  });
  // 更新成功
  ctx.body = {
    code: 200,
    data: params,
    message: 'success'
  }
})

module.exports = router;