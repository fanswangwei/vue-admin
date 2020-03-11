const Router = require('koa-router');
const router = new Router();
const { logs } = require('../utils/common')
const UserInfo = require('../dbs/models/userInfo');

router.get('/api/searchUserInfo', async (ctx, next) => {
  logs(ctx, JSON.stringify(ctx.request.query))
  // 获取请求参数
  // console.log(ctx.request.query)
  let params = {}
  if (ctx.request.query && ctx.request.query.userInfoID) {
    params._id = ctx.request.query.userInfoID;
  }
  let data = await UserInfo.find(params, async (err, res) => {
    if (err) {
      console.log('mongo get error:', err);
      ctx.body = {
        code: 500,
        data: err
      }
    }
  })
  // 分页操作
  // .skip((pageNum - 1) * pageSize)
  // .limit(pageSize)
  // .sort({createdTime: -1});

  ctx.body = {
    code: 200,
    data: data,
    message: 'success'
  }
})

module.exports = router