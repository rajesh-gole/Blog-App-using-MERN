const app = require('express');
const router = app.Router();

const { register, registerValidators } = require('../controllers/userController');
router.post('/register',registerValidators, register);

module.exports = router;