const express = require('express');
const usersControlers = require('../controller/users.controller');
const router = express.Router();

router.get(('/user'),usersControlers.getAllUsers)
router.get(('/random'),usersControlers.getRandomUser)
router.post(('/save'),usersControlers.saveAuser)


module.exports = router;