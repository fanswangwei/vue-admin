const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx, next) => {
  let title = '文件上传';
  await ctx.render('index', { title })
});

//路由
router.post('/api/addUserInfo', async (ctx, next) => {
  // var param = ctx.req;
  console.log(ctx.request.body);

  ctx.body = {
    code: 200,
    data: ctx.request.body
  }
  // if (param) {
  //   console.error("ERROR: ");
  //   ctx.body = {
  //     code: 501,
  //     data: {
  //       message: '缺少参数'
  //     }
  //   }
  //   return false;
  // } else {
  //   let params = {
  //     name: 'String',
  //     age: 'String',
  //     sex: 'String',
  //     height: 'String',
  //     weight: 'String',
  //     birth: 'String',
  //     phone: 'Number',
  //     email: 'String',
  //     createdTime: new Date(),
  //     remak: 'String'
  //   }

  //   // 新建数据、保存数据
  //   let newData = new userInfo(params)
  //   newData.save(function (err) {
  //     if (err) {
  //       console.log('mongo error: ', err)
  //       ctx.body = {
  //         code: 500,
  //         data: err
  //       }
  //       return;
  //     }
  //   });
  //   // 获取保存的路径
  //   ctx.body = {
  //     code: 200,
  //     data: config.filePath + params.url // 返回访问路径
  //   }
  // }
});

module.exports = router
