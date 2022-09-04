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
        res.send('Invalid Data,Input valid data')
}


// Update a user
module.exports.updateAuser = (req, res) => {
    const reqId = req.params.id;
    const newData = req.body;
    const selected = users.find(user => user.id === Number(reqId));
    if (!selected) {
        res.send('User not Found!!')
    }
    else if (!newData) {
        res.send('Please provide Data!!')
    }
    else if (selected && newData) {
        const { id, name, gender, contact, address, photoUrl } = newData;
        id ? selected.id = id : selected.id = selected.id
        name ? selected.name = name : selected.name = selected.name
        gender ? selected.gender = gender : selected.gender = selected.gender
        contact ? selected.contact = contact : selected.contact = selected.contact
        address ? selected.address = address : selected.address = selected.address
        photoUrl ? selected.photoUrl = photoUrl : selected.photoUrl = selected.photoUrl
        res.send(selected)
    }
}
