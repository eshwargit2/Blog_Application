import { Schema, model } from "mongoose";

const postSchema =  new Schema({
    title:String,
    description:String,
    image:String
}) 

const postModel = model('Post')