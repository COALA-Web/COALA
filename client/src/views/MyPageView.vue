<template>
  <div>
    <div style="padding-left: 200px; padding-right: 200px">
      <navbar-view />
    </div>
    <div
      class="container"
      style="padding-left: 200px; padding-right: 200px; padding-top: 40px">
      <!-- 프로필 상단 -->
      <!-- 프로필 상단 왼쪽 텍스트 영역 -->
      <div style="margin-left: 100px; float: left">
        <p style="height: 70px">
          <span class="profile-name" style="font-weight: bold"> 코알라 </span>
        </p>
        <p style="height: 70px">
          <span class="profile-major">소프트웨어학부 | 4학년 | 재학생</span>
        </p>
        <p style="height: 40px">
          <span class="profile-rank"
            >랭크
            <font-awesome-icon icon="fa-medal" size="1x" />
          </span>
          <span style="margin-left: 80px" class="profile-rank"
            >획득 배지 (추가예정)</span
          >
        </p>
        <p style="height: 40px">
          <span class="profile-rank">123 문제 해결</span>
        </p>
        <p style="height: 40px">
          <span class="profile-rank"
            >학습 요일 &nbsp;&nbsp;&nbsp;&nbsp;
            <b-tag type="is-info is-light" rounded style="margin-right: 10px"
              >월</b-tag
            >
            <b-tag type="is-info is-light" style="margin-right: 10px" rounded
              >수</b-tag
            >
            <b-tag type="is-info is-light" style="margin-right: 10px" rounded
              >금</b-tag
            >
          </span>
        </p>
      </div>
      <!-- 프로필 사진 박스 -->
      <div class="top-right">
        <div class="profile-box">
          <img
            src="@/assets/profile.png"
            alt="마이페이지 사진"
            class="profile-img" />
        </div>
        <div class="buttons" style="padding-top: 40px; padding-left: 35px">
          <b-button>프로필 수정</b-button>
        </div>
      </div>
      <!-- <hr /> -->
    </div>
    <!-- <hr style="margin-bottom: 0" /> -->

    <!--  -->

    <div style="background-color: #f9f9f9">
      <!-- <hr style="margin-bottom: 0" /> -->
      <hr />

      <!-- 이번 달학습 현환 -->
      <div
        class="container"
        style="padding-left: 300px; padding-right: 300px; padding-top: 40px">
        <h1 class="bold align-left">이번 달 학습 현황</h1>
        <div class="div-border">
          <p style="margin-top: 20px; padding-bottom: 15px">
            <span style="padding-right: 350px">
              출석률 &nbsp; {{ attendance_rate1 }} %</span
            >
            <span style="padding-left: 10px"> 목표일 14일 중 5일 출석</span>
          </p>
          <!-- <p>xx일 출석</p> -->
          <b-progress
            :rounded="false"
            :value="35"
            type="is-info"
            show-value
            format="percent"></b-progress>
        </div>
      </div>

      <!-- 총 학습 현환 -->
      <div
        class="container"
        style="padding-left: 300px; padding-right: 300px; padding-top: 40px">
        <h1 class="bold align-left">총 학습 현황</h1>
        <div class="div-border">
          <p style="margin-top: 20px; padding-bottom: 15px">
            <span style="padding-right: 350px">
              출석률 &nbsp; {{ attendance_rate2 }} %</span
            >
            <span style="padding-left: 10px"> 목표일 148일 중 102일 출석</span>
          </p>
          <!-- <p>xx일 출석</p> -->
          <b-progress
            :rounded="false"
            :value="89"
            type="is-info"
            show-value
            format="percent"></b-progress>
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

      <!-- 유형별 학습현황 -->
      <div
        class="container"
        style="padding-left: 300px; padding-right: 300px; padding-top: 40px">
        <h1 class="bold align-left">유형별 학습 현황</h1>
        <div class="div-border">
          <rank-table />
        </div>
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
      sampleData: "",
      attendance_rate1: 35,
      attendance_rate2: 89,
      isOpen: false
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
  /* box-shadow: px 5px 5px rgba(0, 0, 0, 0.55);
   */
  border: 2px solid rgba(0, 0, 0, 0.55);
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
  /* padding-left: 100px; */
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
