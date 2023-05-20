// exports all module in modules folder
module.exports = {
    createAuthToken:require('./createAuthToken'),
    uniqueniss:require('./uniqueniss'),
    getUser:require('./getUserByEmail'),
    generateRandNum:require('./generateRandomNumber'),
    getUserByVerifCode:require('./getUserByverifCode'),
    getUserById:require('./getUserById'),
    upload:require('./uploadImage'),
    getUrlImage:require('./getImage'),
    oneHourLater:require('./oneHourLater'),
}