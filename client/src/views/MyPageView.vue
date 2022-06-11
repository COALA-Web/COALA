<template>
  <div>
    <navbar-view />
    <div class="container" style="padding-left: 100px; padding-right: 100px">
      <div class="notification" style="height: 260px; padding-top: 40px">
        <div style="float: left" class="profile-box">
          <img
            src="@/assets/profile.png"
            alt="마이페이지 사진"
            class="profile-img" />
        </div>
        <div style="margin-left: 100px">
          <!-- <div class="profile-name">코알라</div>
          <div class="profile-major">소프트웨어학부</div> -->
          <p style="height: 70px">
            <span class="profile-name">코알라 님</span>
            <span class="profile-major">소프트웨어학부</span>
          </p>
          <p>
            <span class="profile-name"
              >랭크
              <font-awesome-icon icon="fa-medal" size="1x" />
            </span>
            <span class="profile-major">123 문제 해결</span>
          </p>
          <!-- <span class="profile-name">코알라 님</span>
          <span class="profile-major">소프트웨어학부</span> -->
        </div>
        <div style="float: right; margin-top: -100px">
          <a href="/">
            <font-awesome-icon icon="fa-gear" size="2x" />
          </a>
        </div>
      </div>
    </div>
    <hr />
    <div
      class="container"
      style="padding-left: 100px; padding-right: 100px; margin-top: 50px">
      <div class="notification" style="height: 400px; padding-top: 40px">
        <h2>내 실력 보기?</h2>
        <radar-chart />
      </div>
    </div>
    <div
      class="container"
      style="padding-left: 100px; padding-right: 100px; margin-top: 50px">
      <div class="notification" style="height: 400px; padding-top: 40px">
        <h2>유형별 랭크</h2>
        <rank-table />
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from "../components/navbarView.vue";
import RadarChart from "../components/RadarChartView.vue";
import RankTable from "../components/RankTableView.vue";

export default {
  components: { NavbarView, RadarChart, RankTable },
  data() {
    return {
      sampleData: ""
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
};
</script>
<style scoped>
.profile-box {
  width: 180px;
  height: 180px;
  border-radius: 70%;
  overflow: hidden;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  float: left;
  text-align: left;
  font-size: 1.8rem;
  padding-left: 100px;
  /* margin-top: 40px; */
  /* padding-bottom: 40px; */
}

.profile-major {
  /* text-align: left; */
  font-size: 1rem;
  padding-top: 10px;
  /* margin-top: 40px; */
  padding-right: 200px;
  /* padding-bottom: 40px; */
}
</style>
