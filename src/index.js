// import express from "express"
// const express = require('express')
// const app = express()

import app from "./app.js"
import mongoose from "mongoose";
const port = 3000

// Database connecction may fail always present in another continent


// mongoose.connect('mongodb://127.0.0.1:27017/test');

(async  () => {
  try {
    // db connection
    await mongoose.connect('dbstring');
    console.log("DB connected successfully");

    app.on("error", (err) => {
      console.log("ERROR : ", err);
      throw err
    })

    const onListening = () => {
      console.log(`Listening on pert ${port}`)
    }

    

    app.listen(port, onListening)

  } catch (error) {
    console.error("Error : ", err)
    throw err
  }
})()

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })