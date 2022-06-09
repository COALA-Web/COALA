<template>
  <form action="">
    <div class="modal-card" style="width: 700px">
      <header class="modal-card-head">
        <p class="modal-card-title">알고리즘 실력 체크</p>
      </header>
      <section class="modal-card-body">
        <!-- 1. 나의 코딩 실력은?  -->
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
            <!-- TODO: 입력창 받을지 생각 -->
          </div>
        </b-field>

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
            <p>알고있는 알고리즘</p>
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
      </section>
      <footer class="modal-card-foot" style="padding-left: 500px">
        <b-button label="임시저장" @click="$emit('close')" />
        <b-button
          label="작성완료"
          type="is-dark"
          @click="
            $emit('close');
            levelCheck();
          " />
      </footer>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "ModalView",
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
  methods: {
    levelCheck: function () {
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
