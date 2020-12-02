const path = require("path");

module.exports = {
    dbUrl: 'mongodb+srv://Arthurmtro:@Arthuro49110@prodloc.qt7ir.mongodb.net/tweeter?retryWrites=true&w=majority',
    cert: path.join(__dirname, '../ssl/local.crt'),
    key: path.join(__dirname, '../ssl/local.key'),
    portHttp: 3000,
    portHttps: 3001
}