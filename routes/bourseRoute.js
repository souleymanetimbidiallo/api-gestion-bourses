var express = require('express');
var router = express.Router();

var bourse_controller = require('../controllers/bourseController');
router.get('/', bourse_controller.getAllBourses);
router.post('/bourses', bourse_controller.createBourse);
router.get('/bourses', bourse_controller.getAllBourses);
router.get('/bourses/:id', bourse_controller.getOneBourse);
router.put('/bourses/:id', bourse_controller.updateBourse);
router.delete('/bourses/:id', bourse_controller.deleteBourse);

module.exports = router;