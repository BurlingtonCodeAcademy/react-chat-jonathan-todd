const { ObjectId, MongoClient } = require('mongodb')

class DataStore {
    constructor(url, dbName, collectionName) {
        this.url = url
        this.dbName = dbName
        this.collName = collectionName
        this.connection = null

        //console.log('url: ', url)
        //console.log('dbName: ', dbName)
        //console.log('collection: ', collectionName)
    }

    async connect() {

        // check if connection already exists
        if (this.connection && this.connection.isConnected()) {
            console.log('already exists')
            return this.connection

            // if not, create connection and return it
        } else {
            console.log('creating a new connection')
            const client = await MongoClient.connect(this.url, { useUnifiedTopology: true })
            this.connection = client
            return this.connection
        } 
    }

    async readData() {
        let client = await this.connect()
        //console.log('client: ', client)
        let db = await client.db(this.dbName)
        //console.log('db: ', db)
        const collection = db.collection(this.collName)
        //console.log('collection: ', collection)
        let dataArr = await collection.find({}).toArray()
        //console.log('dataArr: ', dataArr)
        return dataArr
    }

    async addOne(entryObject) {
        let client = await this.connect()
        let db = await client.db(this.dbName)
        let collection = await db.collection(this.collName)

        collection.insertOne(entryObject)
    }
}

module.exports = DataStore
