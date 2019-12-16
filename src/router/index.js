import Vue from "vue";
import VueRouter from "vue-router";

import {  store  } from "../store";

import LandingPage from "../components/LandingPage.vue";
import Main1Page from "../components/Main1Page.vue";
import Main2Page from "../components/Main2Page.vue";
import LogoutPage from "../components/LogoutPage.vue";
import LoginPage from "../components/LoginPage.vue";

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routeList = [
  {
    path: "/",
    component: LandingPage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/ex01",
    component: Main1Page,
  },
  {
    path: "/ex02",
    component: Main2Page,
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
      next("/login");
    }
    
  });

  next();
});