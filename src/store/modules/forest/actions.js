export const actions = {
    getForest() {
    },
    addTree(context, tree){
      context.commit("addTree", tree);
    },
    deleteTree(context, tree){
      context.commit("deleteTree", tree);
    }
  };