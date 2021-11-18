const express = require('express');
const loginRouter = express.Router();
const { UserModel } = require('../../Database/mongodb');
const log = require('../Controllers/login');

loginRouter.post('/signup', log.signUp );

loginRouter.post('/login', log.login)

loginRouter.get('/session', log.session);

loginRouter.get('/logout', log.logout)

module.exports = loginRouter;