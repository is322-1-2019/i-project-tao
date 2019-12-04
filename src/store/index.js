import Vue from "vue";
import Vuex from "vuex";
import { forest } from "./modules/forest";
import { messages } from "./modules/message";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {  
    forest,
    messages
  }
});