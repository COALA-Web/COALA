<template>
  <div>
    <div style="padding-left: 200px; padding-right: 200px">
      <navbar-view />
    </div>
    <div
      class="container"
      style="padding-left: 100px; padding-right: 100px; padding-top: 50px">
      <b-image
        :src="require('@/assets/question_img.png')"
        alt="Question image"
        :rounded="rounded"></b-image>
    </div>
  </div>
</template>
<script>
import NavbarView from "../components/navbarView.vue";

export default {
  components: { NavbarView },
  data() {
    return {
      sampleData: "",
      attendance_rate1: 35,
      attendance_rate2: 89,
      isOpen: false
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
};
</script>
<style scoped>
.profile-box {
  width: 180px;
  height: 180px;
  border-radius: 70%;
  overflow: hidden;
  /* box-shadow: px 5px 5px rgba(0, 0, 0, 0.55);
   */
  border: 2px solid rgba(0, 0, 0, 0.55);
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  float: left;
  text-align: left;
  font-size: 1.8rem;
  /* padding-left: 100px; */
  /* margin-top: 40px; */
  /* padding-bottom: 40px; */
}

.profile-major {
  /* text-align: left; */
  font-size: 1rem;
  padding-top: 10px;
  /* margin-top: 40px; */
  padding-right: 200px;
  /* padding-bottom: 40px; */
}

.profile-rank {
  text-align: left;
  float: left;
  font-size: 1rem;
  /* padding-top: 10px; */
  /* margin-top: 40px; */
  /* padding-right: 200px; */
  /* padding-bottom: 40px; */
}

.bold {
  font-weight: bold;
}

.align-left {
  text-align: left;
}

.div-border {
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 10px;
  padding-top: 20px;
  padding-bottom: 30px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: white;
}
</style>
