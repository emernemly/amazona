import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const contactDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECT);
    console.log('server is connect with DB');
  } catch (error) {
    console.log(error);
  }
};
export default contactDB;
