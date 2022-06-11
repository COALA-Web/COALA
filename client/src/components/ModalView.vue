<template>
  <form action="">
    <div class="modal-card" style="width: 700px">
      <header class="modal-card-head">
        <p class="modal-card-title">알고리즘 실력 체크</p>
      </header>
      <section class="modal-card-body">
        <b-steps type="is-black" :has-navigation="false">
          <b-step-item step="1" label="학습 패턴 & 선호도"></b-step-item>
          <b-step-item step="2" label="실력 체크"></b-step-item>
          <b-step-item step="3" label="측정 완료"></b-step-item>
        </b-steps>
        <!-- 1: 학습 패턴 설정 -->
        <div v-if="nextCnt == 0">
          <b-field class="q-field">
            <div class="q-question">
              <p>학습 가능 요일</p>
            </div>

            <b-field class="q-answer">
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
          </b-field>
          <b-field class="q-field">
            <div class="q-question">
              <p>학습 컨텐츠 갱신 시간</p>
            </div>

            <section class="q-answer">
              <b-field>
                <b-clockpicker
                  size="is-small"
                  rounded
                  placeholder="     Click to select..."
                  :hour-format="format">
                </b-clockpicker>
              </b-field>
            </section>
          </b-field>
          <b-field class="q-field">
            <div class="q-question">
              <p>추천받고 싶은 컨텐츠</p>
            </div>
            <div class="block q-answer">
              <b-radio
                size="is-small"
                v-model="radio"
                name="name"
                native-value="practice">
                연습문제
              </b-radio>
              <b-radio
                size="is-small"
                v-model="radio"
                name="name"
                native-value="competition">
                대회 기출
              </b-radio>
              <b-radio
                size="is-small"
                v-model="radio"
                name="name"
                native-value="coding_test">
                코딩테스트 기출
              </b-radio>

              <!-- TODO: 입력창 받을지 생각 -->
            </div>
          </b-field>
        </div>
        <!-- 2. 실력 체크 -->
        <div v-if="nextCnt == 1">
          <b-field class="q-field">
            <div class="q-question">
              <p>나의 코딩 실력은?</p>
            </div>
            <div class="q-answer" style="width: 400px">
              <b-field label="">
                <b-slider size="is-medium" :min="0" :max="5">
                  <template v-for="val in [0, 1, 2, 3, 4, 5]">
                    <b-slider-tick :value="val" :key="val">{{
                      val
                    }}</b-slider-tick>
                  </template>
                </b-slider>
              </b-field>
            </div>
          </b-field>

          <b-field class="q-field">
            <div class="q-question">
              <p>문제 풀이시 선호하는 언어는?</p>
            </div>

            <div class="block q-answer">
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
              언어 추가하기.
              <!-- TODO: 입력창 받을지 생각 -->
            </div>
          </b-field>

          <b-field class="q-field">
            <div class="q-question">
              <p>알고리즘 학습 수준</p>
            </div>
            <div>
              <p>0: 아예 모른다/들어본 적은 있다.</p>
              <p>1: 개념만 알고있다.</p>
              <p>2: 구현할 수 있다.</p>
              <p>3: 자유자재로 다룰 수 있다.</p>
            </div>

            <div class="block q-answer">
              <b-checkbox
                size="is-small"
                v-model="checkboxGroup"
                native-value="greedy">
                그리디
              </b-checkbox>
              <b-checkbox
                size="is-small"
                v-model="checkboxGroup"
                native-value="dp">
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
          </b-field>

          <b-field class="q-field">
            <div class="q-question">
              <p>구현 가능한 알고리즘</p>
            </div>

            <div class="block q-answer">
              <b-checkbox
                size="is-small"
                v-model="level.greedy"
                native-value="greedy">
                그리디
              </b-checkbox>
              <b-checkbox size="is-small" v-model="level.dp" native-value="dp">
                DP
              </b-checkbox>
              <b-checkbox
                size="is-small"
                v-model="level.sort"
                native-value="sort">
                정렬
              </b-checkbox>
              <b-checkbox
                size="is-small"
                v-model="level.tree"
                native-value="tree">
                트리
              </b-checkbox>
              <b-checkbox
                size="is-small"
                v-model="level.graph"
                native-value="graph">
                그래프
              </b-checkbox>
            </div>
          </b-field>
        </div>
        <div v-if="nextCnt == 2">
          <radar-chart />
          <p style="margin-top: 40px">
            설문조사 결과를 바탕으로 측정한 코알라님의 실력입니다.
          </p>
          <p style="margin-top: 5px">
            측정된 레벨은 문제 풀이시마다 업데이트됩니다.
          </p>

          <b-button
            style="margin-top: 20px"
            label="학습 시작하러 가기"
            @click="$emit('close')" />
        </div>
      </section>
      <footer
        v-if="nextCnt != 2"
        class="modal-card-foot"
        style="padding-left: 500px">
        <b-button label="임시저장" @click="$emit('close')" />
        <b-button :label="btnText" type="is-dark" @click="levelCheck()" />
      </footer>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import RadarChart from "../components/RadarChartView.vue";

export default {
  components: { RadarChart },
  name: "ModalView",
  component: [RadarChart],
  props: ["email", "password", "canCancel"],
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        email: "evan@you.com",
        password: "testing"
      },
      level: {
        greedy: "",
        dp: "",
        sort: "",
        tree: "",
        graph: ""
      },
      btnText: "다음",
      sampleData: "",
      checkboxGroup: [],
      isImplement: [],
      radio: "Java",
      isAmPm: true,
      nextCnt: 0
    };
  },
  computed: {
    format() {
      return this.isAmPm ? "12" : "24";
    }
  },
  methods: {
    findClassIndex(list, val) {
      // list = list.filter(function (item) {
      //   return item !== val;
      // });
      const len = list.length;
      for (var i = 0; i < len; i++) {
        console.log(list[i]);

        console.log(val);
        if (list[i] === val) {
          // list.splice(i);
          // const { rabbit, ...otherAnimal } = animal;
          // delete list.${i};
          console.log(list[i]);
          list[i] = null; // 삭제. 키값으로 직접 삭제가 안돼서 이렇게 함..
        }
      }
      console.log(list);
      return list;
    },
    levelCheck: function () {
      let items = document.querySelector(".step-items");
      let step1 = items.childNodes[0];
      let step2 = items.childNodes[1];
      let step3 = items.childNodes[2];

      if (this.nextCnt === 0) {
        step1.classList.replace("is-active", "is-previous");
        step2.classList.add("is-active");

        this.nextCnt++;
        this.btnText = "작성완료";
        return;
      } else if (this.nextCnt === 1) {
        step2.classList.replace("is-active", "is-previous");
        step3.classList.add("is-active");
        this.nextCnt++;
        this.btnText = "완료";
        return;
      }
      this.$emit("close");
      const args = {
        greedy: 1,
        dp: 2,
        sort: 3,
        tree: 4,
        graph: 5
      };

      axios
        .post("/api/levelCheck", args)
        .then((res) => {
          if (res.data.success == true) {
            alert(res.data.message);
            this.$router.push("/main");
          }
          if (res.data.success == false) {
            alert(res.data.message);
          }
        })

        .catch((err) => {
          alert(err);
        });
    }
  }
};
</script>

<style scoped>
.q-field {
  margin-top: 35px;
  margin-bottom: 95px;
  position: relative;
  margin-left: 50px;
}

.q-question {
  float: left;
  font-size: 1.35rem;
  font-weight: bold;
}

.q-answer {
  position: absolute;
  left: 0;
  margin-top: 40px;
}
</style>
