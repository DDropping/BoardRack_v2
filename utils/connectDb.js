import mongoose from 'mongoose';
const connection = {};

async function ConnectDb() {
  console.log('looking for db connection');
  if (connection.isConnected) {
    // Use exisiting database connection
    console.log('Using existing DB connection');
    return;
  }
  // Use new database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DB Connected');
  connection.isConnected = db.connections[0].readyState;
}

export default ConnectDb;
