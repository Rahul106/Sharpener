const express = require('express');
const router = express.Router();

router.get('/index', (req, res, next) => {
    res.send('<h1>Website not find Use Correct Link</h1>');
});


module.exports = router;