import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";

const state = {
  forest: [],
  status: null,
};

const namespaced = true;

export const forest = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
