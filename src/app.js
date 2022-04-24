import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes.js";
import path from "path";
import morgan from "morgan";
import "./database";
import bodyParser from "body-parser"

const app = express();
app.set("views", path.join(__dirname, "views"));

const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main",
});
app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

//TODO: midelware
//app.use(bodyParser.json());
//app.use(express.json());
//app.use("/api",indexRoutes);
//app.use("/api",require("./routes/index.routes.js"));
//app.use(bodyParser.urlencoded({ extended: true }));
//!:primero se setea el 1-midleware y luego el 2-index routes
app.use(express.urlencoded({ extended: true })); // *convierte el request body en un archivo json
app.use(express.static(path.join(__dirname, "public"))); //!mostramos los archivos estaticos dentro de public
app.use(morgan("dev")); // ?me dice lo que consulte en la web mediante consola antes de que llegue a las rutas
app.use(indexRoutes); //* Traemos las rutas del archivo index 
//!Metodos http
app.use(function (req, res, next) {
  res.status(404).send("Sorry cant find that!");
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
