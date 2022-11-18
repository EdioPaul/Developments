const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const productsController = require('../controllers/productsController');

router.get('/list', productsController.listProduct); 

router.post('/', [
  check('product').isLength({min: 2}).withMessage("O nome precisa ter no mínimo 1 caractere."),
], productsController.createProduct);

router.put('/:id',[
  check('product').optional().isLength({min: 2}).withMessage("O nome precisa ter no mínimo 1 caractere."),
], productsController.updateProduct);

router.delete('/:id', productsController.deleteProduct);

module.exports = router;