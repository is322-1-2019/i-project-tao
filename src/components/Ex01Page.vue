<template>
  <div class="card-content">
    <nav-bar></nav-bar>
    <name-section
      class="card"
      v-model="fullName">
    </name-section>
    <p> {{ fullName }} </p>
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
body {
  background-color: rgb(12, 122, 12);
}
</style>
