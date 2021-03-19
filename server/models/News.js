const mongoose = require('mongoose');
const NewsSchema = mongoose.Schema({
  title: {type: String},
  description: {type: String},
  doyenne:{type: String},
  owner: {type: String},
  link:{type: String}
})

const News = mongoose.model('News', NewsSchema)

module.exports = News;
