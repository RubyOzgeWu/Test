const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "login",
        component: () => import("pages/TestLogin.vue"),
      },
      {
        path: "projects",
        component: () => import("pages/MainControl.vue"),
      },
      {
        path: "project/:id",
        name: "project",
        component: () => import("../pages/ProjectView.vue"),
      },
      {
        path: "task",
        component: () => import("../pages/TaskControl.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
