const mongoose = require('mongoose');

//mongoose.set('debug',true);
mongoose.connect('mongodb://localhost:27017/collect_todo');
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
