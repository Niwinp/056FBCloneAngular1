//Code source on https://github.com/academind/node-restful-api-tutorial/blob/02-more-routes/api/routes/products.js
const express = require('express');
const router = express.Router();

// 200 means response status is successful - said in another utube
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /posts'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /posts'
    });
});

router.get('/:postId', (req, res, next) => {
    const id = req.params.postId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You posted a post',
            
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});



module.exports = router;