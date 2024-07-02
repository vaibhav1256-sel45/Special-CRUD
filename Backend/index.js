const express=require('express')
const cors=require('cors')

const router=require('./Routers/Route.js')
const cookieParser=require('cookie-parser')


const bodyparser=require('body-parser')
require('./Connection.js')
const app=express();

app.use(cors({credentials:true,origin:"http://localhost:5173"}))

app.use(express.json())

app.use(express.urlencoded({ extended: false }))
app.use(express.static("public"))
app.use(cookieParser());


app.use('/users',router)

app.listen(8000,()=>{
    console.log(`Server running at 8000 port`);
})