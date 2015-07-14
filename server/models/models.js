/**
 * Created by siddiqui on 13-07-2015.
 */
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    created_at: {type: Date, default: Date.now}
});

var postSchema = new mongoose.Schema({
    text: String,
    created_by: String,
    created_at: {type: Date, default: Date.now}
});

mongoose.model("User", userSchema);
mongoose.model("Post", postSchema);