const { logError } = require('../utils');

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        logError('Not Authentificated', 401);
    }

    const token = authHeader.split(' ')[1];
    let decodedToken;

    try {
        decodedToken = jwt.verify(token, process.env.SECRET_TOKEN_KEY)
    } catch (err) {
        logError('Bad token', 401);
    }

    if (!decodedToken) {
        logError('Not Authentificated', 403);
    }

    req.userId = decodedToken.userId;
    next();
};