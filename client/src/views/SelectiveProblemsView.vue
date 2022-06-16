<template>
  <div class="sub">
    <section style="padding-left: 200px; padding-right: 200px">
      <navbar-view />
      <p class="panel-tabs">
        <a href="/select"> 강의 </a>
        <a class="is-active"> 문제 </a>
      </p>
      <div
        style="
          background-color: #f0f0f0;
          padding-left: 5px;
          padding-bottom: 25px;
        ">
        <div class="columns" style="padding-top: 15px; margin-top: 2em">
          <div class="column is-half" style="padding-top: 12px">
            <div style="background-color: #ffffff; margin: 0em 2em">
              <div style="margin-top: 2em">
                <p><b>난이도 선택</b></p>
                <b-dropdown aria-role="list" style="margin-top: 1em">
                  <template v-if="difficulty == 'low'" #trigger>
                    <b-button
                      label="하급"
                      type="is-info"
                      :icon-right="active ? 'menu-up' : 'menu-down'" />
                  </template>
                  <template v-else-if="difficulty == 'medium'" #trigger>
                    <b-button
                      label="중급"
                      type="is-info"
                      :icon-right="active ? 'menu-up' : 'menu-down'" />
                  </template>
                  <template v-else-if="difficulty == 'low_high'" #trigger>
                    <b-button
                      label="상급"
                      type="is-info"
                      :icon-right="active ? 'menu-up' : 'menu-down'" />
                  </template>
                  <template v-else-if="difficulty == 'high'" #trigger>
                    <b-button
                      label="최상급"
                      type="is-info"
                      :icon-right="active ? 'menu-up' : 'menu-down'" />
                  </template>
                  <b-dropdown-item aria-role="listitem" @click="active_high()"
                    ><b>최상급</b></b-dropdown-item
                  >
                  <b-dropdown-item
                    aria-role="listitem"
                    @click="active_lowHigh()"
                    ><b>상급</b></b-dropdown-item
                  >
                  <b-dropdown-item aria-role="listitem" @click="active_medium()"
                    ><b>중급</b></b-dropdown-item
                  >
                  <b-dropdown-item aria-role="listitem" @click="active_low()"
                    ><b>하급</b></b-dropdown-item
                  >
                </b-dropdown>
              </div>
              <div style="margin-top: 1em; background-color: #ffffff">
                <template v-if="difficulty == 'low'">
                  <div>
                    <p>
                      하급 레벨은 <b>상위 70% ~ 90% </b>사용자에게 적합한 문제를
                      제공합니다.
                    </p>
                  </div>
                </template>
                <template v-else-if="difficulty == 'medium'">
                  <div>
                    <p>
                      중급 레벨은 <b>상위 30% ~ 70% </b>사용자에게 적합한 문제를
                      제공합니다.
                    </p>
                  </div>
                </template>
                <template v-else-if="difficulty == 'low_high'">
                  <div>
                    <p>
                      상급 레벨은 <b>상위 10% ~ 30% </b> 사용자에게 적합한
                      문제를 제공합니다.
                    </p>
                  </div>
                </template>
                <template v-else-if="difficulty == 'high'">
                  <div>
                    <p>
                      최상급 레벨은 <b>상위 10% </b> 사용자에게 적합한 문제를
                      제공합니다.
                    </p>
                  </div>
                </template>
              </div>
            </div>
            <div style="margin-top: 5em">
              <div
                style="
                  background-color: #ffffff;
                  margin: 0em 2em;
                  padding: 1em 2em;
                ">
                <p><b>알고리즘 선택</b></p>
                <section class="b-tooltips" style="margin-top: 1em">
                  <template v-if="active_string == false">
                    <b-tooltip
                      label="코알라님의 '문자열' 영역은 중급 레벨입니다.">
                      <b-button
                        label="문자열"
                        type="is-light"
                        @click="active_string = true"
                        v-on:mouseover="onString = true"
                        v-on:mouseleave="onString = false" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_string == true">
                    <b-tooltip
                      label="코알라님의 '문자열' 영역은 중급 레벨입니다.">
                      <b-button
                        label="문자열"
                        type="is-dark"
                        @click="active_string = false"
                        v-on:mouseover="onString = true"
                        v-on:mouseleave="onString = false" />
                    </b-tooltip>
                  </template>

                  <template v-if="active_array == false">
                    <b-tooltip
                      label="코알라님의 '배열' 영역은 중급 레벨입니다.">
                      <b-button
                        label="배열"
                        type="is-light"
                        @click="active_array = true"
                        v-on:mouseover="onArray = true"
                        v-on:mouseleave="onArray = false" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_array == true">
                    <b-tooltip
                      label="코알라님의 '배열' 영역은 중급 레벨입니다.">
                      <b-button
                        label="배열"
                        type="is-dark"
                        @click="active_array = false"
                        v-on:mouseover="onArray = true"
                        v-on:mouseleave="onArray = false" />
                    </b-tooltip>
                  </template>

                  <template v-if="active_greedy == false">
                    <b-tooltip
                      label="코알라님의 '그리디' 영역은 중급 레벨입니다.">
                      <b-button
                        label="그리디"
                        type="is-light"
                        @click="active_greedy = true"
                        v-on:mouseover="onGreedy = true"
                        v-on:mouseleave="onGreedy = false" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_greedy == true">
                    <b-tooltip
                      label="코알라님의 '그리디' 영역은 중급 레벨입니다.">
                      <b-button
                        label="그리디"
                        type="is-dark"
                        @click="active_greedy = false"
                        v-on:mouseover="onGreedy = true"
                        v-on:mouseleave="onGreedy = false" />
                    </b-tooltip>
                  </template>

                  <template v-if="active_math == false">
                    <b-tooltip
                      label="코알라님의 '수학' 영역은 중급 레벨입니다.">
                      <b-button
                        label="수학"
                        type="is-light"
                        @click="active_math = true"
                        v-on:mouseover="onMath = true"
                        v-on:mouseleave="onMath = false" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_math == true">
                    <b-tooltip
                      label="코알라님의 '수학' 영역은 중급 레벨입니다.">
                      <b-button
                        label="수학"
                        type="is-dark"
                        @click="active_math = false"
                        v-on:mouseover="onMath = true"
                        v-on:mouseleave="onMath = false" />
                    </b-tooltip>
                  </template>

                  <template v-if="active_sort == false">
                    <b-tooltip
                      label="코알라님의 '정렬' 영역은 중급 레벨입니다.">
                      <b-button
                        label="정렬"
                        type="is-light"
                        @click="active_sort = true"
                        v-on:mouseover="onSort = true"
                        v-on:mouseleave="onSort = false" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_sort == true">
                    <b-tooltip
                      label="코알라님의 '정렬' 영역은 중급 레벨입니다.">
                      <b-button
                        label="정렬"
                        type="is-dark"
                        @click="active_sort = false"
                        v-on:mouseover="onSort = true"
                        v-on:mouseleave="onSort = false" />
                    </b-tooltip>
                  </template>

                  <template v-if="active_tree == false">
                    <b-tooltip
                      label="코알라님의 '트리' 영역은 중급 레벨입니다.">
                      <b-button
                        label="트리"
                        type="is-light"
                        @click="active_tree = true"
                        v-on:mouseover="onTree = true"
                        v-on:mouseleave="onTree = false" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_tree == true">
                    <b-tooltip
                      label="코알라님의 '트리' 영역은 중급 레벨입니다.">
                      <b-button
                        label="트리"
                        type="is-dark"
                        @click="active_tree = false"
                        v-on:mouseover="onTree = true"
                        v-on:mouseleave="onTree = false" />
                    </b-tooltip>
                  </template>

                  <template v-if="active_dfs == false">
                    <b-tooltip label="코알라님의 'DFS' 영역은 중급 레벨입니다.">
                      <b-button
                        label="DFS"
                        type="is-light"
                        @click="active_dfs = true"
                        v-on:mouseover="onDfs = true"
                        v-on:mouseleave="onDfs = false" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_dfs == true">
                    <b-tooltip label="코알라님의 'DFS' 영역은 중급 레벨입니다.">
                      <b-button
                        label="DFS"
                        type="is-dark"
                        @click="active_dfs = false"
                        v-on:mouseover="onDfs = true"
                        v-on:mouseleave="onDfs = false" />
                    </b-tooltip>
                  </template>

                  <template v-if="active_bfs == false">
                    <b-tooltip label="코알라님의 'BFS' 영역은 중급 레벨입니다.">
                      <b-button
                        label="BFS"
                        type="is-light"
                        @click="active_bfs = true"
                        v-on:mouseover="onBfs = true"
                        v-on:mouseleave="onBfs = false" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_bfs == true">
                    <b-tooltip label="코알라님의 'BFS' 영역은 중급 레벨입니다.">
                      <b-button
                        label="BFS"
                        type="is-dark"
                        @click="active_bfs = false"
                        v-on:mouseover="onBfs = true"
                        v-on:mouseleave="onBfs = false" />
                    </b-tooltip>
                  </template>

                  <template v-if="active_dp == false">
                    <b-tooltip label="코알라님의 'DP' 영역은 중급 레벨입니다.">
                      <b-button
                        label="DP"
                        type="is-light"
                        @click="active_dp = true"
                        v-on:mouseover="onDp = true"
                        v-on:mouseleave="onDp = false" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_dp == true">
                    <b-tooltip label="코알라님의 'DP' 영역은 중급 레벨입니다.">
                      <b-button
                        label="DP"
                        type="is-dark"
                        @click="active_dp = false"
                        v-on:mouseover="onDp = true"
                        v-on:mouseleave="onDp = false" />
                    </b-tooltip>
                  </template>

                  <template v-if="active_hash == false">
                    <b-tooltip
                      label="코알라님의 '해쉬' 영역은 중급 레벨입니다.">
                      <b-button
                        label="해쉬"
                        type="is-light"
                        @click="active_hash = true"
                        v-on:mouseover="onSort = true"
                        v-on:mouseleave="onSort = false" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_hash == true">
                    <b-tooltip
                      label="코알라님의 '해쉬' 영역은 중급 레벨입니다.">
                      <b-button
                        label="해쉬"
                        type="is-dark"
                        @click="active_hash = false"
                        v-on:mouseover="onSort = true"
                        v-on:mouseleave="onSort = false" />
                    </b-tooltip>
                  </template>

                  <template v-if="active_others == false">
                    <b-tooltip label="나머지 영역을 필터합니다.">
                      <b-button
                        label="그 외"
                        type="is-light"
                        @click="active_others = true" />
                    </b-tooltip>
                  </template>
                  <template v-else-if="active_others == true">
                    <b-tooltip label="나머지 영역을 필터합니다.">
                      <b-button
                        label="그 외"
                        type="is-dark"
                        @click="active_others = false" />
                    </b-tooltip>
                  </template>
                </section>
              </div>
            </div>
          </div>
          <div class="column is-half" style="">
            <div
              style="
                margin-right: 1em;
                margin: 0em 2em;
                background-color: #ffffff;
              ">
              <p><b>실력 지표 한눈에 보기</b></p>

              <template v-if="onString == true">
                <img src="@/assets/s1.png" style="width: 800; height: 350px" />
                <p>
                  코알라님은 <b>문자열 알고리즘</b> 관련해 <b>상위 19%</b>에
                  위치해 있습니다.
                </p>
              </template>
              <template v-else-if="onArray == true">
                <img src="@/assets/s2.png" style="width: 800; height: 350px" />
                <p>
                  코알라님은 <b>배열 알고리즘</b> 관련해 <b>상위 43%</b>에
                  위치해 있습니다.
                </p>
              </template>
              <template v-else-if="onGreedy == true">
                <img src="@/assets/s3.png" style="width: 800; height: 350px" />
                <p>
                  코알라님은 <b>탐욕 알고리즘</b> 관련해 <b>상위 68%</b>에
                  위치해 있습니다.
                </p>
              </template>
              <template v-else-if="onMath == true">
                <img src="@/assets/s4.png" style="width: 800; height: 350px" />
                <p>
                  코알라님은 <b>수학 알고리즘</b> 관련해 <b>상위 52%</b>에
                  위치해 있습니다.
                </p>
              </template>
              <template v-else-if="onSort == true">
                <img src="@/assets/s5.png" style="width: 800; height: 350px" />
                <p>
                  코알라님은 <b>정렬 알고리즘</b> 관련해 <b>상위 39%</b>에
                  위치해 있습니다.
                </p>
              </template>
              <template v-else-if="onTree == true">
                <img src="@/assets/s1.png" style="width: 800; height: 350px" />
                <p>
                  코알라님은 <b>트리 알고리즘</b> 관련해 <b>상위 17%</b>에
                  위치해 있습니다.
                </p>
              </template>
              <template v-else-if="onDfs == true">
                <img src="@/assets/s2.png" style="width: 800; height: 350px" />
                <p>
                  코알라님은 <b>깊이 우선 탐색 알고리즘</b> 관련해
                  <b>상위 45%</b>에 위치해 있습니다.
                </p>
              </template>
              <template v-else-if="onBfs == true">
                <img src="@/assets/s3.png" style="width: 800; height: 350px" />
                <p>
                  코알라님은 <b>넓이 우선 탐색 알고리즘</b> 관련해
                  <b>상위 65%</b>에 위치해 있습니다.
                </p>
              </template>
              <template v-else-if="onHash == true">
                <img src="@/assets/s4.png" style="width: 800; height: 350px" />
                <p>
                  코알라님은 <b>해쉬 알고리즘</b> 관련해 <b>상위 55%</b>에
                  위치해 있습니다.
                </p>
              </template>
              <template v-else>
                <radar-chart style="width: 800; height: 350px" />
              </template>
            </div>
          </div>
        </div>
      </div>

      <div style="height: 30px"></div>
      <div style="background-color: #f0f0f0">
        <p
          style="
            font-size: 30px;
            padding-top: 10px;
            padding-left: 30px;
            text-align: left;
          ">
          AI 추천 문제
        </p>
        <p
          style="
            font-size: 17px;
            padding-top: 10px;
            padding-left: 50px;
            text-align: left;
            font-style: italic;
          ">
          사용자와 유사한 이용자를 분석하여 가장 성장률이 뛰어난 컨텐츠를
          제공합니다.
        </p>
        <div class="columns" style="margin-top: 15px">
          <div class="column is-third" style="padding: 2em 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title">추천 문제</p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  1260 미로 탐색
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: DFS,BFS,Graph</p>
                <p>문제 난이도: 2.8</p>
                <p>풀이 소요 예상 시간: 45분</p>
                <p>유사한 레벨의 사용자 57%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-third" style="padding: 2em 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title">추천 문제</p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  2839 피보나치 함수
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: DP</p>
                <p>문제 난이도: 1.5</p>
                <p>풀이 소요 예상 시간: 20 분</p>
                <p>유사한 레벨의 사용자 84%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-third" style="padding: 2em 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title">추천 문제</p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  2263 트리 순회
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
      <div style="height: 70px"></div>
      <div style="background-color: #f0f0f0">
        <div class="columns">
          <div class="column is-one-quarter">
            <p
              style="
                font-size: 30px;
                padding-top: 10px;
                padding-left: 30px;
                text-align: left;
              ">
              모든 문제
            </p>
          </div>
          <div class="column is-half">
            <b-field>
              <b-input
                placeholder="찾고 싶은 문제 이름 또는 ID를 입력해 주세요."
                type="search"
                icon="magnify"
                icon-clickable
                @icon-click="searchIconClick">
              </b-input>
            </b-field>
          </div>
        </div>

        <div class="columns" style="margin-top: 15px">
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  5639 전화번호 목록
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: 문자열,트리,탐색</p>
                <p>문제 난이도: 3.2}</p>
                <p>풀이 소요 예상 시간: 50분</p>
                <p>유사한 레벨의 사용자 62%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  2231 스타트와 링크
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: 수학,그리디,배열</p>
                <p>문제 난이도: 2.4</p>
                <p>풀이 소요 예상 시간: 38분</p>
                <p>유사한 레벨의 사용자 67%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  9653 N-Queen
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: DP,그리디</p>
                <p>문제 난이도: 3.1</p>
                <p>풀이 소요 예상 시간: 45분</p>
                <p>유사한 레벨의 사용자 59%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  1182 부분 수열의 합
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
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  11724 연결요소의 개수
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: DFS,BFS,탐색</p>
                <p>문제 난이도: 4.3</p>
                <p>풀이 소요 예상 시간: 72분</p>
                <p>유사한 레벨의 사용자 37%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  5342 욕심쟁이 판다
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: 그리디,배열</p>
                <p>문제 난이도: 2.9</p>
                <p>풀이 소요 예상 시간: 36분</p>
                <p>유사한 레벨의 사용자 57%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  2468 영역 구하기
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: 그리디,배열,DFS,BFS</p>
                <p>문제 난이도: 2.4</p>
                <p>풀이 소요 예상 시간: 32분</p>
                <p>유사한 레벨의 사용자 65%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  7567 셀프 넘버
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
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  1010 다리놓기
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: DP,배열</p>
                <p>문제 난이도: 2.0</p>
                <p>풀이 소요 예상 시간: 30분</p>
                <p>유사한 레벨의 사용자 87%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  2839 설탕 배달
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: 정렬,그리디,DP</p>
                <p>문제 난이도: 3.7</p>
                <p>풀이 소요 예상 시간: 58분</p>
                <p>유사한 레벨의 사용자 37%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  12865 평범한 배낭
                  <!-- {{ todayProblems[2].title }} -->
                </a>
                <p>문제 유형: DP,배열</p>
                <p>문제 난이도: 3.0</p>
                <p>풀이 소요 예상 시간: 42분</p>
                <p>유사한 레벨의 사용자 53%가 푼 문제</p>
              </div>
            </article>
          </div>
          <div class="column is-quarter" style="padding: 3em">
            <article class="tile is-child box notification is-dark">
              <p class="subtitle tile-title"></p>
              <!-- 오늘의 문제 컨텐츠 -->
              <div class="content">
                <!-- 인덱스를 새로고침 할 때마다 다르게 뿌려주기.  float: left? -->
                <a href="" style="font-size: 1.5em">
                  3951 오르막 수
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
import RadarChart from "../components/RadarChartView.vue";

export default {
  name: "SelectiveContentsView",
  data() {
    return {
      language: "Python3",
      difficulty: "high",
      algorithm_topic: "문자열",
      algorithm_percent: "37%",
      mouse_over: false,
      mouse_over1: false,
      mouse_over2: false,

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
      problem: {
        number: 123,
        title: "aaa",
        difficulty: 1,
        tag: "bbb",
        expect_time: 1,
        ans_rate: 1
      }
    };
  },
  components: {
    NavbarView,
    RadarChart
  },
  methods: {
    active_high() {
      this.difficulty = "high";
    },
    active_medium() {
      this.difficulty = "medium";
    },
    active_low() {
      this.difficulty = "low";
    },
    active_lowHigh() {
      this.difficulty = "low_high";
    },
    setString() {
      this.algorithm_topic = "문자열";
      this.algorithm_percent = "37%";
    },
    setArray() {
      this.algorithm_topic = "배열";
      this.algorithm_percent = "62%";
    },
    setGreedy() {
      this.algorithm_topic = "그리디";
      this.algorithm_percent = "47%";
    },
    setMath() {
      this.algorithm_topic = "수학";
      this.algorithm_percent = "14%";
    },
    setSort() {
      this.algorithm_topic = "정렬";
      this.algorithm_percent = "36%";
    },
    setTree() {
      this.algorithm_topic = "트리";
      this.algorithm_percent = "62%";
    },
    setDfs() {
      this.algorithm_topic = "DFS";
      this.algorithm_percent = "48%";
    },
    setBfs() {
      this.algorithm_topic = "BFS";
      this.algorithm_percent = "17%";
    },
    setDP() {
      this.algorithm_topic = "다이나믹 프로그래밍";
      this.algorithm_percent = "39%";
    },
    setHash() {
      this.algorithm_topic = "해쉬 테이블";
      this.algorithm_percent = "40%";
    },
    mouseOver() {
      this.mouse_over = true;
    },
    mouseLeave() {
      this.mouse_over = false;
    }
  }
};
</script>
