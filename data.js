const { ObjectId, MongoClient } = require("mongodb");

class DataStore {
	constructor(url, dbName, collectionName) {
		this.url = url;
		this.dbName = dbName;
		this.collName = collectionName;
		this.connection = null;
	}

	// Establish a connection to Mongo DB
	async connect() {
		// check if connection already exists
		if (this.connection && this.connection.isConnected()) {
			return this.connection;

			// if not, create connection and return it
		} else {
			const client = await MongoClient.connect(this.url, { useUnifiedTopology: true });
			this.connection = client;
			return this.connection;
		}
	}

	// Add a post entry to DB
	async addOne(entryObject, parsedTime) {
		let client = await this.connect();
		let db = await client.db(this.dbName);
		let collection = await db.collection(this.collName);
		//await collection.insertOne(entryObject);
		await collection.insertOne({author:entryObject.author, message:entryObject.message, parsedTime})
	}

	// Read all Chat Posts
	async readData() {
		let client = await this.connect();
		let db = await client.db(this.dbName);
		const collection = db.collection(this.collName);
		let dataArr = await collection.find({}).toArray();
		return dataArr;
	}

	// Read Chat Posts for a specific channel
	async readDataForChannel(channelName) {
		let client = await this.connect();
		let db = await client.db(this.dbName);
		const collection = db.collection(this.collName);
		console.log('in readDataForChannel', channelName)
		let dataArr = await collection.find({'channelName': channelName}).toArray();
		return dataArr;
	}

	// Read the list of channels available for users to post in
	async readChannels() {
		let client = await this.connect();
		let db = await client.db(this.dbName);
		const collection = db.collection(this.collName);
		let dataArr = await collection.find({}).toArray();
		return dataArr;
	}
}

module.exports = DataStore;
