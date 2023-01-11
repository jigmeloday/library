const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        req.userData = jwt.verify(req.body.token, process.env.JWT_KEY);
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Unautharized'
        });
    }
};