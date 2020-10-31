// Import Required Files
require("dotenv").config();
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();
const cors = require("cors");

const staticDir = process.env.DEV ? "./client/public" : "./client/build";

// Middleware
app.use(express.static(staticDir));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Database integration
const DataStore = require("./data.js");
let url = `mongodb+srv://Jonathan:${process.env.DBPASS}@cluster0.fmoix.mongodb.net/<dbname>?retryWrites=true&w=majority`
let myDb = new DataStore(url, "jonathan-todd-chat", "chat-entries");

// --------------------- ROUTES ------------------------------- //

// Route to allow chat messages to be saved to DB
app.post("/create", async (request, response) => {
	let submission = request.body;
	console.log(submission);
	await myDb.addOne(submission);
	response.send('/App');
});

// Route to read chat messages in DB
app.get("/get", async (request, response) => {
	let data = await myDb.readData();
	response.send(data);
});

// Creating a catch-all route (last route in the order)
app.get("*", (request, response) => {
	response.sendFile(path.resolve(staticDir + "/index.html"));
});

// Where the port is listening
app.listen(port, () => {
	console.log("listening on port: " + port);
});
