let users = require("./../users.json");

// 1.Get all data from user.josn 
module.exports.getAllUsers = (req, res) => {
res.send(users)
}

//random user
module.exports.getRandomUser = (req, res) => {
    res.send(users[Math.floor(Math.random() * users.length)])
}

// signle user save
module.exports.saveAuser = (req, res) => {

    const data = req.body;
    const { id, gender, name, contact, address, photoUrl } = data;

    id && gender && name && contact && address && photoUrl ?
        users.push(data) && res.send(users)
        :
        res.send('Invalid data,plesse  input valid data')
}
