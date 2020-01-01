
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MyLayout.vue'),
    children: [
      { path: 'seo',name:'seo', component: () => import('src/pages/seo/index.vue') },
      { path: 'web',name:'web', component: () => import('src/pages/web/index.vue') },
      { path: 'c',name:'c', component: () => import('src/pages/c/index.vue') },
      { path: 'english',name:'english', component: () => import('src/pages/english/index.vue') },
      { path: 'docker',name:'docker', component: () => import('src/pages/docker/index.vue') },
      { path: 'go',name:'go', component: () => import('src/pages/go/index.vue') },
      { path: 'java',name:'java', component: () => import('src/pages/java/index.vue') },
      { path: 'k8s',name:'k8s', component: () => import('src/pages/k8s/index.vue') },
      { path: 'linux',name:'linux', component: () => import('src/pages/linux/index.vue') },
      { path: 'mba',name:'mba', component: () => import('src/pages/mba/index.vue') },
      { path: 'operation',name:'operation', component: () => import('src/pages/operation/index.vue') },
      { path: 'os',name:'os', component: () => import('src/pages/os/index.vue') },
      { path: 'other',name:'other', component: () => import('src/pages/other/index.vue') },
      { path: 'php',name:'php', component: () => import('src/pages/php/index.vue') },
      { path: 'python',name:'python', component: () => import('src/pages/python/index.vue') },
      { path: 'sql',name:'sql', component: () => import('src/pages/sql/index.vue') },
      { path: 'tensorflow',name:'tensorflow', component: () => import('src/pages/tensorflow/index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('src/pages/error/Error404.vue')
  })
}

export default routes
