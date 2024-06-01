import mongoose from "mongoose";



export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN!);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1); // Sale del proceso si falla la conexión.
  }
};
