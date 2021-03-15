//Database connection
const mongoose = require("mongoose");
require('dotenv').config();
const db = mongoose.connect('mongodb://127.0.0.1:27017/UTPL', {
  useNewUrlParser: true,
  useUnifiedTopology: true})
  .then(()=>{
  console.log(`connection to database established`)
}).catch(err=>{
  console.log(`db error ${err.message}`);
  process.exit(-1)
});

const connection = mongoose.connection;
module.exports = db
