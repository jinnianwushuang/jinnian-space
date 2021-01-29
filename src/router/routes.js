/*
 * @Date           : 2020-11-05 21:36:01
 * @FilePath       : /jinnian-space/src/router/routes.js
 * @Description    : 
 */
const routes = [
  // {
  //   path:"/",
  //   name:"login",
  //   component:() =>import("src/pages/login/index.vue"),
  // },
 
  // {
  //   path:"/main",
  //   name:"main",
  //   redict:{nme:"entry"},
  //   component:() =>import("src/layouts/MyLayout.vue"),
  //   children:[
  //     {
  //       path:"entry",
  //       name:"entry",
  //       component:()=>("src/pages/entry/index.vue"),
  //     },
  //   ],
  // },




  
  {
    path: "/",
    component: () => import("src/layouts/MyLayout.vue"),

    children: [
      // {
      //   path: "note",
      //   name: "note",

      //   component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/note/index.vue")
      // },
      
  
      {
        path: "seo",
        name: "seo",

        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/seo/index.vue")
      },
      
      {
        path: "node",
        name: "node",

        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/node/index.vue")
      }, 
      {
        path: "web",
        name: "web",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/web/index.vue")
      },
      {
        path: "ios_android",
        name: "ios_android",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/ios_android/index.vue")
      },
      {
        path: "c",
        name: "c",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/c/index.vue")
      },
      {
        path: "english",
        name: "english",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/english/index.vue")
      },
      {
        path: "docker",
        name: "docker",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/docker/index.vue")
      },
      {
        path: "go",
        name: "go",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/go/index.vue")
      },
      {
        path: "java",
        name: "java",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/java/index.vue")
      },
      {
        path: "k8s",
        name: "k8s",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/k8s/index.vue")
      },
      {
        path: "linux",
        name: "linux",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/linux/index.vue")
      },
      {
        path: "mba",
        name: "mba",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/mba/index.vue")
      },
      {
        path: "operation",
        name: "operation",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/operation/index.vue")
      },
      {
        path: "os",
        name: "os",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/os/index.vue")
      },
      {
        path: "other",
        name: "other",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/other/index.vue")
      },
      {
        path: "php",
        name: "php",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/php/index.vue")
      },
      {
        path: "python",
        name: "python",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/python/index.vue")
      },
      {
        path: "sql",
        name: "sql",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/sql/index.vue")
      },
      {
        path: "tensorflow",
        name: "tensorflow",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/tensorflow/index.vue")
      },
      {
        path: "bookshelf",
        name: "bookshelf",
        component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/bookshelf/index.vue")

        
      },
      {
        path:"qiqi",
        name:"qiqi",
        component: () =>import("src/pages/qi/index.vue")
      },



    ]
  }
];

// Always leave this as last one（总是吧这个作为最后一个）
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import(/* webpackChunkName: "jinnianSpace" */ "src/pages/web/index.vue")
  });
}

export default routes;
