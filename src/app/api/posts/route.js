import connectMongo  from "../../../../utils/connectMongo";
import postModel from "../../../../models/postModal"

export async function GET(req){

   const quary =  req.nextUrl.searchParams.get('q')
   console.log(quary,'quary')
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