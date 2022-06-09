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
        <a href="">
          <!-- TODO: 아이콘 클릭 시 fa-spin 클래스 넣어주기. -->
          <font-awesome-icon icon="fa-solid fa-rotate" size="1.2x"
        /></a>
      </h1>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-6">
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">오늘의 문제</p>
            <!-- 오늘의 문제 컨텐츠 -->
            <div class="content">
              <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
              <a href="" style="font-size: 1.5em"> {{todayProblems[2].title}} </a>
              <p>문제 유형: BFS, DFS
                
              </p>
              <p>풀이 소요 예상 시간: 48분</p>
              <p>유사한 레벨의 사용자 50%가 푼 문제</p>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-6">
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">오늘의 강의</p>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
                dui porta orci, quis semper odio felis ut quam.
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
        <a href=""
          ><font-awesome-icon icon="fa-solid fa-rotate" size="1.2x"
        /></a>
      </h1>
      <div class="tile is-ancestor">
        <div class="tile is-parent is-6">
          <!-- <div class="tile"> -->
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">복습 문제</p>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
                dui porta orci, quis semper odio felis ut quam.
              </p>
            </div>
          </article>
        </div>
        <div class="tile is-parent is-6">
          <article class="tile is-child box notification is-dark">
            <p class="subtitle tile-title">복습 강의</p>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                semper diam at erat pulvinar, at pulvinar felis blandit.
                Vestibulum volutpat tellus diam, consequat gravida libero
                rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc
                dui porta orci, quis semper odio felis ut quam.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import NavbarView from "../components/navbarView.vue";

export default {
  name: "MainView",
  components: {
    NavbarView
  },
  data() {
    return {
      todayProblems: [
        { title: "유기농 배추", key: "boj_1012", class: ["BFS, DFS, Graph"] },
        { title: "적록색약", key: "boj_10026", class: ["BFS, DFS, Graph"] },
        { title: "수 묶기", key: "boj_1744", class: ["Sort, Greedy"] },
        { title: "공통 부분 문자열", key: "boj_5582", class: ["String, DP"] },
        { title: "LCA", key: "boj_11437", class: ["Tree"] }
      ]
    };
  },
  methods: {
    clickMe() {
      this.$buefy.notification.open("Clicked!!");
    }
  }
};
</script>
<style scoped>
.tile-title {
  text-align: left;
}
</style>
