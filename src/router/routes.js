/*
 * @Date           : 2020-11-05 21:36:01
 * @FilePath       : /jinnian-space/src/router/routes.js
 * @Description    : 
 */
let routes = [
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

      //   component: () => import( "src/pages/note/index.vue")
      // },
      
  
      {
        path: "seo",
        name: "seo",
        meta:{
          show:false,
          order: 50
        },

        component: () => import( "src/pages/seo/index.vue")
      },
      
      {
        path: "node",
        name: "node",
        meta:{
          show:true,
          order: 18
        },

        component: () => import( "src/pages/node/index.vue")
      }, 
      {
        path: "web",
        name: "web",
        meta:{
          show:true,
          order: 16
        },
        component: () => import( "src/pages/web/index.vue")
      },
      {
        path: "ios_android",
        name: "ios_android",
        meta:{
          show:false,
          order: 50
        },
        component: () => import( "src/pages/ios_android/index.vue")
      },
      {
        path: "c",
        name: "c",
        meta:{
          show:false,
          order: 50
        },
        component: () => import( "src/pages/c/index.vue")
      },
      {
        path: "english",
        name: "english",
        meta:{
          show:true,
          order: 15
        },
        component: () => import( "src/pages/english/index.vue")
      },
      {
        path: "docker",
        name: "docker",
        meta:{
          show:false,
          order: 50
        },
        component: () => import( "src/pages/docker/index.vue")
      },
      {
        path: "go",
        name: "go",
        meta:{
          show:false,
          order: 50
        },
        component: () => import( "src/pages/go/index.vue")
      },
      {
        path: "java",
        name: "java",
        meta:{
          show:true,
          order: 20
        },
        component: () => import( "src/pages/java/index.vue")
      },
      {
        path: "k8s",
        name: "k8s",
        meta:{
          show:false,
          order: 25
        },
        component: () => import( "src/pages/k8s/index.vue")
      },
      {
        path: "linux",
        name: "linux",
        meta:{
          show:true,
          order: 26
        },
        component: () => import( "src/pages/linux/index.vue")
      },
      {
        path: "mba",
        name: "mba",
        meta:{
          show:false,
          order: 50
        },
        component: () => import( "src/pages/mba/index.vue")
      },
      {
        path: "operation",
        name: "operation",
        meta:{
          show:false,
          order: 33
        },
        component: () => import( "src/pages/operation/index.vue")
      },
      {
        path: "os",
        name: "os",
        meta:{
          show:true,
          order: 35
        },
        component: () => import( "src/pages/os/index.vue")
      },
      {
        path: "other",
        name: "other",
        meta:{
          show:false,
          order: 50
        },
        component: () => import( "src/pages/other/index.vue")
      },
      {
        path: "php",
        name: "php",
        meta:{
          show:true,
          order: 39
        },
        component: () => import( "src/pages/php/index.vue")
      },
      {
        path: "python",
        name: "python",
        meta:{
          show:false,
          order: 50
        },
        component: () => import( "src/pages/python/index.vue")
      },
      {
        path: "sql",
        name: "sql",
        meta:{
          show:true,
          order: 41
        },
        component: () => import( "src/pages/sql/index.vue")
      },
      {
        path: "tensorflow",
        name: "tensorflow",
        meta:{
          show:false,
          order: 50
        },
        component: () => import( "src/pages/tensorflow/index.vue")
      },
      
      {
        path: "config-refer",
        name: "config-refer",
        meta:{
          show:true,
          order: 45
        },
        component: () => import( "src/pages/config-refer/index.vue")

        
      },
      {
        path: "bookshelf",
        name: "bookshelf",
        meta:{
          show:true,
          order: 50
        },
        component: () => import( "src/pages/bookshelf/index.vue")

        
      },

      {
        path: "essay",
        name: "essay",
        meta:{
          show:true,
          order: 1
        },
        component: () => import( "src/pages/essay/index.vue")

        
      },
 
      {
        path:"qiqi",
        name:"qiqi",
        meta:{
          show:false,
          order: 50
        },
        component: () =>import("src/pages/qi/index.vue")
      },

 
      {
        path:"cs-notes",
        name:"cs-notes",
        meta:{
          show:true,
          order: 100
        },
        component: () =>import("src/pages/other-blog/cs-notes.vue")
      },


   
    ]
  }
];

// Always leave this as last one（总是吧这个作为最后一个）
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import( "src/pages/web/index.vue")
  });
}

let pages= routes[0]['children']
let arr=[]

routes[0]['children'] =pages.filter(x=>x['meta']&&x['meta']['show'])

export default routes;
