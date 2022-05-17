<template>
  <b-navbar :centered="true" type="is-white">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <!-- 좀 키우기.. -->
        <img
          src="../assets/COALA.svg"
          alt="COALA"
          width="200"
          style="max-height: 4rem" />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#"> 추천학습 </b-navbar-item>
      <b-navbar-item href="#"> 선택학습 </b-navbar-item>
      <b-navbar-item href="#"> 게시판 </b-navbar-item>
      <b-navbar-item href="#"> 랭킹 </b-navbar-item>
      <b-navbar-item href="#"> 마이페이지 </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#"> About </b-navbar-item>
        <b-navbar-item href="#"> Contact </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light"> Log in </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
  <!-- !navbar -->
</template>
