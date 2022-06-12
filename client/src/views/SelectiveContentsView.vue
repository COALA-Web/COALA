<template>
<div class="sub">
    <navbar-view />
    <section style="padding-left: 200px; padding-right: 200px">
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


    <!-- <div style="background-color: #F0F0F0;padding-left: 5px;padding-bottom: 25px;">
        
        <div class="columns " style="padding-top: 15px;">
            <div class="column is-one-quarter"></div>
            <div class="column is-one-fifth" style="padding-top: 12px;" >
                <p><b>난이도 선택</b></p>
                <b-dropdown aria-role="list">
                    
                    <template v-if="difficulty=='low'" #trigger>
                        <b-button
                            label="하급"
                            type="is-info"
                            :icon-right="active ? 'menu-up' : 'menu-down'" />
                    </template>
                    <template v-else-if="difficulty=='medium'" #trigger>
                        <b-button
                            label="중급"
                            type="is-info"
                            :icon-right="active ? 'menu-up' : 'menu-down'" />
                    </template>
                    <template v-else-if="difficulty=='low_high'" #trigger>
                        <b-button
                            label="상급"
                            type="is-info"
                            :icon-right="active ? 'menu-up' : 'menu-down'" />
                    </template>
                    <template v-else-if="difficulty=='high'" #trigger>
                        <b-button
                            label="최상급"
                            type="is-info"
                            :icon-right="active ? 'menu-up' : 'menu-down'" />
                    </template>
                    <b-dropdown-item aria-role="listitem" @click="active_high()"><b>최상급</b></b-dropdown-item>
                    <b-dropdown-item aria-role="listitem" @click="active_lowHigh()"><b>상급</b></b-dropdown-item>
                    <b-dropdown-item aria-role="listitem" @click="active_medium()"><b>중급</b></b-dropdown-item>
                    <b-dropdown-item aria-role="listitem" @click="active_low()"><b>하급</b></b-dropdown-item>
                </b-dropdown>
            </div>
            <div class="column is-one-fifth " style="padding-top: 22px;" >
                <template v-if="difficulty=='low'" >
                    <div><p>하급 레벨은 <b>상위 70% ~ 90% </b>사용자에게 적합한 문제를 제공합니다.</p></div>
                </template>
                <template v-else-if="difficulty=='medium'" >
                    <div><p>중급 레벨은 <b>상위 30% ~ 70% </b>사용자에게 적합한 문제를 제공합니다.</p></div>
                </template>
                <template v-else-if="difficulty=='low_high'" >
                    <div><p>상급 레벨은 <b>상위 10% ~ 30% </b> 사용자에게 적합한 문제를 제공합니다.</p></div>
                </template>
                <template v-else-if="difficulty=='high'" >
                    <div><p>최상급 레벨은 <b>상위 10% </b> 사용자에게 적합한 문제를 제공합니다.</p></div>
                </template>
            </div>
        </div>
    
        <p style="font-size:30px; padding-top: 12px;padding-bottom: 12px;">알고리즘 선택</p>
        
        <section style="padding-left: 150px; padding-right: 150px">
        
            <div class="columns is-5"  >
                <div class="column" style="padding-right: 0px">
                    <button class="button is-dark" @click="setString()">문자열</button>
                </div>
                <div class="column" style="padding-right: 0px;padding-left: 0px;">
                    <button class="button is-dark" @click="setArray()">배열</button>
                </div>
                <div class="column" style="padding-right: 0px;padding-left: 0px;">
                    <button class="button is-dark" @click="setGreedy()">그리디</button>
                </div>
                <div class="column" style="padding-right: 0px;padding-left: 0px;">
                    <button class="button is-dark" @click="setMath()">수학</button>
                </div>
                <div class="column" style="padding-right: 0px;padding-left: 0px;">
                    <button class="button is-dark" @click="setSort()">정렬</button>
                </div>
                <div class="column" style="padding-right: 0px;padding-left: 0px;">
                    <button class="button is-dark" @click="setTree()">트리</button>
                </div>
                <div class="column" style="padding-right: 0px;padding-left: 0px;">
                    <button class="button is-dark" @click="setDfs()">DFS</button>
                </div>
                <div class="column" style="padding-right: 0px;padding-left: 0px;">
                    <button class="button is-dark" @click="setBfs()">BFS</button>
                </div>
                <div class="column" style="padding-right: 0px;padding-left: 0px;">
                    <button class="button is-dark" @click="setDP()">DP</button>
                </div>
                <div class="column" style="padding-right: 0px;padding-left: 0px;">
                    <button class="button is-dark" @click="setHash()">해쉬</button>
                </div>
                <div class="column is-one-fifths" ></div>
            </div>
        </section>
    </div>
        
    <div style="height: 30px;"></div>
    <div class="column is-one-half" style="padding-top: 20px; background-color:#F0F0F0">
            
        <template v-if="algorithm_topic=='문자열'||algorithm_topic=='정렬'" >
            <img src="@/assets/s.png" />
        </template>
        <template v-else-if="algorithm_topic=='배열'||algorithm_topic=='트리'" >
            <img src="@/assets/s2.png" />
        </template>
        <template v-else-if="algorithm_topic=='그리디'||algorithm_topic=='DFS'" >
            <img src="@/assets/s3.png" />
        </template>
        <template v-else-if="algorithm_topic=='수학'||algorithm_topic=='BFS'" >
            <img src="@/assets/s4.png" />
        </template>
        <template v-else-if="algorithm_topic=='다이나믹 프로그래밍'||algorithm_topic=='해쉬 테이블'" >
            <img src="@/assets/s.png" />
        </template>
        <div style="padding-top: 14px; ">
            <p style="font-size:20px">인공지능 분석 결과 코알라 님은 <b>{{algorithm_topic}} 알고리즘</b>에 대해 <b>상위 {{algorithm_percent}} </b> 영역에 위치합니다. </p>
        </div>
    </div> -->
    <!-- <div style="height: 30px;"></div>
    <div style="background-color:#F0F0F0">
        <p style="font-size: 30px; padding-top: 10px;padding-left: 30px;text-align: left;"> Contents</p>
        <div class="columns">
            <div class="column is-one-quarter" >
                <div class="buttons" >
                    <b-button style="margin: 30px auto" size="is-large" type="is-success">개념 강의</b-button>
                </div>
            </div>
            <div class="column is-one-quarter">
                <div class="buttons">
                    <b-button style="margin: 30px auto" size="is-large" type="is-success">심화 강의</b-button>
                </div>
            </div>
            <div class="column is-one-quarter">
                <div class="buttons">
                    <b-button style="margin: 30px auto" size="is-large" type="is-success">문제 풀이</b-button>
                </div>
            </div>
            <div class="column is-one-quarter">
                <div class="buttons">
                    <b-button style="margin: 30px auto" size="is-large" type="is-success">코딩 테스트 대비</b-button>
                </div>
            </div>
        </div>
    </div> -->



    <div style="height: 30px;"></div>
    <div style="background-color:#F0F0F0">
        <p style="font-size: 30px; padding-top: 10px;padding-left: 30px;text-align: left;"> AI 추천 강의 </p>
        <p style="font-size: 17px;padding-top: 10px; padding-left: 50px;text-align: left;font-style: italic;">사용자와 유사한 이용자를 분석하여 가장 학습률이 뛰어난 컨텐츠를 제공합니다.</p>
        <div class="columns" style="margin-top: 15px">
            <div class="column is-third"  v-on:mouseover="mouse_over=true" v-on:mouseleave="mouse_over=false" >
                <div>
                    <img src="@/assets/lecture1.png" />
                    <p v-show="mouse_over"> <b>사용자와 유사한 이용자의 87%가 약 92% 수강률로 해당 영상을 시청했습니다.</b></p>

                </div>
                
            </div>
            <div class="column is-third"  v-on:mouseover="mouse_over1=true" v-on:mouseleave="mouse_over1=false" >
                <div>
                    <img src="@/assets/lecture2.png" />
                    <p v-show="mouse_over1"> <b>사용자와 유사한 이용자의 75%가 약 84% 수강률로 해당 영상을 시청했습니다.</b></p>
                </div>
            </div>
            <div class="column is-third" v-on:mouseover="mouse_over2=true" v-on:mouseleave="mouse_over2=false">
                <div>
                    <img src="@/assets/lecture3.png" />
                    <p v-show="mouse_over2" > <b>사용자와 유사한 이용자의 68%가 약 81% 수강률로 해당 영상을 시청했습니다.</b></p>
                </div>
            </div>
        </div>
    </div>
    <div style="height: 70px;"></div>

    <div style="background-color:#F0F0F0">
        <div class="columns">
            <div class="column is-one-quarter" >
                <p style="font-size: 30px; padding-top: 10px;padding-left: 30px;text-align: left;">모든 강의</p>
            </div>
            <div class="column is-half" >
                <b-field>
                    <b-input placeholder="찾고 싶은 강의 이름 또는 ID를 입력해 주세요."
                        type="search"
                        icon="magnify"
                        icon-clickable
                        @icon-click="searchIconClick">
                    </b-input>
                </b-field>
            </div>
            
        </div>
        
        
        <div class="columns">
            <div class="column is-one-quarter" >
                <img src="@/assets/1.png" />
            </div>
            <div class="column is-one-quarter" >
                <img src="@/assets/2.png" />
            </div>
            <div class="column is-one-quarter" >
                <img src="@/assets/3.png" />
            </div>
            <div class="column is-one-quarter" >
                <img src="@/assets/4.png" />
            </div>
        </div>
        
        <div class="columns">
            <div class="column is-one-quarter" >
                <img src="@/assets/5.png" />
            </div>
            <div class="column is-one-quarter" >
                <img src="@/assets/6.png" />
            </div>
            <div class="column is-one-quarter" >
                <img src="@/assets/7.png" />
            </div>
            <div class="column is-one-quarter" >
                <img src="@/assets/8.png" />
            </div>
        </div>
        <div class="columns">
            <div class="column is-one-quarter" >
                <img src="@/assets/9.png" />
            </div>
            <div class="column is-one-quarter" >
                <img src="@/assets/10.png" />
            </div>
            <div class="column is-one-quarter" >
                <img src="@/assets/11.png" />
            </div>
            <div class="column is-one-quarter" >
                <img src="@/assets/12.png" />
            </div>
        </div>
        

    </div>





    </section>
</div>
    
</template>

<script>
import NavbarView from "../components/navbarView.vue";

export default {
name: "SelectiveContentsView",
  data(){
    return{
        language: "Python3",
        difficulty: "high",
        algorithm_topic: "문자열",
        algorithm_percent: "37%",
        mouse_over: false,
        mouse_over1: false,
        mouse_over2: false,
    }
  },
  components: {
    NavbarView
  },         
    methods: {
        active_high(){
            this.difficulty = "high";
        },
        active_medium(){
            this.difficulty = "medium";
        },
        active_low(){
            this.difficulty = "low";
        },
        active_lowHigh(){
            this.difficulty = "low_high";
        },
        setString(){
            this.algorithm_topic="문자열";
            this.algorithm_percent="37%";
        },
        setArray(){
            this.algorithm_topic="배열";
            this.algorithm_percent="62%";
        },
        setGreedy(){
            this.algorithm_topic="그리디";
            this.algorithm_percent="47%";
        },
        setMath(){
            this.algorithm_topic="수학";
            this.algorithm_percent="14%";
        },
        setSort(){
            this.algorithm_topic="정렬";
            this.algorithm_percent="36%";
        },
        setTree(){
            this.algorithm_topic="트리";
            this.algorithm_percent="62%";
        },
        setDfs(){
            this.algorithm_topic="DFS";
            this.algorithm_percent="48%";
        },
        setBfs(){
            this.algorithm_topic="BFS";
            this.algorithm_percent="17%";
        },
        setDP(){
            this.algorithm_topic="다이나믹 프로그래밍";
            this.algorithm_percent="39%";
        },
        setHash(){
            this.algorithm_topic="해쉬 테이블";
            this.algorithm_percent="40%";
        },
        mouseOver(){
            this.mouse_over = true;
        },
        mouseLeave(){
            this.mouse_over = false;
        }

    }
}

</script>
