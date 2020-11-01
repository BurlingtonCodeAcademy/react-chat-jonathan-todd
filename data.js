const { ObjectId, MongoClient } = require("mongodb");

class DataStore {
	constructor(url, dbName, collectionName) {
		this.url = url;
		this.dbName = dbName;
		this.collName = collectionName;
		this.connection = null;
	}
	async connect() {
		// check if connection already exists
		if (this.connection && this.connection.isConnected()) {
			return this.connection;

			// if not, create connection and return it
		} else {
			console.log("creating a new connection"); //remove line 18 before Monday!
			const client = await MongoClient.connect(this.url, { useUnifiedTopology: true });
			this.connection = client;
			return this.connection;
		}
	}
	async addOne(entryObject, parsedTime) {
		let client = await this.connect();
		let db = await client.db(this.dbName);
		let collection = await db.collection(this.collName);
		console.log(entryObject)
		//await collection.insertOne(entryObject);
		await collection.insertOne({author:entryObject.author, message:entryObject.message, parsedTime})
	}

	async readData() {
		let client = await this.connect();
		let db = await client.db(this.dbName);
		const collection = db.collection(this.collName);
		let dataArr = await collection.find({}).toArray();
		return dataArr;
	}

	async readChannels() {
		let client = await this.connect();
		let db = await client.db(this.dbName);
		const collection = db.collection(this.collName);
		let dataArr = await collection.find({}).toArray();
		return dataArr;
	}

}

module.exports = DataStore;
