import express from 'express';
import User from '../Moduls/userModel';
const userRoute = express.Router();
userRoute.post('/', async (req, res) => {
  const { name, email, password, isAdmin } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      const match = user.password === password;
      if (!match) {
        res.status(400).send({ msg: 'bad credentials' });
      } else {
        res.status(200).send({ msg: 'login secc...' });
      }
    } else {
      res.status(400).send({ msg: 'bad credentials' });
    }
  } catch (error) {
    res
      .status(500)
      .send({ errors: [{ msg: 'soory can not signIN for now ' }] });
  }
});
export default userRoute;
