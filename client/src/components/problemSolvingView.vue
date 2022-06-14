<template>
<body>
 

  <div class="main theme">
  
    <div class="problem-nav" style="height:10%;text-align: left;" >
      <div class="columns is-variable is-1-mobile is-0-tablet is-2-desktop is-8-widescreen">
        <div class="column is-one-quarter">
          <br>  <p style="text-indent: 20px;font-size:25px"><b>{{topic}}</b></p>
        </div>
        <div class="column is-half">
        </div>
        <div class="column is-one-fifths">
        </div>
        
       
        <div class="column" style="padding-top:20px">
         
          <b-dropdown v-model="language" aria-role="list">
            <template v-if="language=='Go'" #trigger>
              <b-button
                label="Go"
                type="is-primary"
              />
            </template>
            <template v-else-if="language=='Python3'" #trigger>
              <b-button
                label="Python3"
                type="is-primary"
              />
            </template>
            <template v-else-if="language=='JavaScript'" #trigger>
              <b-button 
                label="JavaScript"
                type="is-primary"
                
              />
            </template>
            <b-dropdown-item :value="'Go'" aria-role="listitem" @click="active_go()" >
              <div class="media">
                <div class="media-content" >
                    <h3>Go</h3>
                </div>
              </div>
            </b-dropdown-item>
              <b-dropdown-item :value="'Python3'" aria-role="listitem" @click="active_python()">
              <div class="media">
                <div class="media-content">
                  <h3>Python3</h3>
                </div>
              </div>
            </b-dropdown-item>
            <b-dropdown-item :value="'JavaScript'" aria-role="listitem" @click="active_javaScript()">
              <div class="media">
                <div class="media-content">
                    <h3>JavaScript</h3>
                </div>
              </div>
            </b-dropdown-item>

        </b-dropdown>
        </div>
        <div class="column" style="padding-top:20px">
          <b-button type="is-danger" >Exit</b-button>
        </div>
      </div>
    </div>
    <div style="width:100%;height:1px;background-color: grey;"></div>

      
    <div class="contents" @mouseup="verticalMsup()" @mousemove="verticalMove">
      <div class="guide-section" :style="guideStyle">
        <h6 class="guide-section-title" style="padding:0 2em;text-align:left"><b>문제 설명</b></h6>
        <ProblemOne style="padding:0 2em"/>
      </div>
      <div class="gutter-vertical" @mousedown="verticalMsdwn()">
        <!-- <p> {{click}}</p>
        <p> {{counter}}</p> -->

      </div>
      <div class="run-section" :style="runStyle">
        <div class="editor-section" @mouseup="horizontalMsup()" @mousemove="horizontalMove">
          <h6 class="editor-section-title"><b>Solution.cpp </b></h6>
          <div class="editor-section-contents" :style="editorStyle">
            <textarea v-model="content" id="editor"></textarea>
          </div>
          <div class="gutter-horizontal"  @mousedown="horizontalMsdwn()"></div>
          <div class="result-section" :style="resultStyle">


            <!-- default State -->
            <div v-if="resultSection==='default'">
              <p><b>실행 결과는 여기에 표시됩니다.</b></p>
            </div>
            

            <div v-else-if="resultSection==='test'">
              <!-- test Case State -->
              <p style="font-size:xx-large; color:red">Wrong Answer</p>
              <!-- <p style="font-size:xx-large; color:green">Right Answer</p> -->
              <div class="test Input">
                <span style="font-size:x-large">Input : </span>
                <span style="width:100%; font-size:x-large;background-color: #F0F0FF">  {{testCaseInput}}  </span>
              </div>
              <div class="test Output">
                <span style=" font-size:x-large">Output : </span>
                <span style=" font-size:x-large;background-color: #F0F0FF">  {{testCaseOutput}}  </span>
              </div>
              <div class="test Expected">
                <span style="font-size:x-large">Expected : </span>
                <span style="font-size:x-large;background-color: #F0F0FF">  {{testCaseExpected}}  </span>
              </div>
            </div>
            

            <!-- Submit Case State - success-->
            <div v-else-if="resultSection==='submit'">
              <p style="font-size:xx-large; color:green">Success</p>
              <div style="margin-top:10px;font-style: oblique;font-size:medium">
                <span style="font-size:x-large">Runtime : </span>
                <span style="font-size:x-large">{{runtime}}</span>
                <span>으로 {{topic}} 문제에 대해 </span>
                <span style="font-size:x-large">{{runtimeP}}</span>
                <span> 의 {{language}} 제출 결과 통계 보다 빠릅니다.</span>
              </div>
              <div style="font-style: oblique;font-size:medium">
                <span style="font-size:x-large">Memory Usage : </span>
                <span style="font-size:x-large">{{memoryUse}}</span>
                <span>으로 {{topic}} 문제에 대해 </span>
                <span style="font-size:x-large">{{memoryUseP}}</span>
                <span> 의 {{language}} 제출 결과 통계 보다 빠릅니다.</span>
              </div>
            </div>
            
            
            <!-- Submit Case State - failed-->
            <!-- <p style="font-size:xx-large; color:red">Failed</p>
            <div class="Input">
              <div style="width:100%; float:left;font-size:x-large;background-color: #F0F0FF">  Input : {{testCaseInput}}  </div>
            </div>
            <div class="Output">
              <div style="margin-top:10px;width:100%; float:left;font-size:x-large;background-color: #F0F0FF">  Output : {{testCaseOutput}}  </div>
            </div>
            <div class="Expected">
              <div style="margin-top:10px;width:100%; float:left;font-size:x-large;background-color: #F0F0FF"> Expected : {{testCaseExpected}}  </div>
            </div> -->



          </div>
        </div>
      </div> 
    </div>

    <div class="bottom-section" >
      <div class="columns">
        <div class="column is-one-quarter">
          <div class="buttons">
            <b-button type="is-primary" inverted>질문하기</b-button>
            <b-button type="is-primary" inverted>코드 리뷰 보기</b-button>
          </div>
        </div>
        <div class="column is-half"></div>
        <div class="column is-one-quarter">
          <div class="buttons">
            <b-button type="is-primary" inverted>다른 사람 풀이보기</b-button>
            <b-button type="is-primary" inverted @click="result_default()" >초기화</b-button>
            <b-button type="is-primary" inverted @click="result_test()">실행</b-button>
            <b-button type="is-primary" inverted @click="result_submit()">제출</b-button>
          </div>
        </div>

          

      </div>
    </div>
  </div>

</body>
</template>

<script>
import ProblemOne from './Problem/ProblemOne.vue';
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/mode/javascript/javascript.js';
// import 'codemirror/mode/clike/clike.js'; // not working
import 'codemirror/mode/python/python.js';
import 'codemirror/mode/go/go.js';


export default {
  name: 'App',
  data(){
    return{
      topic : "신고 결과 받기",
      content: 'def solution(id_list, report, k):\n\tanswer = []\n\treturn answer\n',
      language: "Python3",
      verticalClick: false,
      horizontalClick: false,
      counter: 0,
      resultSection: "default",
      
      guideStyle:{
        width: 'calc(50% - 8px)'
      },
      runStyle:{
        width:'calc(50% - 8px)'
      },
      editorStyle:{
        height: '69%'
      },
      resultStyle:{
        height: '29%'
      },
      testCaseInput : [1,5,2,3,5,15,6],
      testCaseOutput : 3,
      testCaseExpected : 2,
      runtime : "251ms",
      runtimeP : "41%",
      memoryUse : "19.8MB",
      memoryUseP : "96.35%",

      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
  },
  components: {
    ProblemOne
  },
  mounted(){
    this.cm = CodeMirror.fromTextArea(document.getElementById('editor'),{
      lineNumbers: true,
      mode: 'python',
      theme: 'eclipse',
      direction: 'ltr',
    });
  },
  methods: {
    active_go(){
      // alert("Go");
      this.cm.setOption('mode','go');
      this.content = "func solution(id_list []string, report []string, k int) []int {\n\treturn []int{}\n}\n\n\n\n"
      this.cm.setOption('value',this.content);
    },
    active_python(){
      // alert("python");
      this.cm.setOption('mode','python')
      this.content = "def solution(id_list, report, k):\n\tanswer = []\n\treturn answer\n";
      this.cm.setOption('value',this.content);
    },
    active_javaScript(){
      // alert("javascript");
      this.cm.setOption('mode','javascript')
      this.content = "function solution(id_list, report, k) {\n\tvar answer = [];\n\treturn answer;\n}\n";
      this.cm.setOption('value',this.content);
    },
    result_default(){
      this.resultSection = 'default';
    }
    ,
    result_test(){
      this.resultSection = 'test';
    }
    ,result_submit(){
      this.resultSection = 'submit';
    }
    ,
    verticalMsdwn(){
      this.verticalClick = true;
    },
    verticalMsup(){
      this.verticalClick = false;
    },
    verticalMove(event){
      let mouseX = event.clientX;

      let halfGutterPercent = (8/this.windowWidth)*100+0.1;
      let widthPercent = (mouseX / this.windowWidth) * 100;

      if(this.verticalClick == true){
        
        this.guideStyle.width=(widthPercent-halfGutterPercent)+'%';
        this.runStyle.width=(100-widthPercent-halfGutterPercent) + '%';
      }
    },
    horizontalMsdwn(){
      
      this.horizontalClick = true;
      console.log("down");
    },
    horizontalMsup(){
      this.horizontalClick = false;
      console.log("up");
    },
    horizontalMove(event){
      let mouseY = event.clientY;
      console.log(mouseY);
      let halfGutterPercent = (8/this.windowHeight)*100+0.1;
      let heightPercent = (mouseY / this.windowHeight) * 100;
      if(this.horizontalClick == true){
        this.editorStyle.height=(heightPercent-halfGutterPercent)+'%';
        this.resultStyle.height=(100-heightPercent-halfGutterPercent) + '%';
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
html, body {
  height: 100%;
}
.main {
  height:100%;
  width:100%;
  
}
.theme {
  background-color: #F0F0F0;
}
.problem-nav{
  height:50%;
  width:100%;
}

.contents{
  height:80%;
  width:100%;
}
.guide-section{
  /* background-color:#666666; */
  /* --test-value: 50%; */
  width: calc(50% - 8px);
  height: 100%;
  display: inline-block;
  padding: 1em;
  overflow: scroll;
  text-align: left;
}
.guide-section-title{
  font-family: arial;
  font-size: 18px;
  margin: 1em 0px;
  text-align: center;
}
.gutter-vertical{
  width: 16px;
  height: 100%;
  background-image: url(../assets/gutter.png);
  display: inline-block;
}
.run-section{
  width: calc(50% - 8px);
  height: 100%;
  display: inline-block;
  
}
.editor-section{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.editor-section-title{
  font-size: 18px;
  margin: 1em 30px;
}
.editor-section-contents{
  width: 100%;
  height: 59%;
  overflow: scroll;
  top: 0;
  left: 0;
  text-align: left;
}
.gutter-horizontal{
  width: 100%;
  height: 16px;
  background-image: url(../assets/horizontal-gutter.png);
}
.result-section{
  height: 39%;
  background-color:LightGray;
}

.CodeMirror {
    font-family: monospace;
    height: 100%;
    color: black;
    direction: ltr;
}
.bottom-section{
  margin: 1em;
  height:auto;
  width:100%;
}


</style>
