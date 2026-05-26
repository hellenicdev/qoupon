const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/coupons');
  console.log(`MongoDB connected: ${conn.connection.host}`);
};

module.exports = connectDB;
