import mongoose from "mongoose";

const connectDB = async() => {
    mongoose
      .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRES}/Murilo`)
      .then(() => console.log("Conectado ao MongoDB"))
      .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro));
};

connectDB();

export default mongoose;