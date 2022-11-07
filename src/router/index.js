import { createRouter, createWebHistory } from "vue-router";

import dashboard from "../views/backend/dashboard";
import student from "../views/backend/student";
import studentLayout from "../views/backend/student/studentLayout";
import studentClientList from "../views/backend/student/clientList";
import studentProfile from "../views/backend/student/studentProfile";

import admin from "../views/backend/admin";
import adminLayout from "../views/backend/admin/adminLayout";
import clientEntry from "../views/backend/admin/clientEntry";
import clientList from "../views/backend/admin/clientList";
import entryList from "../views/backend/admin/entryList";
import newEntry from "../views/backend/admin/newEntry";
import adminProfile from "../views/backend/admin/profile";
import userList from "../views/backend/admin/userList";

import management from "../views/backend/management";
import managementLayout from "../views/backend/management/managementLayout";
import managementClientList from "../views/backend/management/clientList";
import managementEntryList from "../views/backend/management/entryList";
import managementNewEntry from "../views/backend/management/newEntry";
import managementProfile from "../views/backend/management/profile";

import authLayout from "../views/frontend/authLayout";
import login from "../views/frontend/login";
import signup from "../views/frontend/signup";
import forget from "../views/frontend/forget";
import portfolio from "../views/frontend/portfolio";

const routes = [
  {
    path: "/dashboard",
    name: "dasboard",
    component: dashboard,
  },

  {
    path: "/admin",
    component: adminLayout,
    children: [
      {
        path: "",
        name: "admin",
        component: admin,
      },
      {
        path: "profile",
        name: "adminProfile",
        component: adminProfile,
      },
      {
        path: "users",
        name: "userList",
        component: userList,
      },
      {
        path: "client-list",
        name: "clientList",
        component: clientList,
      },
      {
        path: "client-entry",
        name: "clientEntry",
        component: clientEntry,
      },
      {
        path: "client-edit/:id",
        name: "clientEdit",
        component: clientEntry,
      },
      {
        path: "entry-list",
        name: "entryList",
        component: entryList,
      },
      {
        path: "new-entry",
        name: "newEntry",
        component: newEntry,
      },
    ],
  },

  {
    path: "/student",
    component: studentLayout,
    children: [
      {
        path: "",
        name: "student",
        component: student,
      },
      {
        path: "profile",
        name: "studentProfile",
        component: studentProfile,
      },
      {
        path: "client-list",
        name: "studentClientList",
        component: studentClientList,
      },
    ],
  },

  {
    path: "/management",
    component: managementLayout,
    children: [
      {
        path: "",
        name: "management",
        component: management,
      },
      {
        path: "client-list",
        name: "managementClientList",
        component: managementClientList,
      },
      {
        path: "entry-list",
        name: "managementEntryList",
        component: managementEntryList,
      },
      {
        path: "new-entry",
        name: "managementNewEntry",
        component: managementNewEntry,
      },
      {
        path: "profile",
        name: "managementProfile",
        component: managementProfile,
      },
    ],
  },

  {
    path: "/auth",
    component: authLayout,
    children: [
      {
        path: "login",
        name: "login",
        component: login,
      },
      {
        path: "signup",
        name: "signup",
        component: signup,
      },
      {
        path: "forget",
        name: "forget",
        component: forget,
      },
    ],
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: portfolio,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
