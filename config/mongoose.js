const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mongopost:postpost@cluster0-zjuyi.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
});

module.exports = mongoose;