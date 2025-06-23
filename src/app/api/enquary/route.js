import connectMongo from "../../../../utils/connectMongo"
import enquaryModel from "../../../../models/enquaryModal"


export async function POST(req) {
    try {
        const {name,email,message} =  await req.json()
        const enquary = {name,email,message}
        await connectMongo() 
         await enquaryModel.create(enquary)
       return  Response.json({
         message:'enquary has been Success'
        })
        
    } catch (error) {
        console.log("error the message",error);
        
        return Response.json({
            message:error._message
        })
    }

}