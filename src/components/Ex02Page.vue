<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <div class="card">
      <b-field label="My Forest" v-if="people.length">
       <b-table @dblclick="deletePerson" :data="people" :columns="columns" :selected.sync="selected" focusable></b-table>
      </b-field>
      <!-- <table style="width:100%">
        <tr>
        <img src="http://pngimg.com/uploads/tree/tree_PNG3477.png" width="100" height="200">
        <img src="http://www.transparentpng.com/thumb/tree/texture-hackberry-tree-png-1.png" width="100" height="200">
        <img src="https://cdn.pixabay.com/photo/2017/05/05/12/37/nature-2286961_960_720.png" width="100" height="200">
        <img src="https://www.freepnglogos.com/uploads/tree-png/image-result-trees-follage-pinterest-6.png" width="100" height="200">
        <img src="https://i.pinimg.com/originals/56/92/a5/5692a5b2dd8155f5f901a067cc43c07b.png" width="100" height="200">
        <img src="https://www.trzcacak.rs/myfile/full/366-3668437_trees-texture-png-big-tree-photoshop.png" width="100" height="200">
        
        </tr>
        <tr>
        <img src="https://i.pinimg.com/originals/56/92/a5/5692a5b2dd8155f5f901a067cc43c07b.png" width="100" height="200">
        <img src="http://pngimg.com/uploads/tree/tree_PNG3477.png" width="100" height="200">
        <a href="https://www.trzcacak.rs/myfile/full/366-3668437_trees-texture-png-big-tree-photoshop.png"><img src="https://www.trzcacak.rs/myfile/full/366-3668437_trees-texture-png-big-tree-photoshop.png" width="100" height="200"></a>
        </tr>
      </table> -->

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
    this.$store.dispatch("people/getPeople");
  },

  data() {
    return {
      treeImage: [
        {id: 1, name:'http://pngimg.com/uploads/tree/tree_PNG3477.png'},
        {id: 2, name:'http://www.transparentpng.com/thumb/tree/texture-hackberry-tree-png-1.png'}

      ],
      person: {
        treeImage: "",
        firstName: "",
        lastName: "",
      },
      selected: {},
      columns: [
        { field: "treeImage", label: "เวลา" },
        { field: "firstName", label: "ชื่อ" },
        { field: "lastName", label: "นามสกุล" }
      ]
    };
  },
  computed: {
    ...mapState("people", ["people"])
  },

  methods: {
    newPlant() {
      this.$router.push("/ex01");
    },
    deletePerson() {
      this.$store.dispatch("people/deletePerson", this.selected );
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