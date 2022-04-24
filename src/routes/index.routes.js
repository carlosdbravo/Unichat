import { Router } from "express"; //importamos de espress la funcion router
import { renderSignin, createUser, signinUser, addMensaje } from "../controllers/signin.controllers";
import { renderIndex, } from "../controllers/index.controllers";

const router = Router(); // creamos un objeto router para llamar a las funciones Router
router.get("/", renderSignin);// establecemos la ruta principal
router.get("/index", renderIndex);//renderizamo index
router.post("/create/user", createUser);//*creamos usuario
router.post("/signin/user", signinUser)


export default router;
