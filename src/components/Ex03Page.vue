<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <div class="card">
      <timer class="card-content" @time-expire="handleTimeExpire" :seconds="600" :start="start"></timer>
      <b-field class="buttons card-content">
        <b-button type="is-primary" @click="startTimer">Start timer</b-button>
      </b-field>
    </div>
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
import Timer from "./Timer.vue";

export default {
  data() {
    return {
      start: false
    };
  },
  components: {
    NavBar,
    Timer
  },
  methods: {
    handleTimeExpire() {
      alert("Time is up!");
    },
    startTimer() {
      this.start = true;
    }
  }
};
</script>