const express = require('express');
const router = express.Router();

/* GET posts index /posts. */
router.get('/', (req, res, next) => {
    res.send('index posts');
});

/* GET new post form /posts/new */
router.get('/new', (req, res, next) => {
    res.send('retrieve post form');
});

/* POST /posts */
router.post('/', (req, res, next) => {
    res.send('create post');
});

/* GET show post form /posts/:id */
router.get('/:id', (req, res, next) => {
    const { id } = req.body;
    res.send(`Show post: /posts/${id}`);
});

/* GET post edit form /posts/:id/edit */
router.get('/:id/edit', (req, res, next) => {
    const { id } = req.body;
    res.send(`edit post: /posts/${id}/edit`);
});
/* PUT post form /posts/:id/ */
router.put('/:id', (req, res, next) => {
    const { id } = req.body;
    res.send(`Update Post: ${id}`);
});

/* DELETE show post form /posts/:id/ */
router.delete('/:id', (req, res, next) => {
    const { id } = req.body;
    res.send(`delete post: ${id}`);
});
module.exports = router;