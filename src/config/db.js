import mongoose from "mongoose";

const connectDB = async() => {
    mongoose
      .connect(`${process.env.URI}`)
      .then(() => console.log("Conectado ao MongoDB"))
      .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro));
};

connectDB();

export default mongoose;