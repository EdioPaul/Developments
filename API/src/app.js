const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  
});


const db = mongoose.connection;

db.on('connected', () => {
  console.log('Mongoose default connection is open');
});

db.on('error', err => {
  console.log(`Mongoose default connection has ocurred \n${err}`);
});

db.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection is disconnected due to application termination'
    );
    process.exit(0);
  });
});



const Categories = require('./models/category');
const Products = require('./models/product');
const categoriesRoutes = require('./routes/categoryRoutes');
const productsRoutes = require('./routes/productRoutes');


app.use('/categories', categoriesRoutes);
app.use('/products', productsRoutes);
app.use('/', categoriesRoutes);
//app.use('/', productsRoutes);


module.exports = app;
