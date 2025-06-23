import connectMongo  from "../../../../utils/connectMongo";
import postModel from "../../../../models/postModal"

export async function GET(req){

   const quary =  req.nextUrl.searchParams.get('q')

    try{
        await connectMongo();
        let postData;
        if(quary){
                postData = await postModel.find({
                $or:[
                    {title:new RegExp(quary, 'i')},
                    {description:new RegExp(quary, 'i')}, 
                ]
               });
        }else{
            postData = await postModel.find({});
        }
        return  Response.json(postData)  
    }catch(error){
        return Response.json({
            message:error.message
        })
    }
    
}