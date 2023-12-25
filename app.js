const mongoose = require('mongoose');
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const authRoutes = require('./routes/authRoutes');
const notFoundMiddleware = require('./middlewares/notFound');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
// const AuthMiddleware = require('./middlewares/authMiddleware');

// extra security paxckages
const helmet = require('helmet');
// const xss = require('xss-clean');
const cors = require('cors');

app.use(express.static('./public'));
app.use(express.json());
app.use(helmet());
app.use(cors());

app.use('/api/v1/auth', authRoutes);

// middle ware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 7000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
