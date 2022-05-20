<template>
  <div class="main" style="background-color: #f0f0f0; padding-bottom: 100px">
    <level-check-navbar-view />
    <!-- test -->
    <div
      style="
        background-color: #dbdbdb;
        text-align: left;
        padding-left: 80px;
        height: 40px;
      ">
      <span style="vertical-align: -10px"> 초기 수준 분석</span>
    </div>

    <div class="container" style="margin-top: 100px">
      <div
        class="notification is-white text-left"
        style="margin-left: 200px; margin-right: 400px">
        <h1 class="bottom-line"><strong>알고리즘 실력 분석</strong></h1>
        <h2 class="question">나의 코딩 실력은?</h2>
        <div style="padding-left: 100px; padding-right: 300px">
          <b-field label="">
            <b-slider size="is-medium" :min="0" :max="5">
              <template v-for="val in [0, 1, 2, 3, 4, 5]">
                <b-slider-tick :value="val" :key="val">{{ val }}</b-slider-tick>
              </template>
            </b-slider>
          </b-field>
        </div>
        <h2 class="question">문제 풀이 시 선호하는 언어</h2>
        <!-- TODO: DB 연결 필요한 부분 -->
        <div class="block">
          <b-radio
            size="is-small"
            v-model="radio"
            name="name"
            native-value="C++">
            C++
          </b-radio>
          <b-radio
            size="is-small"
            v-model="radio"
            name="name"
            native-value="Java">
            Java
          </b-radio>
          <b-radio
            size="is-small"
            v-model="radio"
            name="name"
            native-value="Python">
            Python
          </b-radio>
          <b-radio
            size="is-small"
            v-model="radio"
            name="name"
            native-value="etc">
            기타
          </b-radio>
          <!-- TODO: 입력창 받을지 생각 -->
        </div>
        <h2 class="question">학습 가능 요일</h2>
        <b-field>
          <b-checkbox-button
            size="is-small"
            v-model="checkboxGroup"
            native-value="mon">
            월
          </b-checkbox-button>
          <b-checkbox-button
            size="is-small"
            v-model="checkboxGroup"
            native-value="tue">
            화
          </b-checkbox-button>
          <b-checkbox-button
            size="is-small"
            v-model="checkboxGroup"
            native-value="wed">
            수
          </b-checkbox-button>
          <b-checkbox-button
            size="is-small"
            v-model="checkboxGroup"
            native-value="thu">
            목
          </b-checkbox-button>
          <b-checkbox-button
            size="is-small"
            v-model="checkboxGroup"
            native-value="fri">
            금
          </b-checkbox-button>
          <b-checkbox-button
            size="is-small"
            v-model="checkboxGroup"
            native-value="sat">
            토
          </b-checkbox-button>
          <b-checkbox-button
            size="is-small"
            v-model="checkboxGroup"
            native-value="sun">
            일
          </b-checkbox-button>
        </b-field>
        <h2 class="question">학습 콘텐츠 갱신 시간</h2>
        <section>
          <b-field style="padding-right: 540px">
            <b-clockpicker
              size="is-small"
              rounded
              placeholder="     Click to select..."
              :hour-format="format">
            </b-clockpicker>
          </b-field>
        </section>
        <h2 class="question">알고있는 알고리즘</h2>
        <div class="block">
          <b-checkbox
            size="is-small"
            v-model="checkboxGroup"
            native-value="greedy">
            그리디
          </b-checkbox>
          <b-checkbox size="is-small" v-model="checkboxGroup" native-value="dp">
            DP
          </b-checkbox>
          <b-checkbox
            size="is-small"
            v-model="checkboxGroup"
            native-value="sort">
            정렬
          </b-checkbox>
          <b-checkbox
            size="is-small"
            v-model="checkboxGroup"
            native-value="tree">
            트리
          </b-checkbox>
          <b-checkbox
            size="is-small"
            v-model="checkboxGroup"
            native-value="graph">
            그래프
          </b-checkbox>
        </div>
        <h2 class="question">구현 가능한 알고리즘</h2>
        <div class="block">
          <b-checkbox
            size="is-small"
            v-model="isImplement"
            native-value="greedy">
            그리디
          </b-checkbox>
          <b-checkbox size="is-small" v-model="isImplement" native-value="dp">
            DP
          </b-checkbox>
          <b-checkbox size="is-small" v-model="isImplement" native-value="sort">
            정렬
          </b-checkbox>
          <b-checkbox size="is-small" v-model="isImplement" native-value="tree">
            트리
          </b-checkbox>
          <b-checkbox
            size="is-small"
            v-model="isImplement"
            native-value="graph">
            그래프
          </b-checkbox>
        </div>
        <div style="padding-left: 630px">
          <b-button type="is-dark" @click="successFn">완료</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import levelCheckNavbarView from "../components/levelCheckNavbarView.vue";

export default {
  components: { levelCheckNavbarView },
  data() {
    return {
      sampleData: "",
      checkboxGroup: [],
      isImplement: [],
      radio: "Java",
      isAmPm: true
    };
  },
  computed: {
    format() {
      return this.isAmPm ? "12" : "24";
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    successFn() {
      this.$router.push({ path: "/main" });
    }
  }
};
</script>
<style scoped>
.text-left {
  text-align: left;
}

.bottom-line {
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 5px;
  border-bottom: 1px solid black;
}

.question {
  color: "3c3c3c";
  padding-top: 50px;
  padding-bottom: 13px;
}
</style>
