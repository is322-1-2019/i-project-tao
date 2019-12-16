import Vue from "vue";
import VueRouter from "vue-router";

import {  store  } from "../store";

import Ex01Page from "../components/Ex01Page.vue";
import Ex02Page from "../components/Ex02Page.vue";
import LogoutPage from "../components/LogoutPage.vue";
import LoginPage from "../components/LoginPage.vue";

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routeList = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/ex01",
    component: Ex01Page,
  },
  {
    path: "/ex02",
    component: Ex02Page,
  },
  {
    path: "/logout",
    component: LogoutPage,
  }
];

export const router = new VueRouter({
  routes: routeList,
});


router.beforeEach((to, from, next) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
       store.dispatch("messages/addMessage", "Please Log In.");
      next("/");
    }
    
  });

  next();
});