import mongoose from "mongoose";

const connectDB = async() => {
    mongoose
      .connect("mongodb://localhost:27017/OFICINA")
      .then(() => console.log("Conectado ao MongoDB"))
      .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro));
};

connectDB();

export default mongoose;