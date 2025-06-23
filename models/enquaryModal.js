const {Schema, models, model} = require('mongoose');


const enquarySchema =  new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    
});

const enquaryModel = models.Enquary || model('Enquary',enquarySchema);

export default enquaryModel;