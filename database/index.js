const mongoose = require('mongoose');
const env = require(`../environment/${process.env.NODE_ENV}`);

mongoose.connect(env.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("Connexion db OK !");
}).catch(err => {
    console.log(err);
})