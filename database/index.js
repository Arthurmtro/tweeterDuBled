const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Arthurmtro:@Arthuro49110@prodloc.qt7ir.mongodb.net/tweeter?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then( () => {
    console.log("Connexion db OK !");
}).catch(err => {
    console.log(err);
})