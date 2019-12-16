<template>
<div class="card-content">
    <nav-bar></nav-bar>
<b-field class="buttons" grouped>
      <b-button type="is-dark" @click="reset">Logout</b-button>
</b-field>
</div>
</template>
<script>
import NavBar from "./NavBar.vue";

import { required, minLength , email} from "vuelidate/lib/validators";
import firebase from "firebase/app";
import "firebase/auth";
import { mapGetters } from "vuex";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      loginResult: {}
    };
  },
  validations: {
    form: {
      username: {
        required,
        minLength: email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  methods: {
    reset() {
      this.$v.form.$reset();

      firebase.auth().signOut()
        .then(data => {
          this.loginResult = data;

          this.$router.push("/");
          this.$buefy.dialog.alert({
            type: "is-primary",
            title: "Logout",
            message: "คุณได้ทำการ Log out เรียบร้อยแล้ว",
            confirmText: "ปิดหน้าต่างนี้!",
            onConfirm: this.goToBottom,

          });

          this.$store.dispatch("messages/addMessage", "Log out successful.");

        })

        .catch(error => {
          this.loginResult = error;
        }

      );

      
    }
  },

  computed:{
    ...mapGetters("messages", ["lastestMessage"])

  }
};
</script>

