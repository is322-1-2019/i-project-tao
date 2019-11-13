<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    
  <table style="width:100%">
    <tr>
    <img src="https://us.123rf.com/450wm/flobow/flobow1810/flobow181000032/110785955-stock-vector-young-tree-in-the-bale-isolated-on-white-background.jpg?ver=6" width="100" height="200">
    <img src="https://us.123rf.com/450wm/flobow/flobow1810/flobow181000032/110785955-stock-vector-young-tree-in-the-bale-isolated-on-white-background.jpg?ver=6" width="100" height="200">
    <img src="https://us.123rf.com/450wm/flobow/flobow1810/flobow181000032/110785955-stock-vector-young-tree-in-the-bale-isolated-on-white-background.jpg?ver=6" width="100" height="200">
    

    </tr>
    <tr>
    <img src="https://us.123rf.com/450wm/flobow/flobow1810/flobow181000032/110785955-stock-vector-young-tree-in-the-bale-isolated-on-white-background.jpg?ver=6" width="100" height="200">
    <img src="https://us.123rf.com/450wm/flobow/flobow1810/flobow181000032/110785955-stock-vector-young-tree-in-the-bale-isolated-on-white-background.jpg?ver=6" width="100" height="200">
    <img src="https://us.123rf.com/450wm/flobow/flobow1810/flobow181000032/110785955-stock-vector-young-tree-in-the-bale-isolated-on-white-background.jpg?ver=6" width="100" height="200">
    </tr>
  
  </table>

  <b-field class="buttons" grouped>
    <b-button type="is-primary" @click="Plant">Add New Plant</b-button>
      
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

<style>
table, th, td {
  border: 1px solid white;
  padding: 5px;
}
table {
  border-spacing: 15px;
}
</style>

