const express = require("express"); 
 const {json,urlencoded}  = require("express");

 const mongoose = require("mongoose");
 const dotenv = require('dotenv');
 const userRouter = require('./routes/users');
 const auth = require('./middlewares/auth');

 dotenv.config();

 mongoose.connect(process.env.MONGODB_STRING);

 const app = express();

 app.use(auth);
 app.use(json());
 app.use(urlencoded({extended: false}));

 app.use("/users",userRouter);
 app.listen(process.env.PORT || 5000);
