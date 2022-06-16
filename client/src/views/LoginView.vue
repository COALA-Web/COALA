<template>
  <div>
    <div id="wrap">
      <div id="header">
        <div class="d-box">
          <h1
            class="logo"
            style="float: left; margin-block-end: 0px; padding-left: 15px">
            <img
              src="../assets/HYU_logo.png"
              alt="한양대학교 로고"
              style="float: left" />
            <span
              class="title"
              style="
                display: inline-block;
                margin-top: 15px;
                margin-left: 0px;
                margin-right: 0px;
                margin-bottom: 0px;
                padding-top: 0px;
                padding-bottom: 0px;
                padding-right: 0px;
                font-family: 'NanumGothic';
                font-size: 2em;
                text-align: top;
              "
              >한양대학교 | 로그인</span
            >
          </h1>
          <h2
            class="title_txt mt30"
            style="float: left; text-align: start; font-family: 'NanumGothic'">
            <br />고객님의 정보에 접근하기 위하여 인증이 필요합니다.<br />한양대학교
            포털 한양인(HY-in)계정으로 로그인 하시기 바랍니다.
          </h2>
        </div>
      </div>
      <div id="container">
        <!-- d-box: buefy와 중복되어 클래스명 변경(box -> d-box) -->
        <div class="d-box">
          <div class="c_b mt30">&nbsp;</div>
          <div class="login">
            <div class="login_con">
              <span
                style="
                  float: left;
                  text-align: start;
                  font-weight: 500;
                  font-family: 'NanumGothic';
                "
                >Portal Login</span
              >
              <p class="login_tit" style="margin-top: 35px"></p>
              <dl>
                <dt>
                  <label
                    for="userId"
                    style="
                      float: left;
                      text-align: start;
                      font-weight: 800;
                      font-family: 'NanumGothic';
                    "
                    >ID</label
                  >
                </dt>
                <dd style="margin-inline-start: 0px">
                  <input
                    type="text"
                    id="uid"
                    v-model="user.userid"
                    style="float: left"
                    placeholder="아이디를 입력하세요" />
                </dd>
                <dt>
                  <label
                    for="userPassword"
                    style="
                      float: left;
                      text-align: start;
                      font-weight: 800;
                      font-family: 'NanumGothic';
                    "
                    >Password</label
                  >
                </dt>
                <dd style="margin-inline-start: 0px">
                  <input
                    type="password"
                    id="upw"
                    v-model="user.userpw"
                    placeholder="비밀번호를 입력하세요" />
                </dd>
              </dl>
              <div
                class="btn"
                style="display: inline-block
                                margin-top: 0px;
                                margin-left: 0px;
                                margin-right: 0px;
                                margin-bottom: 0px;
                                padding-top: 0px;
                                padding-bottom: 0px;
                                padding-right: 0px;
                                width: 84px">
                <button
                  id="login_btn"
                  style="
                    font-family: 'NanumGothic';
                    font-size: 1em;
                    font-weight: bold;
                  "
                  @click="login()">
                  로그인
                </button>
              </div>
            </div>
          </div>
          <div class="c_b mt50">&nbsp;</div>
        </div>
      </div>
      <div id="bottom">
        <div class="d-box">
          <h2>
            <span
              style="
                font-family: 'NanumGothic';
                font-size: 1em;
                font-weight: bold;
              "
              >COALA 알고리즘 학습 플랫폼</span
            >
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@charset "euc-kr";
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);
@font-face {
  font-family: NanumGothic;
  src: url(//themes.googleusercontent.com/static/fonts/earlyaccess/nanumgothic/v3/NanumGothic-Regular.eot);
}

@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
.nanum {
  font-family: "Nanum Barun Gothic";
}

/* CSS Document */
#wrap {
  width: 100%;
  height: 100%;
}
/* header */
#header {
  clear: both;
  width: 100%;
}
#header .d-box {
  width: 1000px;
  margin: 0px auto;
}
#header .d-box .logo {
  margin-top: 30px;
}
#header .d-box .logo img {
  width: 70px;
}
#header .d-box .logo .title {
  font-family: "NanumGothicWeb";
  font-size: 1em;
  color: #333;
  padding-left: 15px;
}
#header .d-box .title_txt {
  clear: both;
  font-family: "NanumGothicWeb";
  font-size: 1em;
  color: #333;
  line-height: 24px;
  font-weight: normal;
}
/* container */
#container {
  clear: both;
  margin-top: 20px;
}
#container .d-box {
  width: 1000px;
  margin: 0px auto;
}
#container .d-box .login {
  width: 420px;
  height: 200px;
  border: 1px solid #bbb;
  border-radius: 7px;
  margin: 0px auto;
}
#container .d-box .login .login_con {
  float: left;
  width: 93%;
  padding: 20px;
}
#container .d-box .login .left_con {
  float: left;
  width: 50%;
  padding: 20px;
  border-right: 1px solid #bbb;
}
#container .d-box .login dl {
  clear: both;
  margin: 30px 0;
}
#container .d-box .login dl dt {
  clear: both;
  float: left;
  width: 30%;
  height: 50px;
  font-family: "NanumGothicBoldWeb";
  color: #666;
  font-size: 0.865em;
  line-height: 30px;
}
#container .d-box .login dl dd {
  float: left;
  width: 40%;
  font-family: "NanumGothicWeb";
  color: #666;
}
#container .d-box .login_tit {
  font-family: "NanumGothicWeb";
  font-size: 1em;
  color: #333;
  border-bottom: 1px solid #bbb;
  line-height: 40px;
}
#container .d-box .login_txt {
  clear: both;
  font-family: "NanumGothicWeb";
  font-size: 0.75em;
  color: #666;
  line-height: 26px;
}
#container .d-box .login dl input {
  width: 150px;
  height: 30px;
  border: 1px solid #bbb;
  border-radius: 5px;
  text-indent: 10px;
}
#container .d-box .login .btn {
  float: right;
  margin: -50px 20px 0 0;
}
#container .d-box .login .btn button {
  width: 84px;
  height: 84px;
  border: none;
  background-color: #004483;
  color: #fff;
  cursor: pointer;
  font-family: "NanumGothicBoldWeb";
  font-size: 1em;
  border-radius: 5px;
}
#container .d-box .style_d-box01 {
  clear: both;
  height: 100px;
  overflow-x: hidden;
  overflow: scroll;
  margin: 10px 0;
  border: 1px solid #bbb;
  font-family: "NanumGothicWeb";
  font-size: 0.75em;
  line-height: 24px;
  color: #666;
  padding: 10px;
}
#container .d-box .style_d-box02 {
  clear: both;
  margin: 10px 0;
  border: 1px solid #bbb;
  padding: 10px;
  font-family: "NanumGothicWeb";
  font-size: 0.75em;
  line-height: 24px;
  color: #666;
}
#container .d-box .style_d-box03 {
  clear: both;
  margin: 10px 0;
  border: 1px solid #bbb;
  font-family: "NanumGothicWeb";
  font-size: 0.75em;
}
#container .depth_tit {
  font-family: "NanumGothicBoldWeb";
  text-transform: uppercase;
  font-size: 0.95em;
  color: #444;
  line-height: 30px;
  border-bottom: 1px solid #bbb;
}
#container .depth_tit01 {
  font-family: "NanumGothicBoldWeb";
  text-transform: uppercase;
  font-size: 0.85em;
  color: #444;
  line-height: 30px;
}
#container .depth_stit {
  font-family: "NanumGothicBoldWeb";
  text-transform: uppercase;
  font-size: 0.95em;
  color: #004483;
  line-height: 30px;
}
#container .depth_txt {
  font-family: "NanumGothicWeb";
  text-transform: uppercase;
  font-size: 0.8em;
  color: #666;
  line-height: 20px;
}
#container .depth_txt_big {
  font-family: "NanumGothicWeb";
  text-transform: uppercase;
  font-size: 1em;
  color: #666;
  line-height: 42px;
}
#container .depth_dtit {
  font-family: "NanumGothicBoldWeb";
  text-transform: uppercase;
  font-size: 0.8em;
  color: #004483;
  line-height: 30px;
}
#container .depth_dtxt {
  font-family: "NanumGothicWeb";
  text-transform: uppercase;
  font-size: 0.75em;
  color: #666;
  line-height: 20px;
}
#container .depth_utit {
  font-family: "NanumGothicBoldWeb";
  text-transform: uppercase;
  font-size: 0.8em;
  color: #333;
  line-height: 30px;
}
#container .depth_utxt {
  font-family: "NanumGothicWeb";
  text-transform: uppercase;
  font-size: 0.75em;
  color: #666;
  line-height: 20px;
}
#container .d-box .app_d-box {
  float: right;
  width: 90%;
  margin: 20px 0;
}
#container .tb_btn {
  margin: 20px 0;
  text-align: center;
}
/* bottom */
#bottom {
  clear: both;
  width: 100%;
  height: 50px;
  background-color: #333;
  margin-top: 450px;
}
#bottom .d-box {
  width: 1000px;
  margin: 0px auto;
}
#bottom h2 span {
  line-height: 50px;
  color: #666;
  font-family: "NanumGothicBoldWeb";
  font-size: 0.6em;
}
#bottom address {
  position: absolute;
  margin: -30px 0 0 200px;
  font-style: normal;
}
#bottom address span {
  font-size: 0.7em;
  font-family: Dotum;
  color: #666;
}
#bottom .d-box .copyright {
  float: right;
  font-size: 0.7em;
  font-family: Dotum;
  color: #666;
  margin-top: -30px;
}
body {
  font-family: "NanumGothic", "serif";
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      user: {
        userid: "",
        userpw: ""
      }
    };
  },

  methods: {
    login: function () {
      const args = {
        loginId: this.user.userid,
        loginPw: this.user.userpw
      };

      localStorage.setItem("isLogin", true);

      this.$store.commit("user/setUser", {
        name: "coala",
        email: "coco@naver.com",
        tel: "010-0000-0000"
      });

      axios.post("/api/login", args).then((res) => {
        if (res.data.success == true) {
          alert(res.data.message);
          this.$router.push({ path: "/levelcheck" });
          // this.$router.push({ path: "/start" });
        } else {
          alert(res.data.message);
        }
      });
    }
  }
};
</script>
