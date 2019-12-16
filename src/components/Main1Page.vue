<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <div class="card">
      <img :src="this.treeImage[0]" width="150" height="300">
    </div>

    <div class="card">
    <b-field grouped>
    <b-field label="Say something to your new plant!" expanded>
      <b-input v-model="tree.note" maxlength="50" type="textarea" placeholder="Say something ..." rounded></b-input>
    </b-field>
    </b-field>
    
    <timer class="card-content" type="is-dark" @time-expire="handleTimeExpire" :seconds="5" :start="start"></timer>
      <b-field class="buttons card-content" grouped>
        <b-button type="is-dark" @click="backToHome">Back</b-button>
        <b-button type="is-dark" @click="startTimer">Start Planting</b-button>
        

      </b-field>
    </div>
  </div>


</template>
<script>

import NavBar from "./NavBar.vue";
import Timer from "./Timer.vue";

export default {
  components: {
    NavBar,
    Timer
  },
  data() {
    return {
      start: false,
      treeImage: [
      'https://f-scope.net/images/cartoon-palm-tree-png-14.png'
    ],
      tree: {
        note: ""
      }

    };
  },
  methods: {
    handleTimeExpire() {
      alert("Congrats! You've got a new plant ");
      
      this.$store.dispatch("forest/addTree", {
        note: this.tree.note,
        treeImage: this.treeImage,
      }
      );
      this.$router.push("/ex02");

    },
    startTimer() {
      this.start = true;
    },
    backToHome() {
      this.$router.push("/")
    }
  }
}
</script>

<style >
body {
  background-color: rgb(214, 226, 188);
}
</style>
