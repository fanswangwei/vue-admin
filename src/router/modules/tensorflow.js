export default [
  {
    name: 'tensorflow',
    path: '/tensorflow',
    meta: { parent: 'tensorflow', title: 'tensorflow' },
    component: resolve => require(['@/views/tensorflow'], resolve)
  },
  {
    name: 'studyTensor',
    path: '/studyTensor',
    meta: { parent: 'tensorflow', title: 'studyTensor' },
    component: resolve => require(['@/views/tensorflow/studyTensor'], resolve)
  },
  {
    name: 'studyVariable',
    path: '/studyVariable',
    meta: { parent: 'tensorflow', title: 'studyVariable' },
    component: resolve => require(['@/views/tensorflow/studyVariable'], resolve)
  },
  {
    name: 'studyModel',
    path: '/studyModel',
    meta: { parent: 'tensorflow', title: 'studyModel' },
    component: resolve => require(['@/views/tensorflow/studyModel'], resolve)
  }
]