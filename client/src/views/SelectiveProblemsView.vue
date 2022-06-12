<template>
<div class="sub">
    <navbar-view />
    <section style="padding-left: 200px; padding-right: 200px">
    <b-notification type="is-warning" aria-close-label="Close notification">
          <font-awesome-icon icon="fa-solid fa-circle-exclamation" />
          전체 공지 사항
        </b-notification>
        <!-- <p
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
        </p> -->
        <p class="panel-tabs">
            <a > 강의 </a>
            <a class="is-active"> 문제 </a>
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
        <p style="font-size: 30px; padding-top: 10px;padding-left: 30px;text-align: left;"> AI 추천 문제 </p>
        <p style="font-size: 17px;padding-top: 10px; padding-left: 50px;text-align: left;font-style: italic;">사용자와 유사한 이용자를 분석하여 가장 성장률이 뛰어난 컨텐츠를 제공합니다.</p>
        <div class="columns" style="margin-top: 15px">
        
            <div class="column is-third" style="padding:2em 3em" >
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title">추천 문제</p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        1260
                        미로 탐색
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: DFS,BFS,Graph</p>
                    <p>문제 난이도: 2.8</p>
                    <p>풀이 소요 예상 시간: 45분</p>
                    <p>유사한 레벨의 사용자 57%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-third"  style="padding:2em 3em" >
                <article class="tile is-child box notification is-dark" >
                    <p class="subtitle tile-title">추천 문제</p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        2839
                        피보나치 함수
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: DP</p>
                    <p>문제 난이도: 1.5</p>
                    <p>풀이 소요 예상 시간: 20 분</p>
                    <p>유사한 레벨의 사용자 84%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-third" style="padding:2em 3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title">추천 문제</p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        2263
                        트리 순회
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: Tree, 이진탐색</p>
                    <p>문제 난이도: 2.1</p>
                    <p>풀이 소요 예상 시간: 40분</p>
                    <p>유사한 레벨의 사용자 76%가 푼 문제</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
    <div style="height: 70px;"></div>
    <div style="background-color:#F0F0F0">
        <div class="columns">
            <div class="column is-one-quarter" >
                <p style="font-size: 30px; padding-top: 10px;padding-left: 30px;text-align: left;">모든 문제</p>
            </div>
            <div class="column is-half" >
                <b-field>
                    <b-input placeholder="찾고 싶은 문제 이름 또는 ID를 입력해 주세요."
                        type="search"
                        icon="magnify"
                        icon-clickable
                        @icon-click="searchIconClick">
                    </b-input>
                </b-field>
            </div>
        </div>

        <div class="columns" style="margin-top: 15px">
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        5639
                        전화번호 목록
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: 문자열,트리,탐색</p>
                    <p>문제 난이도: 3.2}</p>
                    <p>풀이 소요 예상 시간: 50분</p>
                    <p>유사한 레벨의 사용자 62%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        2231
                        스타트와 링크
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: 수학,그리디,배열 </p>
                    <p>문제 난이도: 2.4</p>
                    <p>풀이 소요 예상 시간: 38분</p>
                    <p>유사한 레벨의 사용자 67%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        9653
                        N-Queen
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: DP,그리디</p>
                    <p>문제 난이도: 3.1</p>
                    <p>풀이 소요 예상 시간: 45분</p>
                    <p>유사한 레벨의 사용자 59%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        1182
                        부분 수열의 합
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: 수학,DP</p>
                    <p>문제 난이도: 1.4</p>
                    <p>풀이 소요 예상 시간: 22분</p>
                    <p>유사한 레벨의 사용자 83%가 푼 문제</p>
                    </div>
                </article>
            </div>
        </div>
        <div class="columns" style="margin-top: 15px">
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        11724
                        연결요소의 개수
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: DFS,BFS,탐색</p>
                    <p>문제 난이도: 4.3</p>
                    <p>풀이 소요 예상 시간: 72분</p>
                    <p>유사한 레벨의 사용자 37%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        5342
                        욕심쟁이 판다
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: 그리디,배열</p>
                    <p>문제 난이도: 2.9</p>
                    <p>풀이 소요 예상 시간: 36분</p>
                    <p>유사한 레벨의 사용자 57%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        2468
                        영역 구하기
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: 그리디,배열,DFS,BFS</p>
                    <p>문제 난이도: 2.4</p>
                    <p>풀이 소요 예상 시간: 32분</p>
                    <p>유사한 레벨의 사용자 65%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        7567
                        셀프 넘버
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: 수학,그리디,브루트포스</p>
                    <p>문제 난이도: 1.5</p>
                    <p>풀이 소요 예상 시간: 17분</p>
                    <p>유사한 레벨의 사용자 93%가 푼 문제</p>
                    </div>
                </article>
            </div>
        </div>
        <div class="columns" style="margin-top: 15px">
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        1010
                        다리놓기
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: DP,배열</p>
                    <p>문제 난이도: 2.0</p>
                    <p>풀이 소요 예상 시간: 30분</p>
                    <p>유사한 레벨의 사용자 87%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        2839
                        설탕 배달
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: 정렬,그리디,DP</p>
                    <p>문제 난이도: 3.7</p>
                    <p>풀이 소요 예상 시간: 58분</p>
                    <p>유사한 레벨의 사용자 37%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        12865
                        평범한 배낭
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: DP,배열</p>
                    <p>문제 난이도: 3.0</p>
                    <p>풀이 소요 예상 시간: 42분</p>
                    <p>유사한 레벨의 사용자 53%가 푼 문제</p>
                    </div>
                </article>
            </div>
            <div class="column is-quarter" style="padding:3em">
                <article class="tile is-child box notification is-dark">
                    <p class="subtitle tile-title"></p>
                    <!-- 오늘의 문제 컨텐츠 -->
                    <div class="content">
                    <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                    <a href="" style="font-size: 1.5em">
                        3951
                        오르막 수
                        <!-- {{ todayProblems[2].title }} -->
                    </a>
                    <p>문제 유형: DFS, 완전 탐색</p>
                    <p>문제 난이도: 2.6</p>
                    <p>풀이 소요 예상 시간: 40분</p>
                    <p>유사한 레벨의 사용자 67%가 푼 문제</p>
                    </div>
                </article>
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
        problem: {
          number: 123,
          title: "aaa",
          difficulty: 1,
          tag: "bbb",
          expect_time: 1,
          ans_rate: 1
        },
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
