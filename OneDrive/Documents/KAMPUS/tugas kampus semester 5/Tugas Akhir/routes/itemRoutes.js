const express = require('express');
const itemController = require('../controllers/itemController');
const { validateRequest } = require('../middlewares/validateRequest');

const router = express.Router();

router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
router.post('/', validateRequest, itemController.createItem);
router.put('/:id', validateRequest, itemController.updateItem);
router.delete('/:id', itemController.deleteItem);

module.exports = router;
