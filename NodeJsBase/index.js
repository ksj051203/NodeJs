const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
app.get('/user/:id', (req, res) => {
    // const q = req.params
    // console.log(q)
    const q = req.query
    console.log(q)


    res.json({'userid' : q.name})
})
//get은 한마디로 주소창 생각하면 됨
//:을 쓰고 변수명을 쓰면 params로 넘어감
//query, params를 사용 가능


app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})