import express from "express";
import cors from "cors";
import PrivateRoutes from "./routes/PrivateRoutes.js";
import PublicRoutes from "./routes/PublicRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use(PublicRoutes)
app.use(PrivateRoutes)

app.get("/", (req, res) => {
  res.send("Servidor node: [Zinfe Almoxarifado], APIs: /clientes, /produtos, /vendas");
});

app.listen(3001, () => {
  console.log("rodando servidor");
});