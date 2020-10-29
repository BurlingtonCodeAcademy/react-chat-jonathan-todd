// Import Required Files
require("dotenv").config();
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();
const staticDir = process.env.DEV ? "./client/public" : "./client/build";

// Middleware
app.use(express.static(staticDir));
app.use(express.urlencoded({extended: true}))

// Database integration (Jonathan needs his data-store.js file)
const DataStore = require("./data.js");
let myDb = new DataStore (`mongodb+srv://Jonathan:${process.env.DBPASS}@cluster0.fmoix.mongodb.net/<dbname>?retryWrites=true&w=majority`)

let chatDataStore = new DataStore("mongodb+srv://Jonathan:"+ process.env.DBPASS+"@cluster0.fmoix.mongodb.net/jonathan-todd-chat?retryWrites=true&w=majority", "jonathan-todd-chat", "chat-entries")
console.log(chatDataStore.collection)

// Listen for incoming messages
app.listen(port, () => {
  console.log('listening on port: ' + port) 
})

// --------------------- ROUTES -------------------------------

// Route to allow chat messages to be saved to DB
app.post('/create', (req, res) => {
  let submission = req.body
  chatDataStore.addOne(submission)
  res.send('Form submitted successfully')
})

// Route to read chat messages in DB
app.get('/get', async (req, res) => {
  let data =  await chatDataStore.readData()
  console.log('Data is: ', data)
  res.send(data)
}) 

// Creating a catch-all route
// This route needs to ber last
app.get('*', (request, response) => {
  response.sendFile(path.resolve(staticDir + '/index.html'))
})