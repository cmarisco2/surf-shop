const express = require('express');
const router = express.Router({mergeParams: true});

/* GET reviews index /post/:id/post/:id/reviews. */
router.get('/', (req, res, next) => {
    res.send('index reviews');
});

/* POST /post/:id/reviews */
router.post('/', (req, res, next) => {
    res.send('create post/reviews');
});

/* GET reviews edit form /post/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
    const { review_id } = req.body;
    res.send(`edit review: /posts/${review_id}/edit`);
});

/* PUT reviews form /post/:id/reviews/:review_id/ */
router.put('/:review_id', (req, res, next) => {
    const { review_id } = req.body;
    res.send(`Update review: ${review_id}`);
});

/* DELETE reviews form /post/:id/reviews/:review_id/ */
router.delete('/:review_id', (req, res, next) => {
    const { review_id } = req.body;
    res.send(`delete review: ${review_id}`);
});
module.exports = router;