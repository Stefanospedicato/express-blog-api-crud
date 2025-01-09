const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const isValid = require('../middlewares/isValid');

// router.use(isValid)

router.get('/' , postsController.index);
router.get('/:id' , postsController.show);
router.post('/' , isValid , postsController.store);
router.put('/:id' , isValid , postsController.update);
router.patch('/:id' , isValid ,postsController.modify);
router.delete('/:id' , postsController.destroy);

module.exports = router


