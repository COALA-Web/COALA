<template>
  <div class="main">
    <!-- TODO: 공지사항 위치 결정 -->
    <b-message>
      <!-- <template #header> 알림/공지사항 1번 위치 </template> -->
      알림/공지사항 2번 위치
    </b-message>
    <navbar-view />
    <section style="padding-left: 200px; padding-right: 200px">
      <div>
        <b-notification type="is-warning" aria-close-label="Close notification">
          <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
          알림/공지사항 3번 위치
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
