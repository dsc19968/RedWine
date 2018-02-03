var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var User = new Schema({
	username    :String,
	pwd         :String,
	create_date : { type: Date, default: Date.now }
});

var UserModel = mongoose.model("user",User);
module.exports = UserModel;

// db.users.insert({"username":"aaa","pwd":"123"})