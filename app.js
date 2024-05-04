const express=require("express")
const path=require("path")
const app=express()
app.use(express.static("./client/build"))
app.use('*',(req,res)=>{

  res.sendFile(path.resolve(__dirname,"client","build",'index.html'))
})
module.exports=app