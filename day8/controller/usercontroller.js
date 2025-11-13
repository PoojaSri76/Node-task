
import usermodel from "../models/usermodel.js";

export const userController = async(req, res)=>{
    // console.log(req.body);
    const {username, mobno, city} = req.body;
    try{
        const createdata  = await usermodel.create( {username, mobno, city} );
        res.status(201).json({msg:"Data successfully added"})

    }catch(error){
        console.error(error);
        
        res.status(403).json({msg:"something wrong!",errormsg:error})
    }
   
    
}