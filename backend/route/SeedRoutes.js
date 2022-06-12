import express from 'express';
import data from '../data.js';
import Product from '../Moduls/ProductModel.js';
import User from '../Moduls/userModel.js';

const seedRouter = express.Router();
seedRouter.get('/', async (req, res) => {
  try {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.product);
    await User.remove({});
    const createUser = await User.insertMany(data.users);
    res.send({ createdProducts, createUser });
  } catch (error) {
    console.log(error);
  }
});
export default seedRouter;
