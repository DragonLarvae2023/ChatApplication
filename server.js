const express=require("express")
const http=require('http')
const app=require("./app")
const dotenv=require("dotenv")
const {Server} =require("socket.io")
dotenv.config({path:"./config.env"})
const server=http.createServer(app)
const io=new Server(server)
io.on("connection",function(socket){
  socket.join("room1")
  io.sockets.in("room1").emit('receiver',"this is the message we are sending to u")
  console.log("connected")
  socket.on("disconnect",()=>{
    console.log("disconnected")
  })
  const size=io.sockets.adapter.rooms.get("room1").size
  console.log(size)
})
server.listen(process.env.port,process.env.host,(err)=>{
  if(err)
  console.log(err)
  console.log(
    `server has been hosted on http://${process.env.host}:${process.env.port}`
  );
})