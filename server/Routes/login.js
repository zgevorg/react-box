const express = require('express'),
    jwt    = require('jsonwebtoken'),
    crud = require('../crud'),
    configs = require('../Configs/config');

const router = express.Router();

router.post('/', (req, res) => {
    let requestedUser = JSON.parse(req.query.data);
        getUserCB = (user) => {
        if(!user) {
            res.json({
                success: false,
                description: 'no such user found'
            });
        } else {
            if(crud.isPasswordsMatch(requestedUser.password, user.password)) {
                let payload = {email: user.email},
                    token = jwt.sign(payload, configs.jwtSecretKey);
                res.json({
                    success: true,
                    token: token,
                    name: user.name,
                    surname: user.surname
                });
            } else {
                res.json({
                    success: false,
                    description: 'Password did not match'
                });
            }
        }
    };
    crud.getUserByEmail(requestedUser.email, getUserCB);
});

module.exports = router;
