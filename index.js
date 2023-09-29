const express = require('express');
require('dotenv').config();
const app = express();
const productRouter = require('./router/products');
app.use(express.json());
// app.use(cors());

app.get('/', (req, res) => {
  return res.send('hello');
});

app.use('/products', productRouter);

const port = 8000;
app.listen(port, console.log(`http://localhost:${port}`));
