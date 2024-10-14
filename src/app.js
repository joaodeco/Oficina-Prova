import express from "express";
const app = express()

import workshop_route from "./routes/workshop-route.js";
import vehicle_route from "./routes/vehicle-route.js";
import maintenance_route from "./routes/maintenance-route.js";

app.use(express.json())

app.use("/vehicle", vehicle_route)
app.use("/workshop", workshop_route)
app.use("/maintenance", maintenance_route)

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

