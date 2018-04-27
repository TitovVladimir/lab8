const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');

// Добавить продукт
router.post('/products', function (req, res) {
  Product.create(req.body).then(function (product) {
    res.send(product);
  });
});

// Добавить ревью
router.post('/reviews', function (req, res) {
  Review.create(req.body).then(function (review) {
    res.send(review);
  });
});

// Получить все продукты
router.get('/products', function (req, res) {
  Product.find({}).then(function (product) {
    res.send(product);
  });
});

// Продукт по ид
router.get('/products/:id', function (req, res) {
  Product.findById({_id: req.params.id}).then(function (product) {
    res.send(product);
  });
});

// Получить ревью по ид
router.get('/products/:id/reviews', function (req, res) {
  Review.find({productId: req.params.id}).then(function (review) {
    res.send(review);
  });
});

module.exports = router;
