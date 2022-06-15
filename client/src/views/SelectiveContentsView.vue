<template>
<div class="sub">
    <navbar-view />
    <section style="padding-left: 200px; padding-right: 200px">
    
    <p class="panel-tabs">
        <a  class="is-active" > 강의 </a>
        <a href="/select2"> 문제 </a>
    </p>

    <div style="background-color: #F0F0F0;padding-left: 5px;padding-bottom: 25px;">
        
        <div class="columns " style="padding-top: 15px;margin-top: 2em;">
            <div class="column is-half" style="padding-top: 12px;" >
                <div style="background-color: #FFFFFF;margin: 0em 2em;">
                <div style="margin-top:2em;">
                    <p><b>난이도 선택</b></p>
                    <b-dropdown aria-role="list" style="margin-top:1em">
                        
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
                <div style="margin-top:1em;background-color: #FFFFFF;">
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
                <div style="margin-top:5em">
                    <div style="background-color: #FFFFFF;margin: 0em 2em; padding: 1em 2em;">
                    <p><b>알고리즘 선택</b></p>
                        <section class="b-tooltips" style="margin-top:1em">
                            <template v-if="active_string==false" >
                                <b-tooltip label="코알라님의 '문자열' 영역은 중급 레벨입니다." >
                                    <b-button label="문자열" type="is-light" @click="active_string=true" v-on:mouseover="onString=true" v-on:mouseleave="onString=false"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_string==true" >
                                <b-tooltip label="코알라님의 '문자열' 영역은 중급 레벨입니다." >
                                    <b-button label="문자열" type="is-dark" @click="active_string=false" v-on:mouseover="onString=true" v-on:mouseleave="onString=false"/>
                                </b-tooltip>
                            </template>
                            
                            <template v-if="active_array==false" >
                                <b-tooltip label="코알라님의 '배열' 영역은 중급 레벨입니다.">
                                    <b-button label="배열" type="is-light" @click="active_array=true" v-on:mouseover="onArray=true" v-on:mouseleave="onArray=false"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_array==true" >
                                <b-tooltip label="코알라님의 '배열' 영역은 중급 레벨입니다.">
                                    <b-button label="배열" type="is-dark" @click="active_array=false" v-on:mouseover="onArray=true" v-on:mouseleave="onArray=false"/>
                                </b-tooltip>
                            </template>

                            <template v-if="active_greedy==false" >
                                <b-tooltip label="코알라님의 '그리디' 영역은 중급 레벨입니다.">
                                    <b-button label="그리디" type="is-light" @click="active_greedy=true"  v-on:mouseover="onGreedy=true" v-on:mouseleave="onGreedy=false"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_greedy==true" >
                                <b-tooltip label="코알라님의 '그리디' 영역은 중급 레벨입니다.">
                                    <b-button label="그리디" type="is-dark" @click="active_greedy=false"  v-on:mouseover="onGreedy=true" v-on:mouseleave="onGreedy=false"/>
                                </b-tooltip>
                            </template>

                            <template v-if="active_math==false" >
                                <b-tooltip label="코알라님의 '수학' 영역은 중급 레벨입니다.">
                                    <b-button label="수학" type="is-light" @click="active_math=true" v-on:mouseover="onMath=true" v-on:mouseleave="onMath=false"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_math==true" >
                                <b-tooltip label="코알라님의 '수학' 영역은 중급 레벨입니다.">
                                    <b-button label="수학" type="is-dark" @click="active_math=false" v-on:mouseover="onMath=true" v-on:mouseleave="onMath=false"/>
                                </b-tooltip>
                            </template>

                            <template v-if="active_sort==false" >
                                <b-tooltip label="코알라님의 '정렬' 영역은 중급 레벨입니다.">
                                    <b-button label="정렬" type="is-light" @click="active_sort=true"  v-on:mouseover="onSort=true" v-on:mouseleave="onSort=false"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_sort==true" >
                                <b-tooltip label="코알라님의 '정렬' 영역은 중급 레벨입니다.">
                                    <b-button label="정렬" type="is-dark" @click="active_sort=false"  v-on:mouseover="onSort=true" v-on:mouseleave="onSort=false"/>
                                </b-tooltip>
                            </template>
                            
                            <template v-if="active_tree==false" >
                                <b-tooltip label="코알라님의 '트리' 영역은 중급 레벨입니다.">
                                    <b-button label="트리" type="is-light" @click="active_tree=true" v-on:mouseover="onTree=true" v-on:mouseleave="onTree=false"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_tree==true" >
                                <b-tooltip label="코알라님의 '트리' 영역은 중급 레벨입니다.">
                                    <b-button label="트리" type="is-dark" @click="active_tree=false" v-on:mouseover="onTree=true" v-on:mouseleave="onTree=false"/>
                                </b-tooltip>
                            </template>

                            <template v-if="active_dfs==false" >
                                <b-tooltip label="코알라님의 'DFS' 영역은 중급 레벨입니다.">
                                    <b-button label="DFS" type="is-light" @click="active_dfs=true" v-on:mouseover="onDfs=true" v-on:mouseleave="onDfs=false"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_dfs==true" >
                                <b-tooltip label="코알라님의 'DFS' 영역은 중급 레벨입니다.">
                                    <b-button label="DFS" type="is-dark" @click="active_dfs=false" v-on:mouseover="onDfs=true" v-on:mouseleave="onDfs=false"/>
                                </b-tooltip>
                            </template>
                            
                            <template v-if="active_bfs==false" >
                                <b-tooltip label="코알라님의 'BFS' 영역은 중급 레벨입니다.">
                                    <b-button label="BFS" type="is-light" @click="active_bfs=true" v-on:mouseover="onBfs=true" v-on:mouseleave="onBfs=false"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_bfs==true" >
                                <b-tooltip label="코알라님의 'BFS' 영역은 중급 레벨입니다.">
                                    <b-button label="BFS" type="is-dark" @click="active_bfs=false" v-on:mouseover="onBfs=true" v-on:mouseleave="onBfs=false"/>
                                </b-tooltip>
                            </template>
                            
                            <template v-if="active_dp==false" >
                                <b-tooltip label="코알라님의 'DP' 영역은 중급 레벨입니다.">
                                    <b-button label="DP" type="is-light" @click="active_dp=true" v-on:mouseover="onDp=true" v-on:mouseleave="onDp=false"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_dp==true" >
                                <b-tooltip label="코알라님의 'DP' 영역은 중급 레벨입니다.">
                                    <b-button label="DP" type="is-dark" @click="active_dp=false" v-on:mouseover="onDp=true" v-on:mouseleave="onDp=false"/>
                                </b-tooltip>
                            </template>

                            <template v-if="active_hash==false" >
                                <b-tooltip label="코알라님의 '해쉬' 영역은 중급 레벨입니다.">
                                    <b-button label="해쉬" type="is-light" @click="active_hash=true" v-on:mouseover="onSort=true" v-on:mouseleave="onSort=false"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_hash==true" >
                                <b-tooltip label="코알라님의 '해쉬' 영역은 중급 레벨입니다.">
                                    <b-button label="해쉬" type="is-dark" @click="active_hash=false" v-on:mouseover="onSort=true" v-on:mouseleave="onSort=false"/>
                                </b-tooltip>
                            </template>

                            <template v-if="active_others==false" >
                                <b-tooltip label="나머지 영역을 필터합니다.">
                                    <b-button label="그 외" type="is-light" @click="active_others=true"/>
                                </b-tooltip>
                            </template>
                            <template v-else-if="active_others==true" >
                                <b-tooltip label="나머지 영역을 필터합니다.">
                                    <b-button label="그 외" type="is-dark" @click="active_others=false"/>
                                </b-tooltip>
                            </template>

                        </section>
                        </div>
                </div>
                
               
            </div>
            <div class="column is-half" style="" >
                <div style="margin-right: 1em;margin: 0em 2em;background-color:#FFFFFF;">
                    <p><b>실력 지표 한눈에 보기</b></p>
                    
                    <template v-if="onString==true" >
                        <img  src="@/assets/s1.png" style="width:800;height:350px"/>
                        <p>코알라님은 <b>문자열 알고리즘</b> 관련해 <b>상위 19%</b>에 위치해 있습니다. </p>
                    </template>
                    <template v-else-if="onArray==true" >
                        <img  src="@/assets/s2.png" style="width:800;height:350px"/>
                        <p>코알라님은 <b>배열 알고리즘</b> 관련해 <b>상위 43%</b>에 위치해 있습니다. </p>
                    </template>
                    <template v-else-if="onGreedy==true" >
                        <img  src="@/assets/s3.png" style="width:800;height:350px"/>
                        <p>코알라님은 <b>탐욕 알고리즘</b> 관련해 <b>상위 68%</b>에 위치해 있습니다. </p>
                    </template>
                    <template v-else-if="onMath==true" >
                        <img  src="@/assets/s4.png" style="width:800;height:350px"/>
                        <p>코알라님은 <b>수학 알고리즘</b> 관련해 <b>상위 52%</b>에 위치해 있습니다. </p>
                    </template>
                    <template v-else-if="onSort==true" >
                        <img  src="@/assets/s5.png" style="width:800;height:350px"/>
                        <p>코알라님은 <b>정렬 알고리즘</b> 관련해 <b>상위 39%</b>에 위치해 있습니다. </p>
                    </template>
                    <template v-else-if="onTree==true" >
                        <img  src="@/assets/s1.png" style="width:800;height:350px"/>
                        <p>코알라님은 <b>트리 알고리즘</b> 관련해 <b>상위 17%</b>에 위치해 있습니다. </p>
                    </template>
                    <template v-else-if="onDfs==true" >
                        <img  src="@/assets/s2.png" style="width:800;height:350px"/>
                        <p>코알라님은 <b>깊이 우선 탐색 알고리즘</b> 관련해 <b>상위 45%</b>에 위치해 있습니다. </p>
                    </template>
                    <template v-else-if="onBfs==true" >
                        <img  src="@/assets/s3.png" style="width:800;height:350px"/>
                        <p>코알라님은 <b>넓이 우선 탐색 알고리즘</b> 관련해 <b>상위 65%</b>에 위치해 있습니다. </p>
                    </template>
                    <template v-else-if="onHash==true" >
                        <img  src="@/assets/s4.png" style="width:800;height:350px"/>
                        <p>코알라님은 <b>해쉬 알고리즘</b> 관련해 <b>상위 55%</b>에 위치해 있습니다. </p>
                    </template>
                    <template v-else >
                        <radar-chart style="width:800;height:350px"/>
                    </template>
                    
                </div>
            </div> 
        </div>
    </div>
   



    <div style="height: 30px;"></div>
    <div style="background-color:#F0F0F0">
        <p style="font-size: 30px; padding-top: 10px;padding-left: 30px;text-align: left;"> AI 추천 강의 </p>
        <p style="font-size: 17px;padding-top: 10px; padding-left: 50px;text-align: left;font-style: italic;">사용자와 유사한 이용자를 분석하여 가장 학습률이 뛰어난 컨텐츠를 제공합니다.</p>
        <div class="columns" style="margin-top: 15px">
            <div class="column is-third"  v-on:mouseover="mouse_over=true" v-on:mouseleave="mouse_over=false" >
                <div>
                    <p><b>객체 지향 알아보기</b></p>
                    <img src="@/assets/lecture1.png" />
                    <p v-show="mouse_over"> <b>사용자와 유사한 이용자의 87%가 약 92% 수강률로 해당 영상을 시청했습니다.</b></p>

                </div>
                
            </div>
            <div class="column is-third"  v-on:mouseover="mouse_over1=true" v-on:mouseleave="mouse_over1=false" >
                <div>
                    <p><b>자료구조와 알고리즘 </b></p>
                    <img src="@/assets/lecture2.png" />
                    <p v-show="mouse_over1"> <b>사용자와 유사한 이용자의 75%가 약 84% 수강률로 해당 영상을 시청했습니다.</b></p>
                </div>
            </div>
            <div class="column is-third" v-on:mouseover="mouse_over2=true" v-on:mouseleave="mouse_over2=false">
                <div>
                    <p><b>알고리즘과 데이터 </b></p>
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
                <p><b>KMP 알고리즘</b></p>
                <img src="@/assets/1.png" />
            </div>
            <div class="column is-one-quarter" >
                <p><b>코딩 테스트 첫 걸음</b></p>
                <img src="@/assets/2.png" />
            </div>
            <div class="column is-one-quarter" >
                <p><b>자료구조 알고리즘 </b></p>
                <img src="@/assets/3.png" />
            </div>
            <div class="column is-one-quarter" >
                <p><b>그리디 알고리즘 </b></p>
                <img src="@/assets/4.png" />
            </div>
        </div>
        
        <div class="columns">
            <div class="column is-one-quarter" >
                <p><b>깊이 우선 탐색</b></p>
                <img src="@/assets/5.png" />
            </div>
            <div class="column is-one-quarter" >
                <p><b>정렬 알고리즘 </b></p>
                <img src="@/assets/6.png" />
            </div>
            <div class="column is-one-quarter" >
                <p><b>C 언어 </b></p>
                <img src="@/assets/7.png" />
            </div>
            <div class="column is-one-quarter" >
                <p><b>파이썬</b></p>
                <img src="@/assets/8.png" />
            </div>
        </div>
        <div class="columns">
            <div class="column is-one-quarter" >
                <p><b>최단 경로 알고리즘</b></p>
                <img src="@/assets/9.png" />
            </div>
            <div class="column is-one-quarter" >
                <p><b>그리디 알고리즘 </b></p>
                <img src="@/assets/10.png" />
            </div>
            <div class="column is-one-quarter" >
                <p><b>그리디 알고리즘2 </b></p>
                <img src="@/assets/11.png" />
            </div>
            <div class="column is-one-quarter" >
                <p><b>정렬 알고리즘2 </b></p>
                <img src="@/assets/12.png" />
            </div>
        </div>
        

    </div>





    </section>
</div>
    
</template>

<script>
import NavbarView from "../components/navbarView.vue";
import RadarChart from "../components/RadarChartView.vue";


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
        isTag1Active: true,
        /* 알고리즘 선택 활성 데이터 */
        active_string: false,
        active_array: false,
        active_greedy: false,
        active_math: false,
        active_sort: false,
        active_tree: false,
        active_dfs: false,
        active_bfs: false,
        active_hash: false,
        active_others: false,
        
        onArray: false,
        onString: false,
        onGreedy: false,
        onMath: false,
        onSort: false,
        onTree: false,
        onDfs: false,
        onBfs: false,
        onHash: false,
        
        chartData: {
        labels: [ '1','1.5', '2','2.5', '3 (you are here!)','3.5','4','4.5','5' ],
        datasets: [ {
            label: "사용자 분포",
            backgroundColor: '#f87979',
            
            data: [4,15,21,32,30,11,5,3,1] 
             
             
             } ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: '%'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  components: {
    NavbarView,
    RadarChart
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
        },
        test(){
            alert("aaa");
        }
    }
}

</script>

