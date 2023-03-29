var express = require('express');
var router = express.Router();
const multer = require('../middlewares/multer-config');


var userController = require('../controllers/userController');

router.get('/users', userController.users);
router.post('/signup', multer, userController.signup);
router.post('/login', userController.login);
router.get('/users/:id', userController.user_detail);
router.put('/users/:id', multer, userController.user_update);
router.delete('/users/:id', userController.user_delete);

module.exports = router;