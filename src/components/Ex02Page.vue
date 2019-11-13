<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <img src="https://us.123rf.com/450wm/flobow/flobow1810/flobow181000032/110785955-stock-vector-young-tree-in-the-bale-isolated-on-white-background.jpg?ver=6" width="400" height="800">
     <b-progress :value="80" show-value format="percent"></b-progress>
    
    <b-field class="buttons" grouped>
      <b-button type="is-primary" @click="touch">Back</b-button>
      <b-button type="is-primary" @click="reset">Finished</b-button>
    </b-field>
  </div>


</template>
<script>

import NavBar from "./NavBar.vue";

export default {
  components: {
    
    NavBar
  },
  data() {
    return {
      fullName: {
        title: '',
        firstName: '',
        lastName: '',
      }
    };
  }
}
</script>