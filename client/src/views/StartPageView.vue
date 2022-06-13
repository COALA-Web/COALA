<template>
  <div>
    <div class="container" style="padding-left: 100px; padding-right: 100px">
      <navbar-view />
      <div style="font-size: 3rem; font-weight: bold">
        <p>COALA</p>
        <p>COding ALgorithm - AI</p>
        <!-- <p>가입을 환영합니다.</p> -->
        <!-- <hr align="center" style="width: 50%" /> -->
        <!-- <hr style="width: 50%; margin: auto" /> -->
      </div>
      <hr class="horizon-line" />

      <!-- 레벨 체크 안내 -->
      <!-- 서비스 소개 -->
      <div>
        <p>코알라 서비스는..</p>
        <p>캐러샐? 코알라 서비스 소개,,</p>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from "../components/navbarView.vue";

export default {
  components: { NavbarView },
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        email: "evan@you.com",
        password: "testing"
      }
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    levelCheck: function () {
      this.$router.push("/levelcheck");
    }
  }
};
</script>
<style scoped>
.horizon-line {
  width: 40%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
