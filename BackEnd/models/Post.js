const mongoose = require("mongoose");
//ประกาศตัวแปร PostSchema สำหรับเก็บรูปแบบข้อมูล
//การสร้างรูปแบบของข้อมูลใหม่ที่ใช้ mongoose.Schema เป็น constructor ของ Mongoose.
const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    cover: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
}, {
    timestamps: true
});

//การ exports โดยการใช้ mongoose และมี method  model ที่มีชื่อ Post และจะส่งข้อมูล PostSchema มา
module.exports = mongoose.model('Post', PostSchema)