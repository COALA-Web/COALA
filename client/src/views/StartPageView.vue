<template>
  <div>
    <navbar-view />
    <div class="container" style="padding-left: 100px; padding-right: 100px">
      <p>코알라님,</p>
      <p>가입을 환영합니다.</p>

      <p>(서비스 소개하기)</p>
      <!--  -->
      <div class="buttons">
        <b-button type="is-primary" @click="levelCheck()"
          >기존 레벨체크: 없애기</b-button
        >
      </div>

      <b-button
        label="레벨 체크하러 가기"
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
<style scoped></style>
