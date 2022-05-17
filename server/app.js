const express = require('express');
const app = express();
console.log(app.get('env'));

require('dotenv').config({ path: `mysql/.env.${app.get('env')}` });
const mysql = require('./mysql');

app.use(
    express.json({
        limit: '50mb'
    })
);

app.listen(3000, () => {
    console.log('서버가 포트 3000번으로 시작되었습니다.');
});
