const mongoose = require("mongoose");

//สร้างตัวแปร UserSchema ที่ใช้ mongoose.Schema เป็น constructor ของ Mongoose เพื่อระบุโครงสร้างของข้อมูล User.
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: {
            type: String,
            require: true,
            min:4,
            unique:true,
        },
        password: {
            type: String,
            require: true,
        }
    })
);

module.exports = User