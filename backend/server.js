const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const productRouter = require("./routes/productRouter.js");
const userRouter = require("./routes/userRouter.js");
const orderRouter = require("./routes/orderRouter.js");
const uploadRouter = require("./routes/uploadRouter.js");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/luxeshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
const __dirnme = path.resolve();
app.use('/uploads', express.static(path.join(__dirnme, '/uploads')));
app.use(express.static(path.join(__dirnme, '/frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirnme, '/frontend/build/index.html'))
);


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.set("port", port);
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
