import app from "./app.js"; //importa desde app sus funciones
import { PORT } from "./config"

app.listen(PORT, () => {
    console.log("Server om port", PORT);// imprime en consola lo que pasa en el puerto 3000
});//escucha lo que pase en el puesto 3000
//console.log(database); //muestra en consola que el servidor esta conectado
