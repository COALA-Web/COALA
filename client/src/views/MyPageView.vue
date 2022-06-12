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
      </div>

      <!-- 실력 지표 한눈에 보기 -->
      <div
        class="container"
        style="padding-left: 300px; padding-right: 300px; padding-top: 40px">
        <h1 class="bold align-left">실력 지표 한눈에 보기</h1>
        <div class="div-border">
          <radar-chart />
          <br />
          <br />
          <b-collapse
            aria-id="contentIdForA11y2"
            class="panel"
            animation="slide"
            v-model="isOpen">
            <template #trigger>
              <div
                style="height: 40px; padding-top: 7px"
                class="panel-heading"
                role="button"
                aria-controls="contentIdForA11y2"
                :aria-expanded="isOpen">
                <p>더보기</p>
              </div>
            </template>
            <p
              class="panel-tabs"
              style="padding-top: 10px; padding-bottom: 10px">
              <strong>그 외의 알고리즘 지표(백분위)</strong>
              <!-- <a class="is-active">All</a>
              <a>Public</a>
              <a>Private</a> -->
            </p>
            <div class="panel-block">
              <div
                style="
                  padding-left: 60px;
                  height: 400px;
                  width: 550px;
                  position: relative;
                ">
                <bar-chart />
              </div>
            </div>
          </b-collapse>
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
import BarChart from "../components/BarChartView.vue";
import RankTable from "../components/RankTableView.vue";

export default {
  components: { NavbarView, RadarChart, BarChart, RankTable },
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

.profile-rank {
  text-align: left;
  float: left;
  font-size: 1rem;
  /* padding-top: 10px; */
  /* margin-top: 40px; */
  /* padding-right: 200px; */
  /* padding-bottom: 40px; */
}

.bold {
  font-weight: bold;
}

.align-left {
  text-align: left;
}

.div-border {
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: white;
}
</style>
