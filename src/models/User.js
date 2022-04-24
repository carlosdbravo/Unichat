import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";




const userSchema = new Schema({
  name: { type: String,required:[true,'Please enter your name'] },
  email: { type: String, required:[true, "please enter your email"] },
  password: { type: String, required:[true,"please enter your pasword"]},
  //confirpassword:{type: String, required:[true, "plesse confirm your paswword"]},
  date: { type: Date, default: Date.now },
  matricula: { type:String, required: [true,"please enter your matricula"]}//
},
{
  timestamps: true,//* nos permite añadir una propiedad create y create
  versionKey: false //* eliminamo la clave que agrega mongo por default al objeto
}
);

export default model("User", userSchema);
