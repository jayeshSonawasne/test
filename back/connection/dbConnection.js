const mongoose = require('mongoose');


const db = mongoose.connect(`mongodb+srv://iconnect:iconnect@cluster0.ybbzrlj.mongodb.net/`).then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log('error', err);
})

module.exports = db;