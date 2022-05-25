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
          rank: "Gold"
        },
        {
          problem_type: "BFS",
          solved_problem_cnt: "40",
          rank: "Silver"
        },
        {
          problem_type: "DP",
          solved_problem_cnt: "5",
          rank: "Bronze"
        }
      ],
      columns: [
        {
          field: "problem_type",
          label: "문제 유형",
          width: "400px",
          centered: true
        },
        {
          field: "solved_problem_cnt",
          label: "푼 문제 수",
          width: "100px",
          numeric: true,
          centered: true
        },
        {
          field: "rank",
          label: "문제 유형",
          centered: true
        }
      ]
    };
  }
};
</script>
