<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    
    <div class="card">
      <b-field label="" v-if="forest.length">
       <b-table @dblclick="deleteTree" :data="forest" :columns="columns" :selected.sync="selected" focusable expanded>
      </b-table>
      
      
      <img :src="this.forest[0].treeImage[0]" width="150" height="300">
      

      </b-field>
    </div>

    <div class="card">
      <b-field class="buttons" grouped>
      <b-button type="is-dark" @click="newPlant">New Plant</b-button>
      </b-field>
    </div>

  </div>
</template>
<script>

import NavBar from "./NavBar.vue";
import { mapState } from "vuex";

export default {
  
  components: {
    NavBar
  },
  created() {
    this.$store.dispatch("forest/getForest");
  },

  data() {
    return {
      selected: {},
      columns: [
        { field: "note", label: "My Note" },
        
      ],
      treeImage: ['https://f-scope.net/images/cartoon-palm-tree-png-14.png',
      ],
      
    };
  },
  computed: {
    ...mapState("forest", ["forest"])
  },

  methods: {
    deleteTree() {
      this.$store.dispatch("forest/deleteTree", this.selected );
    },
    newPlant() {
      this.$router.push("/ex01");
    },
  }

}
</script>

<style>
table, th, td , tr {
  border: 1px solid rgb(252, 252, 252);
  padding: 5px;
}
table {
  border-spacing: 20px;
}
</style>