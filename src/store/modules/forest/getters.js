export const getters = {
    activeForest: state => {
      return state.forest.filter(forest => forest.isActive);
    }
  };