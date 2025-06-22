import connectMongo  from "../../../../utils/connectMongo";
import postModel from "../../../../models/postModal"

export async function GET(){
    try{
        await connectMongo();
        const postData = await postModel.find({});
        return  Response.json(postData)  
    }catch(error){
        return Response.json({
            message:error.message
        })
    }
    
}