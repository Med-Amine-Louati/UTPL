const express = require("express");
const cors = require("cors");
const db = require("../db/config");
const path = require("path");
const bodyParser = require("body-Parser");
const UserRoutes = require('./routes/user.routes')
const NewsRoutes = require('./routes/news.routes')
const passport = require ('passport')
//Initialize app with express
const app = express();
//Port used by the server
const port = process.env.PORT || 5000;

//Middelware
app.use(cors())
app.use(bodyParser.json());
app.use("/news",NewsRoutes)
app.use(passport.initialize());
app.use(passport.session());
require('../config/passport')(passport);
app.use(express.static(__dirname + "/../frontEnd/dist/UTPL"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '/../frontEnd/dist/UTPL/index.html'));
});

app.use("/users",UserRoutes)

//Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
