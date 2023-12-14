const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const PORT = 4000;
const app = express();

//.env
require('dotenv').config()
const url = process.env.MONGODB_CONNECT_URL

//เป็นการกำหนด Promise library ที่ Mongoose จะใช้เป็น global.Promise เป็น Promise library เริ่มต้น Node.js
//จะใช้ในการจัดการกับ Promise ในการเรียกใช้ database จาก MongoDB ใน Node.js โดยสามารถใช้กับ Mongoose ได้เลย
//เพื่อให้ mongoose ใช้ promise ที่ตรงกับเวอร์ชั่นของ Node.js ที่กำลังทำงานอยู่ และรับค่า Promise จาก global scope
mongoose.Promise = global.Promise;
//การ connect กับ MongoDB โดยใช้ Mongoose ซึ่งเป็น ODM(Object Data Modeling)
//กำหนด useNewUrlParser และ useUnifiedTopology ให้เป็น true ซึ่งเป็น options ที่ใช้เพื่อกำหนดการเชื่อมต่อและการทำงานของ MongoDB
//ขณะที่ใช้ Mongoose ใน Node.js ช่วยให้การเชื่อมต่อกับ MongoDB รวดเร็วและมีประสิทธิภาพสูง
mongoose.connect(url, {
    dbName: 'mern-blog',
    //เป็นตัวบอกให้ Mongoose ใช้ URI ของ MongoDB ในรูปแบบ URL ในการเชื่อมต่อ แทนการใช้รูปแบบเดิมของการเชื่อมต่อ URI
    useNewUrlParser: true,
    //เป็นตัวบอกให้ Mongoose ใช้การเชื่อมต่อ MongoDB แบบ Unified Topology
    //ช่วยให้ Mongoose ใช้การเชื่อมต่อที่เป็นเวอร์ชันล่าสุดและแนะนำใน MongoDB, ซึ่งมีประสิทธิภาพและความเสถียรมากขึ้น
    useUnifiedTopology: true,
})
    //เมื่อเชื่อมต่อสำเร็จ จะทำการ log ว่า Successfully connect to MongoDB. และเรียกใช้ฟังก์ชัน initial เพื่อเริ่มต้นการตรวจสอบและสร้าง roles เริ่มต้น
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    //ถ้ามี error ในการเชื่อมต่อ จะทำการ log ว่า Connection error และจบกระบวนการด้วย process.exit
    .catch((error) => {
        console.log("Connection error", error)
        process.exit(); //เป็น method ใน Node.js ที่ใช้ในการสิ้นสุดการทำงาน
    })

//middleware
app.use(cors({ credentials: true, origin:"http://localhost:5173"}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('<h1>Hello Wellcome To MERN Stack Blog</h1>')
});

//User Register
const salt = bcrypt.genSaltSync(10)
app.post("/register",async (req,res)=>{
    //เป็นการ Destructuring Object
    const {username,password} = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc)
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
})

//User Login
const secret = process.env.SECRET
app.post("/login",async (req, res) => {
    //เป็นการ Destructuring Object
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username })
    const isMatchedPassword = bcrypt.compareSync(password, userDoc.password);
    if (isMatchedPassword) {
        //logged in
        jwt.sign({ username, id: userDoc }, secret, {}, (err, token)=>{
            if (err) throw err;
            res.cookie("token", token).json({
                id:userDoc.id,
                username,
                password,
            })
        })
    } else {
        res.status(400).json("wrong credentials")
    }
})

//logout
app.post("/logout",(req,res)=>{
    res.cookie.apply("token","").json("ok")
})

app.listen(PORT, () => {
    console.log("Server is runing on http://localhost:" + PORT);
});