const { validationResult } = require('express-validator');
const repository = require('../repositories/productRepository');

exports.listProduct = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }
  
  try {
    await repository.listProducts({
      product: req.body.product,
    });
    res.status(201).send({ message: 'OK!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao listar produtos!'});
  }
  
};


exports.createProduct = async (req, res) => {
  const {errors} = validationResult(req);

  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }
  
  try {
    await repository.createProduct({
      product: req.body.product,
    });
    res.status(201).send({ message: 'Produto cadastrado com sucesso!' });
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar o produto!'});
  }
  
};

exports.updateProduct = async (req, res) => {
  const {errors} = validationResult(req);
  if(errors.length > 0) {
    return res.status(400).send({message: errors})
  }
  
  try {
    await repository.updateProduct(req.params.id, req.body);
    res.status(200).send({
      message: 'Produto atualizado com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao atualizar o produto!'});
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await repository.deleteProduct(req.params.id);
    res.status(200).send({
      message: 'Produto removido com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao remover o produto!.'});
  }
};