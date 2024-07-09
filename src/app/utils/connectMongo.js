import mongoose from "mongoose";
// const MONGODB_URI = process.env.MONGODB_URI;
// let client = null;

// export async function connectToDatabase() {
//   if (client) { 
//     return client;
//   }

//   if (!MONGODB_URI) {
//     console.log("MongoDb URI not found.");
//   }

//   try {
//     client = await mongoose.connect(MONGODB_URI);
//     console.log("Connect to MongoDb successfully.");
//     return client;
//   } catch (error) {
//     console.error("Erroe connecting to the database:", error);
//   }
// }


const connectDB = async  () => {
    if(mongoose.connections[0].readyState){
        return true;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Mongodb Connected')
        return true
    } catch (error) {
        console.log(error)
    }
}

export default connectDB