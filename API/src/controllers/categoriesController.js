const { validationResult } = require('express-validator');
const repository = require('../repositories/categoryRepository');

exports.listCategory = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }
  
  try {
    await repository.listCategories();
    console.log(res)
    

  } catch (e) {
    res.status(500).send({message: 'Falha ao listar categorias!'});
  }
  
};


exports.createCategory = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }
  
  try {
    await repository.createCategory({
      category: req.body.category,
    });
    res.status(201).send({ message: 'Categoria cadastrada com sucesso!' });
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar a categoria!'});
  }
  
};

exports.updateCategory = async (req, res) => {
  const {errors} = validationResult(req);
  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }
  
  try {
    await repository.updateCategory(req.params.id, req.body);
    res.status(200).send({
      message: 'Categoria atualizada com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao atualizar a categoria!'});
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await repository.deleteCategory(req.params.id);
    res.status(200).send({
      message: 'Categoria removida com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao remover a categoria!'});
  }
};