const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

router.get('/' , posts.index);
router.get('/:id' , posts.show);
router.post('/' , posts.store);
router.put('/:id' , posts.update);
router.patch('/:id' , posts.modify);
router.delete('/:id' , posts.destroy);

module.exports = router


