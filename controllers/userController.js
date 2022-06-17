const { body, validationResult } = require('express-validator');

module.exports.registerValidators = [
    body("name").not().isEmpty().trim().withMessage("Name is Required"),
    body("email").not().isEmpty().trim().withMessage("Email is Required"),
    body("password").isLength({min: 6}).withMessage("Password minimum six chars long"),
];

module.exports.register = (req, res) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.json(errors.array())
    } else {
        res.json('You have register successfully');
    }
}