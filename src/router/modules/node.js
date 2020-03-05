export default [
  {
    name: 'koa',
    path: '/koa',
    meta: { parent: 'node', title: 'koa' },
    component: resolve => require(['@/views/node/koa'], resolve)
  },
  {
    name: 'mongodb',
    path: '/mongodb',
    meta: { parent: 'node', title: 'mongodb' },
    component: resolve => require(['@/views/node/mongodb'], resolve)
  }
]