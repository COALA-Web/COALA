<template>
  <div class="main">
    <!-- <b-message> </b-message> -->
    <div style="padding-left: 200px; padding-right: 200px">
      <navbar-view />
    </div>
    <div class="container" style="padding-left: 100px; padding-right: 100px">
      <div>
        <b-notification type="is-warning" aria-close-label="Close notification">
          <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
          전체 공지 사항
        </b-notification>

        <p
          style="
            text-align: left;
            font-size: 1.8rem;
            padding-left: 10px;
            padding-bottom: 40px;
          ">
          코알라 님
          <font-awesome-icon
            icon="fa-solid fa-medal"
            :style="{ color: 'gold' }" />
        </p>
        <div style="padding-left: 100px; padding-right: 100px">
          <p
            style="
              text-align: left;
              font-size: 1rem;
              padding-left: 10px;
              padding-bottom: 10px;
            ">
            오늘 학습 진행률
          </p>
          <b-progress :value="50" show-value format="percent"></b-progress>
        </div>
      </div>

      <h1
        style="
          text-align: left;
          margin-top: 120px;
          margin-bottom: 20px;
          font-size: 1.6rem;
        ">
        오늘의 컨텐츠

        <b-tooltip
          label="하루에 한번 컨텐츠를 새로고침할 수 있습니다."
          type="is-light">
          <a @click="todayNew()">
            <!-- TODO: 아이콘 클릭 시 fa-spin 클래스 넣어주기. -->
            <font-awesome-icon icon="fa-solid fa-rotate" size="1.2x" />
          </a>
        </b-tooltip>
      </h1>
      <div class="tile is-ancestor">
        <!-- 오늘의 문제 -->
        <div class="tile is-parent is-6">
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">
              <!-- 오늘의 문제 -->
              <span>오늘의 문제</span>
              <span
                ><font-awesome-icon
                  icon="fa-solid fa-circle-check"
                  size="1.2x"
                  style="color: #4bdb4b; padding-left: 295px" />&nbsp;&nbsp;학습
                완료</span
              >
            </p>

            <!-- 오늘의 문제 컨텐츠 -->
            <div class="content" style="float: left">
              <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
              <div v-if="userid == 2019000000" class="p-title">
                <a href="/ps" style="font-size: 1.5em">
                  [{{ problem.number }}]
                  {{ problem.title }}
                  <!-- {{ todayProblems[2].title }} -->
                </a>
              </div>
              <div v-else class="p-title">
                <a href="/ps2" style="font-size: 1.5em">
                  {{ problem.number }}
                  {{ problem.title }}
                  <!-- {{ todayProblems[2].title }} -->
                </a>
              </div>
              <!-- <a href="/ps" style="font-size: 1.5em">
                {{problem.number}}
                {{problem.title}}
                 {{ todayProblems[2].title }}
              </a> -->
              <p
                style="
                  text-align: left;
                  padding-left: 10px;
                  padding-bottom: 5px;
                ">
                문제 유형:
                <b-tag type="is-primary" rounded>{{ problem.tag }}</b-tag>
              </p>
              <p style="text-align: left; padding-left: 10px">
                문제 난이도: {{ problem.difficulty }}
              </p>
              <p style="text-align: left; padding-left: 10px">
                <span> 풀이 소요 예상 시간: {{ problem.expect_time }}분 </span>
                <span style="text-align: right; padding-left: 80px"
                  >유사한 레벨의 사용자 {{ problem.ans_rate }}%가 푼 문제</span
                >
              </p>
            </div>
          </article>
        </div>
        <!-- 오늘의 강의 -->
        <div class="tile is-parent is-6">
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">
              <span>오늘의 강의</span>
              <span
                ><font-awesome-icon
                  icon="fa-solid fa-circle-check"
                  size="1.2x"
                  style="color: #4bdb4b; padding-left: 295px" />&nbsp;&nbsp;학습
                완료</span
              >
            </p>
            <div class="content" style="float: left">
              <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
              <div v-if="userid == 2019000000" class="p-title">
                <a href="/lecture" style="font-size: 1.5em">
                  <p>{{ todayLecture[0].title }}</p>
                  <!-- <p>{{ todayLecture[0].subtitle }}</p> -->
                </a>
              </div>
              <div v-else class="p-title">
                <a href="" style="font-size: 1.5em">
                  <p>{{ todayLecture[1].title }}</p>
                  <p>{{ todayLecture[1].subtitle }}</p>
                </a>
              </div>
              <p
                style="
                  text-align: left;
                  padding-left: 10px;
                  padding-bottom: 5px;
                ">
                관련 개념:
                <b-tag type="is-primary" rounded>{{ problem.tag }}</b-tag>
              </p>
              <p style="text-align: left; padding-left: 10px">
                강의 난이도: {{ problem.difficulty }}
              </p>
              <p style="text-align: left; padding-left: 10px">
                <span> 강의시간: 34분 </span>
                <span style="text-align: right; padding-left: 150px"
                  >유사한 레벨의 사용자 {{ problem.ans_rate }}%가 가 시청</span
                >
              </p>
            </div>
          </article>
        </div>
      </div>
      <h1
        style="
          text-align: left;
          margin-top: 60px;
          margin-bottom: 20px;
          font-size: 1.6rem;
        ">
        복습 컨텐츠
        <b-tooltip
          label="하루에 한번 컨텐츠를 새로고침할 수 있습니다."
          type="is-light">
          <a id="review_refresh_a" href="" @mouseover.once="mouseOver">
            <!-- TODO: 아이콘 클릭 시 fa-spin 클래스 넣어주기. -->
            <font-awesome-icon
              id="review_refresh_icon"
              icon="fa-solid fa-rotate"
              size="1.2x"
          /></a>
        </b-tooltip>
      </h1>
      <div class="tile is-ancestor">
        <!-- 복습 문제 -->
        <div class="tile is-parent is-6">
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">
              <!-- 오늘의 문제 -->
              <span>복습 문제</span>
              <span v-if="false"
                ><font-awesome-icon
                  icon="fa-solid fa-circle-check"
                  size="1.2x"
                  style="color: #4bdb4b; padding-left: 295px" />&nbsp;&nbsp;학습
                완료</span
              >
            </p>

            <!-- 오늘의 문제 컨텐츠 -->
            <div class="content" style="float: left">
              <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
              <div class="p-title">
                <a href="" style="font-size: 1.5em">
                  {{ review.number }}
                  {{ review.title }}
                </a>
              </div>
              <p
                style="
                  text-align: left;
                  padding-left: 10px;
                  padding-bottom: 5px;
                ">
                문제 유형:
                <b-tag type="is-primary" rounded>{{ review.tag }}</b-tag>
              </p>
              <p style="text-align: left; padding-left: 10px">
                문제 난이도: {{ review.difficulty }}
              </p>
              <p style="text-align: left; padding-left: 10px">
                <span> 풀이 소요 예상 시간: {{ review.expect_time }}분 </span>
                <span style="text-align: right; padding-left: 80px"
                  >유사한 레벨의 사용자 {{ review.ans_rate }}%가 푼 문제</span
                >
              </p>
            </div>
          </article>
        </div>

        <!-- 복습 강의 -->

        <div class="tile is-parent is-6">
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">
              <span>복습 강의</span>
              <span v-if="false"
                ><font-awesome-icon
                  icon="fa-solid fa-circle-check"
                  size="1.2x"
                  style="color: #4bdb4b; padding-left: 295px" />&nbsp;&nbsp;학습
                완료</span
              >
            </p>
            <div class="content" style="float: left">
              <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
              <div v-if="userid == 2019000000" class="p-title">
                <a href="/lecture" style="font-size: 1.5em">
                  <p>{{ reviewLecture[0].title }}</p>
                </a>
              </div>
              <div v-else class="p-title">
                <a href="" style="font-size: 1.5em">
                  <p>{{ reviewLecture[0].title }}</p>
                  <p>{{ reviewLecture[0].subtitle }}</p>
                </a>
              </div>
              <p
                style="
                  text-align: left;
                  padding-left: 10px;
                  padding-bottom: 5px;
                ">
                관련 개념:
                <b-tag type="is-primary" rounded>{{ review.tag }}</b-tag>
              </p>
              <p style="text-align: left; padding-left: 10px">
                강의 난이도: {{ review.difficulty }}
              </p>
              <p style="text-align: left; padding-left: 10px">
                <span> 강의시간: 22분 </span>
                <span style="text-align: right; padding-left: 150px"
                  >유사한 레벨의 사용자 71%가 가 시청</span
                >
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
/* eslint-disable */
import NavbarView from "../components/navbarView.vue";
import VueCookies from "vue-cookies";

export default {
  data: function () {
    return {
      userid: VueCookies.get("userid"),

      problem: {
        number: 123,
        title: "aaa",
        difficulty: 1,
        tag: "bbb",
        expect_time: 1,
        ans_rate: 1
      },

      review: {
        number: 123,
        title: "aaa",
        difficulty: 1,
        tag: "bbb",
        expect_time: 1,
        ans_rate: 1
      },

      todayLecture: [
        {
          title: "자료구조 기초2",
          subtitle: "우선순위 큐",
          key: "자료구조_2",
          class: ["자료구조"]
        },
        {
          title: "정렬 기초1",
          subtitle: "버블 정렬",
          key: "정렬_1",
          class: ["정렬"]
        }
      ],
      reviewLecture: [
        { title: "DFS 기초1", subtitle: "", key: "Dfs_1", class: ["BFS"] },
        { title: "정렬 기초1", subtitle: "", key: "sort_1", class: ["정렬"] }
      ]
    };
  },

  created() {
    this.getProblem();
    this.getReview();
  },

  name: "MainView",
  components: {
    NavbarView
  },
  // data() {
  //   return {
  //     todayProblems: [
  //       { title: "유기농 배추", key: "boj_1012", class: ["BFS, DFS, 그래프"] },
  //       { title: "적록색약", key: "boj_10026", class: ["BFS, DFS, 그래프"] },
  //       { title: "수 묶기", key: "boj_1744", class: ["Sort, Greedy"] },
  //       { title: "공통 부분 문자열", key: "boj_5582", class: ["문자열, DP"] },
  //       { title: "LCA", key: "boj_11437", class: ["트리"] }
  //     ],
  //     reviewProblems: [
  //       { title: "트리 순회", key: "boj_1991", class: ["트리, 재귀"] },
  //       { title: "단절점과 단절선", key: "boj_14675", class: ["그래프, 트리"] },
  //       { title: "가장 많은 글자", key: "boj_1371", class: ["구현, 문자열"] },
  //       { title: "후위 표기식", key: "boj_1918", class: ["자료구조, 스택"] },
  //       {
  //         title: "히스토그램",
  //         key: "boj_1725",
  //         class: ["자료구조, 세그먼트 트리, 스택, 분할정복"]
  //       }
  //     ],
  //     todayLecture: [
  //       { title: "BFS 기초2", key: "bfs_1", class: ["BFS"] },
  //       { title: "이진 트리 기초", key: "bfs_1", class: ["트리"] }
  //     ],
  //     reviewLecture: [
  //       { title: "BFS 기초1", key: "bfs_1", class: ["BFS"] },
  //       { title: "그래프 탐색 이해하기", key: "bfs_1", class: ["그래프"] }
  //     ]
  //   };
  // },
  methods: {
    async getProblem() {
      axios.post("/api/getProblem").then((res) => {
        console.log(res.data.problems);
        this.problem = res.data.problems[0];
        console.log(this.problem);
      });
    },

    async getReview() {
      axios.post("/api/getReview").then((res) => {
        console.log(res.data.problems);
        this.review = res.data.problems[0];
        console.log(this.review);
      });
    },

    clickMe() {
      this.$buefy.notification.open("Clicked!!");
    },

    todayNew() {
      axios.post("/api/getProblem").then((res) => {
        this.problem = res.data.problems[1];
        console.log(this.problem);
        // this.problem = problem
      });
      const args = {};
    },

    updateProblem() {}
    // 마우스 오버시 아이콘 회전: 추후 마저 구현
    // mouseOver: function (event) {
    //   if (event) {
    //     let curId = event.currentTarget.id;
    //     if (curId === "review_refresh_a") {
    //       console.log(document.getElementById("review_refresh_icon"));
    //       console.log(
    //         JSON.stringify(
    //           document.getElementById("review_refresh_icon").getAttribute
    //         )
    //       );
    //       document.getElementById("review_refresh_icon").class += "fa-spin";
    //     }

    //   }
    // }
  }
};
</script>
<style scoped>
.tile-title {
  text-align: left;
}

.p-title {
  padding-left: 0px;
  padding-bottom: 40px;
}
</style>
