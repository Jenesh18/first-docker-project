const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.json([
        {
            name:'jenesh',
            age:20
        },
        {
            name:'test1',
            age:25
        },
        {
            name:'test2',
            age:28
        }
    ])
});

app.listen(5000,()=>{
    console.log("app is running on port 5000")
})