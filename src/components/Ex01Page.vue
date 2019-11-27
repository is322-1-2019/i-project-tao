<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <div class="card">
      <img :src="this.treeImage[0]" width="150" height="300">
      <img :src="this.treeImage[1]" width="150" height="300">
      <img :src="this.treeImage[2]" width="150" height="300">
      <img :src="this.treeImage[3]" width="150" height="300">
      <img :src="this.treeImage[4]" width="150" height="300">
      <img :src="this.treeImage[5]" width="150" height="300">
      <img :src="this.treeImage[6]" width="150" height="300">
      <!-- <div v-for="city1 in treeImage "
            v-bind:key="city1.id"
            v-bind:value="city1.name"
          >{{ city1.name }}>
      </div> -->
    </div>

    <div class="card">
    <b-field grouped>
    <b-field label="เวลา">
      <b-select v-model="treeImage" placeholder="เวลา" rounded>
        <option>10mins</option>
        <option>20mins</option>
        <option>30mins</option>
        <!-- <option 
            v-for="city1 in treeImage "
            v-bind:key="city1.id"
            v-bind:value="city1.name"
          >{{ city1.name }}</option> -->
      </b-select>
    </b-field>
    <b-field label="Note" expanded>
      <b-input v-model="person.note" placeholder="Note" rounded></b-input>
    </b-field>
    <!-- <b-field label="นามสกุล" expanded>
      <b-input v-model="person.lastName" placeholder="นามสกุล" rounded></b-input>
    </b-field> -->
    </b-field>

    
    <b-field label="Start planting today!">
      <b-numberinput v-model="this.duration" type="is-dark" step=10 max=60 min=10 @input="changeTree">
      </b-numberinput>
    </b-field>
    
    <b-progress :value="80" show-value format="percent"></b-progress>
    
    <b-field class="buttons" grouped>
      <b-button type="is-dark" @click="back">Back</b-button>
      <b-button type="is-dark" @click="plant">Start Planting</b-button>
      <b-button type="is-dark" @click="finished">Finished</b-button>
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
  data() {
    return {
      duration: 10, 
      treeImage: [
      'http://pngimg.com/uploads/tree/tree_PNG3477.png',
      'http://www.transparentpng.com/thumb/tree/texture-hackberry-tree-png-1.png ',
      'https://cdn.pixabay.com/photo/2017/05/05/12/37/nature-2286961_960_720.png',
      'https://www.freepnglogos.com/uploads/tree-png/image-result-trees-follage-pinterest-6.png',
      'https://i.pinimg.com/originals/56/92/a5/5692a5b2dd8155f5f901a067cc43c07b.png',
      'https://www.trzcacak.rs/myfile/full/366-3668437_trees-texture-png-big-tree-photoshop.png',
    ],
      person: {
        treeImage: "",
        note: "",
        // lastName: "",
      }

    };
  },
  computed: {
    ...mapState("people", ["people"])
  },

  methods: {
    back() {
      this.$router.push("/")
    },
    plant() {
    },
    changeTree() {
      if (this.duration>20){
        this.treeImage= "http://www.transparentpng.com/thumb/tree/texture-hackberry-tree-png-1.png"
      }
    },

    finished() {
      this.$router.push("/ex02"),
      this.$store.dispatch("people/addPerson", {
        title: this.person.title,
        note: this.person.note,
        // lastName: this.person.lastName,
        // isActive: this.person.isActive, 
      }
      );
    },
    
    getPeople() {
      this.$store.dispatch("people/getPeople");
    } 
  }
}
</script>

<style >
body {
  background-color: rgb(214, 226, 188);
}
</style>
