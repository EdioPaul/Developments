const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const categoriesController = require('../controllers/categoriesController');

router.get('/', categoriesController.listCategory );

router.post('/', [
  check('category').isLength({min: 1}).withMessage("O nome precisa ter no mínimo 1 caractere."),
], categoriesController.createCategory);

router.put('/:id',[
  check('category').optional().isLength({min: 1}).withMessage("O nome precisa ter no mínimo 1 caractere."),
], categoriesController.updateCategory);

router.delete('/:id', categoriesController.deleteCategory);

module.exports = router;