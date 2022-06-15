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
        <b-carousel :interval="2500" :pause-hover="false" :arrow="false">
          <b-carousel-item v-for="(item, i) in 3" :key="i">
            <!-- style="height: 650px" ?? -->
            <b-image
              class="image"
              :src="require(`@/assets/coala_intro_${i}.png`)"></b-image>
          </b-carousel-item>
        </b-carousel>
      </div>

      <hr class="horizon-line" />
    </div>
    <div class="container" style="padding-left: 100px; padding-right: 100px">
      <!-- 코알라만의 AI 추천 시스템 -->
      <div style="margin-top: 80px; margin-bottom: 80px">
        <div style="float: left; width: 700px">
          <h2 class="h2">코알라만의 AI 추천 시스템</h2>
          <p class="p">
            코알라 AI 추천 시스템은 실력 진단 테스트 결과를 바탕으로 사용자의
            초기 수준을 진단합니다. 이후 문제 풀이가 진행될수록, AI가 끊임없이
            사용자의 수준을 분석해 최적의 콘텐츠를 추천합니다. 정확한 진단과
            개인 맞춤형 콘텐츠를 통한 알고리즘 실력을 경험해보세요.
          </p>
        </div>
        <div style="float: right; width: 300px">
          <b-image
            :src="require('@/assets/ai1.png')"
            alt="AI image"
            s></b-image>
        </div>

        <!-- <h1 class="h1">5000건 이상의 풀이 데이터 기반의 AI 추천 시스템</h1>
        <h2 class="h1">데이터 기반의 AI 추천 시스템</h2>
        <h1 class="h1">원하는 알고리즘 선택 학습</h1>
        <h1 class="h1">ERICA 졸업생들의 성공 후기</h1> -->
        <!-- <p>가입을 환영합니다.</p> -->
        <!-- <hr align="center" style="width: 50%" /> -->
        <!-- <hr style="width: 50%; margin: auto" /> -->
      </div>

      <!-- 코알라는,, 추가 예정 -->
      <div style="margin-top: 100px">
        <div style="float: left; width: 700px">
          <!-- <h2 class="h2">코알라는</h2> -->
        </div>
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

.h1 {
  /* float: left;
   */
  text-align: left;
  margin-top: 120px;
  margin-bottom: 20px;
  font-size: 1.6rem;
}
.h2 {
  /* float: left;
   */
  text-align: left;
  /* margin-top: 120px; */
  /* margin-bottom: 20px; */
  font-size: 3rem;
  font-weight: bold;
}

.p {
  /* padding-left: 40px; */
  font-size: 1.5rem;
  text-align: left;
}
</style>
