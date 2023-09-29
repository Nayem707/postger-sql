const express = require('express');
const app = express();
const productRouter = require('./router/products');
app.use(express.json());

app.get('/', (req, res) => {
  return res.send('hello');
});

app.use('/products', productRouter);

const port = 8000;
app.listen(port, console.log('server run 8000'));
