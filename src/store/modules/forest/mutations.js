import Vue from "vue";

export const mutations = {
  setForest(state, forest) {
      Vue.set(state, "forest", forest);
  },
  addTree(state, tree) {
    let forest = state.forest;
    forest.push(tree);
    Vue.set(state, "forest", forest);
  },
  deleteTree(state, tree) {
    let forest = state.forest;
    forest.splice(
      forest.findIndex(
        item => {
          return item.id == tree.id
        }), 1);
    Vue.set(state, "forest", forest);
  }
};