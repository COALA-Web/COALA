<template>
  <b-table :data="data" :columns="columns"></b-table>
</template>

<script>
export default {
  name: "RankTable",
  data() {
    return {
      data: [
        {
          problem_type: "그리디",
          solved_problem_cnt: "20",
          acc: "80%",
          level: "Silver 3"
        },
        {
          problem_type: "BFS",
          solved_problem_cnt: "41",
          acc: "78%",
          level: "Gold 4"
        },
        {
          problem_type: "DP",
          solved_problem_cnt: "22",
          acc: "86%",
          level: "Silver 2"
        },
        {
          problem_type: "정렬",
          solved_problem_cnt: "18",
          acc: "95%",
          level: "Gold 1"
        },
        {
          problem_type: "자료구조",
          solved_problem_cnt: "54",
          acc: "85%",
          level: "Gold 3"
        },
        {
          problem_type: "문자열",
          solved_problem_cnt: "40",
          acc: "87%",
          level: "Silver 4"
        },
        {
          problem_type: "구현",
          solved_problem_cnt: "25",
          acc: "90%",
          level: "Silver 2"
        },
        {
          problem_type: "정수론",
          solved_problem_cnt: "40",
          acc: "95%",
          level: "Bronze 2"
        },
        {
          problem_type: "기하학",
          solved_problem_cnt: "15",
          acc: "79%",
          level: "Silver 1"
        },
        {
          problem_type: "트리",
          solved_problem_cnt: "9",
          acc: "94%",
          level: "Silver 2"
        },
        {
          problem_type: "이분탐색",
          solved_problem_cnt: "3",
          acc: "88%",
          level: "Bronze 1"
        }
      ],
      columns: [
        {
          field: "problem_type",
          label: "문제 유형",
          width: "250px",
          centered: true
        },
        {
          field: "solved_problem_cnt",
          label: "푼 문제 수",
          width: "150px",
          numeric: true,
          centered: true
        },
        {
          field: "acc",
          label: "정확도",
          width: "100px",
          numeric: true,
          centered: true
        },
        {
          field: "level",
          label: "레벨",
          width: "250px",
          numeric: true,
          centered: true
        }
      ]
    };
  }
};
</script>
