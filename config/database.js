const mongoose = require('mongoose')

let db = mongoose.connect('mongodb+srv://ahmed1372004:5hiilnrVCF9sNpZ9@cluster0.2orix.mongodb.net/event-app?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true } ,(err)=> {

    if (err) {
        console.log(err)
    } else {
        console.log('connected to db succcesfuly...')
    }
})
