<template>
  <b-navbar :centered="true" type="is-white">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/COALA.svg"
          alt="COALA"
          width="200"
          style="max-height: 4rem" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item class="margin-horizontal" href="#">추천학습</b-navbar-item>
      <b-navbar-item class="margin-horizontal" href="#">
        선택학습
      </b-navbar-item>
      <b-navbar-item class="margin-horizontal" href="#"> 게시판 </b-navbar-item>
      <b-navbar-item class="margin-horizontal" href="#"> 대회 </b-navbar-item>
      <b-navbar-item class="margin-horizontal" href="#"> 랭킹 </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <!-- 우측 요소와 간격 띄우기 위해 margin-right 추가-->
          <a href="" style="margin-right: 30px">
            <font-awesome-icon icon="fa-bell" size="2x" shake />
          </a>
          <a href="">
            <font-awesome-icon icon="fa-circle-user" size="2x" />
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
  <!-- !navbar -->
</template>
<script>
export default {
  name: "navbarView",
  props: {
    msg: String
  }
};
</script>
<style scoped>
.margin-horizontal {
  margin-left: 12px;
  margin-right: 12px;
}
</style>
