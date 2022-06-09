<template>
  <div class="main">
    <b-message> </b-message>
    <navbar-view />
    <section style="padding-left: 200px; padding-right: 200px">
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
        <p
          style="
            text-align: left;
            font-size: 1rem;
            padding-left: 10px;
            padding-bottom: 10px;
          ">
          학습 진행률
        </p>
        <b-progress :value="60" show-value format="percent"></b-progress>
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
          <font-awesome-icon icon="fa-solid fa-rotate" size="1.2x"/>
        </a>
        </b-tooltip>
      </h1>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-6">
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">오늘의 문제</p>

            <!-- 오늘의 문제 컨텐츠 -->
            <div class="content">
              <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
              <a href="" style="font-size: 1.5em">
                {{problem.number}}
                {{problem.title}}
                <!-- {{ todayProblems[2].title }} -->
              </a>
              <p>문제 유형: {{problem.tag}}</p>
              <p>문제 난이도: {{problem.difficulty}}</p>
              <p>풀이 소요 예상 시간: 48분</p>
              <p>유사한 레벨의 사용자 50%가 푼 문제</p>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-6">
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">오늘의 강의</p>

            <div class="content">
              <a href="" style="font-size: 1.5em">
                <!-- {{ todayLecture[1].title }} -->
              </a>
              <p>여긴 무슨 정보가 들어가야될까?</p>

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
        <div class="tile is-parent is-6">
          <!-- <div class="tile"> -->
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">복습 문제</p>
            <div class="content">
              <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
              <!-- 밑 부분도 -->
              <a href="" style="font-size: 1.5em">
                <!-- {{ reviewProblems[2].title }} -->
              </a>
              <p>문제 유형: 구현, 문자열</p>

              <p>풀이 소요 예상 시간: 48분</p>
              <p>유사한 레벨의 사용자 50%가 푼 문제</p>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-6">
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">복습 강의</p>
            <div class="content">
              <a href="" style="font-size: 1.5em">
                <!-- {{ reviewLecture[0].title }} -->
              </a>
              <p>여긴 무슨 정보가 들어가야될까? - 최초 수강 날짜, 난이도?</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
/* eslint-disable */
import NavbarView from "../components/navbarView.vue";

export default {
  data: function() {
      return {
        problem: {
          number: 123,
          title: "aaa",
          difficulty: 1,
          tag: "bbb"
        },

        review: {
          number: 123,
          title: "aaa",
          difficulty: 1,
          tag: "bbb"
        }
      };
    },

  created() {
    this.getProblem();
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
        this.review = res.data.problems;
        console.log(this.review);
      });
      
    },

    clickMe() {
      this.$buefy.notification.open("Clicked!!");
    },

    todayNew() {
      axios.post("/api/getProblem").then((res) => {
        console.log("renew");
        console.log(res);
        this.problem = res.data.problems[1];
        // this.problem = problem
      })
      const args = {

      }
    },

    updateProblem() {
      
    }
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
</style>
