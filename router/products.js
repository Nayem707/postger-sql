const express = require('express');
const router = express.Router();

const {
  allProducts,
  getSingleProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require('../controller/products');

router.route('/').get(allProducts).post(createProducts);

router
  .route('/:id')
  .get(getSingleProducts)
  .patch(updateProducts)
  .delete(deleteProducts);

module.exports = router;
