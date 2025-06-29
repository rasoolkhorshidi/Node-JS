const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://rasoolkhorshidi:1234@nodejslearning.4acpaoh.mongodb.net/myDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    // مثال عملیات ساده: خواندن یک کلکسیون
    const database = client.db("myDatabase");
    const collection = database.collection("testCollection");

    const docs = await collection.find({}).toArray();
    console.log("Documents:", docs);

    // Ping
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
