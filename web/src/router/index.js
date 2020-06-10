import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login"),
    meta: { isPublic: true }
  },
  {
    path: "/",
    name: "Layout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    children: [
      {
        path: "/index",
        name: "UserList",
        component: () => import("@/views/list")
      },
      {
        path: "/index/edit/:id",
        name: "UserListDetail",
        component: () => import("@/views/list/detail")
      },
      {
        path: "/index/create",
        name: "UserListCreate",
        component: () => import("@/views/list/detail")
      },
      {
        path: "/admin",
        name: "Admin",
        component: () => import("@/views/admin")
      },
      {
        path: "/admin/create",
        name: "AdminCreate",
        component: () => import("@/views/admin/detail")
      },
      {
        path: "/admin/edit/:id",
        name: "AdminDetail",
        component: () => import("@/views/admin/detail")
      },
    ]
    
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, form, next) => {
  if(!to.meta.isPublic && !localStorage.token) {
    next({ path: '/login' })
  }else{
    next()
  }
})

export default router;
