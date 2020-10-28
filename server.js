//immport the required things
require("dotenv").config();
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

//middleware
app.use(express.static(staticDir));
app.use(express.urlencoded({extended: true}))

//Database integration (Jonathan needs his data-store.js file)
const DataStore = require("./data-store.js");
let myDb = new DataStore (`mongodb+srv://Jonathan:${process.env.DBPASS}@cluster0.fmoix.mongodb.net/<dbname>?retryWrites=true&w=majority`)

//API endpoint goes here ...

//creating a catch-all route
app.get('*', (request, response) => {
  response.sendFile(path.resolve(staticDir + '/index.html'))
})
//what port we're listening on
app.listen(port, () => {
  console.log('listening on port: ' + port) 
})