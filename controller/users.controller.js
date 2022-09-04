let users = require("./../users.json");

// 1.Get all data from user.josn 
module.exports.getAllUsers = (req, res) => {
res.send(users)
}
