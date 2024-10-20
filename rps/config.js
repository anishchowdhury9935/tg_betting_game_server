const devModeOn = false;

const config = {
    server: {
        port: 5010,
    },
    db: {
        mongoConnectionUrl_main: devModeOn ? false : 'mongodb+srv://nomoonsolana:nomosol9935@cluster0.itrhg7m.mongodb.net/tg_betting_bot',
        mongoConnectionUrl_dev: devModeOn ? 'mongodb://127.0.0.1:27017/tg_betting_bot' : false
    }
}

module.exports = config;