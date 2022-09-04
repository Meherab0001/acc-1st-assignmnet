const express = require('express');
const usersControlers = require('../controller/users.controller');
const router = express.Router();

router.get(('/user'),usersControlers.getAllUsers)
router.get(('/random'),usersControlers.getRandomUser)
router.post(('/save'),usersControlers.saveAuser)
router.patch(('/update/:id'),usersControlers.updateAuser)
router.delete(('/delete/:id'),usersControlers.deleteAuser)

module.exports = router;