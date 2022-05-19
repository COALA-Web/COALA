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
    <template #start> </template>
    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a href="">
            <font-awesome-icon icon="fa-circle-user" size="2x" />
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  name: "levelCheckNavbarView",
  props: {
    msg: String
  }
};
</script>
<style scoped>
.margin-horizontal {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
