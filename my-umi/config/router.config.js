export default [
  //user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  }, //app
  {
    path: '/',
    component: '../layouts/SecurityLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/BasicLayout',
        authority: ['admin', 'user'],
        routes: [
          {
            path: '/',
            redirect: '/home',
          },
          {
            path: '/home',
            name: 'home',
            // icon: 'smile',
            component: './Home',
          },
          {
            path: '/admin',
            name: 'admin',
            // icon: 'crown',
            component: './Admin',
            authority: ['admin'],
          },
          {
            name: 'function',
            // icon: 'smile',
            path: '/',
            routes: [
              {
                name: 'category',
                path: '/category',
                component: './Function/CategoryPage',
              },
              {
                name: 'record',
                path: '/record',
                component: './Function/RecordPage',
              },
              {
                name: 'teststart',              
                path: '/test/teststart',
                hideInMenu: 'true',
                component: './Function/TestPage/TestStart',
              },
              {
                name: 'testdetail',               
                path: '/test/testdetail',
                hideInMenu: 'true',
                component: './Function/TestPage/TestDetail',
              },
              {
                name: 'test',
                path: '/test',
                component: './Function/TestPage',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
