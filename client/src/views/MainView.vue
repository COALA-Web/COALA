<template>
  <div class="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <navbar-view />
    <section style="padding: 200px">
      <!-- <b-button @click="clickMe">Click Me</b-button> -->
      <b-notification type="is-warning" aria-close-label="Close notification">
        알림 / 전체 공지사항
      </b-notification>
      <div class="notification is-warning">
        <button class="delete"></button>
        알림 ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
        이에요 fringilla. Nullam gravida purus diam, et dictum
        <a>felis venenatis</a> efficitur.
      </div>
      <div class="columns">
        <div class="column">First column</div>
        <div class="column">Second column</div>
      </div>
      <div class="columns">
        <div class="column">First column</div>
        <div class="column">Second column</div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import NavbarView from "../components/navbarView.vue";

export default {
  name: "MainView",
  components: {
    NavbarView
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open("Clicked!!");
    }
  }
};
</script>
