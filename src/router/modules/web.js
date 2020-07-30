export default [
  {
    name: 'vue',
    path: '/vue',
    parents: 'web',
    meta: { parent: 'web', title: 'vue' },
    component: resolve => require(['@/views/web/vue'], resolve)
  },
  {
    name: 'react',
    path: '/react',
    meta: { parent: 'web', title: 'react' },
    component: resolve => require(['@/views/web/react'], resolve)
  },
  {
    name: 'tensorflowJS',
    path: '/tensorflowJS',
    meta: { parent: 'web', title: 'tensorflowJS' },
    component: resolve => require(['@/views/web/tensorflowJS'], resolve)
  },
  {
    name: 'testApi',
    path: '/testApi',
    meta: { parent: 'web', title: 'testApi' },
    component: resolve => require(['@/views/web/testApi'], resolve)
  }
]