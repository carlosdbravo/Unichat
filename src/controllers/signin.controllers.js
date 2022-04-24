import { text } from "body-parser";
import app from "../app";
import User from "../models/User";

//:
export const renderSignin = async (req, res) => {
	res.render("signin");
};
//:sign in user
export const signinUser = async (req, res) => {
	res.send("helloworld");
}
export const createUser = async (req, res) => {
	const { name, email, password, confirmpassword, matricula } = req.body;
	const errors = [];
	//-validar si el usuario ya existe
		
	//-validacion de campos vacios
	if (name <= 0 || email <= 0 || password <= 0 || confirmpassword <= 0 || matricula <= 0) {
		errors.push("Complete the empty fields");
	}
	if (password.length > 0) {
		if (password != confirmpassword) {
			errors.push("Password do not match");
		}
	}
	if (password.length > 0 && password.length < 7) {
		errors.push("Password must be at least 7 characters");
	}
	if (errors.length > 0) {
		res.json({ errors, name, email, password, confirmpassword, matricula });
	}
	if (errors.length == 0) {
		res.json({errors})
	}
}
//
