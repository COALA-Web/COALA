<template>
  <div>
    <navbar-view />
    <div class="container" style="padding-left: 100px; padding-right: 100px">
      <div style="font-size: 3rem; font-weight: bold">
        <p>안녕하세요!</p>
        <p>코알라 님.</p>
        <!-- <p>가입을 환영합니다.</p> -->
        <!-- <hr align="center" style="width: 50%" /> -->
        <!-- <hr style="width: 50%; margin: auto" /> -->
      </div>
      <hr class="horizon-line" />

      <!-- 레벨 체크 안내 -->
      <div>
        <p style="margin-bottom: 40px">
          알고리즘 실력을 진단한 뒤 <br />
          지금 바로 학습을 시작해보세요!
        </p>
        <!-- <div class="buttons">
          <b-button type="is-primary" @click="levelCheck()"
            >기존 레벨체크: 없애기</b-button
          >
        </div> -->

        <b-button
          label="레벨 체크 시작하기"
          type="is-primary"
          size="is-medium"
          @click="isComponentModalActive = true" />

        <b-modal
          v-model="isComponentModalActive"
          has-modal-card
          trap-focus
          :destroy-on-hide="false"
          aria-role="dialog"
          aria-label="Example Modal"
          close-button-aria-label="Close"
          :can-cancel="false"
          aria-modal>
          <template #default="props">
            <modal-view v-bind="formProps" @close="props.close" />
          </template>
        </b-modal>
      </div>
      <hr class="horizon-line" />

      <!-- 서비스 소개 -->
      <div>
        <p>코알라 서비스 소개(위로 올릴지?)..</p>
        <p>캐러셀 또는 카드로.</p>
      </div>
    </div>
  </div>
</template>
<script>
import NavbarView from "../components/navbarView.vue";
import ModalView from "../components/ModalView.vue";

export default {
  components: { NavbarView, ModalView },
  data() {
    return {
      isComponentModalActive: false,
      formProps: {
        email: "evan@you.com",
        password: "testing"
      }
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    levelCheck: function () {
      this.$router.push("/levelcheck");
    }
  }
};
</script>
<style scoped>
.horizon-line {
  width: 40%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
