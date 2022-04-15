const express = require('express');
const router = express.Router();

/* GET posts index /posts. */
router.get('/', (req, res, next) => {
    res.send('/posts');
});

/* GET new post form */
router.get('/new', (req, res, next) => {
    res.send('/posts/new');
});
module.exports = router;