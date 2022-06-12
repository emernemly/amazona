import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import seedRouter from './route/SeedRoutes.js';
import userRoute from './route/SignIn.js';
const app = express();
app.use(express.json());
app.use('/api/seed', seedRouter);
app.use('/api/signIN', userRoute);
app.get('/api/product', (req, res) => {
  res.send(data.product);
});
app.get('/api/product/slug/:slug', (req, res) => {
  const product = data.product.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: 'Product Not Found' });
  }
});
app.get('/api/product/:id', (req, res) => {
  const product = data.product.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: 'Product Not Found' });
  }
});
dotenv.config();

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
