import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connection established");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error: " + err);
      process.exit();
    });
  } catch (e) {
    console.log("Error connecting");
    console.log(e);
  }
}
