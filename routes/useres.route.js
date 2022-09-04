const express = require('express');
const usersControlers = require('../controller/users.controller');
const router = express.Router();

router.get(('/user'),usersControlers.getAllUsers)


module.exports = router;