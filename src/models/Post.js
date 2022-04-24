import { Schema, model } from "mongoose";
const postSchema = new Schema({
    mensaje:{ type:String, required:true},
    date: { type: Date, default: Date.now },
},
{
    timestamps: true,//* nos permite añadir una propiedad create y create
    versionKey: false 
});
export default model("Post", postSchema);