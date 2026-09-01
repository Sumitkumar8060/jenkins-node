const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("API is working fine sumit lets see if git action is working");

})


app.listen(5000,()=>{
    console.log("server is running on port 5000");
})