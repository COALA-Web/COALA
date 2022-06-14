<template>
  <div>
    <div
      class="container"
      style="padding-left: 100px; padding-right: 100px; padding-bottom: -40px">
      <navbar-view />
    </div>
    <div>
      <div class="example-component">
        <b-field grouped group-multiline> </b-field>
      </div>

      <div>
        <b-carousel :interval="2000" :pause-hover="false" :arrow="false">
          <b-carousel-item v-for="(item, i) in 3" :key="i">
            <b-image
              style="height: 550px"
              class="image"
              :src="getImgUrl(i)"></b-image>
          </b-carousel-item>
        </b-carousel>
      </div>

      <hr class="horizon-line" />
    </div>
    <div class="container" style="padding-left: 100px; padding-right: 100px">
      <div style="font-size: 3rem; font-weight: bold">
        <p>AI 추천학습</p>
        <p>선택학습</p>
        <p>졸업생들의 성공 후기</p>
        <!-- <p>가입을 환영합니다.</p> -->
        <!-- <hr align="center" style="width: 50%" /> -->
        <!-- <hr style="width: 50%; margin: auto" /> -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import NavbarView from "../components/navbarView.vue";

export default {
  components: { NavbarView },
  data() {
    return {
      carousel: 0,
      animated: "fade",
      drag: false,
      autoPlay: false,
      pauseHover: false,
      pauseInfo: false,
      repeat: false,
      pauseType: "is-primary",
      interval: 3000,
      carousels: [
        { title: "Slide 1", color: "dark" },
        { title: "Slide 2", color: "primary" },
        { title: "Slide 3", color: "info" },
        { title: "Slide 4", color: "success" },
        { title: "Slide 5", color: "warning" },
        { title: "Slide 6", color: "danger" }
      ],
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
    getImgUrl(value) {
      return `../assets/coala_intro_${value}.png`;
    },
    info(value) {
      this.carousel = value;
      this.$buefy.toast.open({
        message: `This Slide ${value} !`,
        type: "is-info"
      });
    },
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
.is-active .al img {
  filter: grayscale(0%);
}
.al img {
  filter: grayscale(100%);
}
</style>
