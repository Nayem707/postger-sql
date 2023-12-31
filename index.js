const express = require('express');
require('dotenv').config();
const app = express();
const productRouter = require('./router/products');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.send('hello');
});

// app.get('*', (req, res) => {
//   return res.send('route dose not exist!');
// });

app.use('/products', productRouter);

const port = process.env.PORT || 8000;
app.listen(port, console.log(`http://localhost:${port}`));
