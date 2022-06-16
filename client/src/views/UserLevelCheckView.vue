<template>
  <div>
    <navbar-view />
    <div
      class="container"
      style="padding-top: 30px; padding-left: 100px; padding-right: 100px">
      <div style="font-size: 3rem; font-weight: bold">
        <p>안녕하세요!👋🙌</p>
        <p>코알라 님.</p>
      </div>
      <hr class="horizon-line" />

      <!-- 레벨 체크 안내 -->
      <div style="font-size: 1.5rem">
        <p>
          초기 학습 컨텐츠 추천을 위해 간단한 실력 진단이 필요합니다. <br />
          <br />
          <br />
        </p>

        <p>
          진단 결과를 통해 측정된 실력을 바탕으로 학습 컨텐츠를 추천하며,
          <br />
          이후 학습이 진행될수록 AI가 끊임없이 코알라님의 수준을 분석해 최적의
          학습 컨텐츠를 제공합니다.

          <br />
          <br />
          <br />
        </p>

        <p>
          알고리즘 실력을 진단한 뒤 <br />
          지금 바로 학습을 시작해보세요!
          <br />
          <br />
          <br />
        </p>

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
