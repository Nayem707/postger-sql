const { v4: uuidv4 } = require('uuid');
const pool = require('../db');

// * GET:://products ; get all products when hit the url
const allProducts = async (req, res) => {
  try {
    const products = await pool.query('SELECT * FROM product');
    res.status(200).json({ msg: 'Get All products!', data: products.rows });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// * GET:://products/:id ; get single product when hit the url
const getSingleProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await pool.query('SELECT * FROM product WHERE id=$1', [id]);

    res.status(200).json({ msg: `Get single products!`, data: product.rows });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//* POST::/products ; post a single product when hit the url
//CREATE-PRODUCT
const createProducts = async (req, res) => {
  try {
    const { name, img, price, title, description, catagory, amount, rating } =
      req.body;
    const id = uuidv4();

    //products insert into postger database
    const newProducts = await pool.query(
      'INSERT INTO product (id, name, img, price, title, description, catagory, amount, rating) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',
      [id, name, img, price, title, description, catagory, amount, rating]
    );

    res.status(201).json({
      msg: `Create a product!`,
      data: newProducts.rows,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//* DELETE::/products/:id ; delete a single product when hit the url
const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM product WHERE id=$1', [id]);

    res.status(200).json({ msg: `Deleted products!` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//* PUT:://products/:id ; update single product when hit the url
const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, img, price, title, description, catagory, amount, rating } =
      req.body;

    //products insert into postger database
    const newProducts = await pool.query(
      'UPDATE product SET name=$1, img=$2, price=$3, title=$4, description=$5, catagory=$6, amount=$7, rating=$8 WHERE id=$9 RETURNING *',
      [name, img, price, title, description, catagory, amount, rating, id]
    );

    res.status(200).json({
      msg: `update a products!`,
      data: newProducts.rows,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  allProducts,
  getSingleProducts,
  createProducts,
  deleteProducts,
  updateProducts,
};
