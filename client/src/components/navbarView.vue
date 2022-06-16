<template>
  <b-navbar :centered="true" type="is-white" style="padding-bottom: 10px">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/COALA.svg"
          alt="COALA"
          width="200"
          style="max-height: 4rem" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item class="margin-horizontal" href="/main"
        >추천학습</b-navbar-item
      >
      <b-navbar-item class="margin-horizontal" href="/select">
        선택학습
      </b-navbar-item>
      <b-navbar-item class="margin-horizontal" href="/question">
        게시판
      </b-navbar-item>
      <b-navbar-item class="margin-horizontal" href="/contest">
        대회
      </b-navbar-item>
      <b-navbar-item class="margin-horizontal" href="/ranking">
        랭킹
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <!-- 우측 요소와 간격 띄우기 위해 margin-right 추가-->
          <a v-if="isLoginData === 'true'" href="" style="margin-right: 30px">
            <font-awesome-icon icon="fa-bell" size="2x" shake />
          </a>
          <b-dropdown
            v-if="isLoginData === 'true'"
            :triggers="['hover']"
            aria-role="list">
            <template #trigger>
              <font-awesome-icon icon="fa-circle-user" size="2x" />
            </template>

            <b-dropdown-item aria-role="listitem" @click="route('mypage')"
              >마이페이지</b-dropdown-item
            >
            <b-dropdown-item aria-role="listitem" @click="logout()"
              >로그아웃</b-dropdown-item
            >
          </b-dropdown>

          <b-button
            v-if="isLoginData === 'false'"
            label="로그인"
            type="is-dark"
            @click="route('login')" />
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
  <!-- !navbar -->
</template>
<script>
// import store from "../store";
export default {
  name: "navbarView",
  props: {
    msg: String
  },
  data() {
    return {
      // isLoginData: false,
      isLoginData: localStorage.getItem("isLogin")
    };
  },
  mounted() {
    console.log(this.isLoginData);
    // if (store.getters["user/isLogin"]) {
    //   this.isLoginData = true;
    // } else {
    //   this.isLoginData = false;
    // }
  },
  methods: {
    logout: function () {
      localStorage.setItem("isLogin", false);
      // this.isLoginData = false;
      // this.$store.commit("user/logout");
      this.$router.push({ path: "/start" });
      // this.$router.go();
    },
    async route(param) {
      if (param) {
        if (param === "login") {
          this.$router.push({ path: "/login" });
        } else if (param === "mypage") {
          this.$router.push({ path: "/mypage" });
        }
        // this.$router.go();
      }
    }
  }
};
</script>
<style scoped>
.margin-horizontal {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
