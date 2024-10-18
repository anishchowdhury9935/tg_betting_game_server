const mongoose = require('mongoose');
const config = require('../../config');
// const host_url =config.db.mongoConnectionUrl;
const host_url = 'mongodb+srv://nomoonsolana:nomosol9935@cluster0.itrhg7m.mongodb.net/tg_betting_bot';
const connectToMongo = () => {
    mongoose.connect(host_url).then(() => {
        console.log('connected to mongoose ✅');
    }).catch(() => {
        console.log('error connecting to mongoose❌');
    })
}
module.exports = connectToMongo;