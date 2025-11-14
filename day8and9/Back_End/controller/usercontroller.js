
import usermodel, { detailsModel } from "../models/usermodel.js";

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

export const userDetailsController = async(req, res) =>{
    try {
        // console.log(req.body)
        const {userName, userEmail} = req.body
        const addedData = await detailsModel.create({userName, userEmail});
        res.status(201).json({msg:"Your details added successfully", addedData:addedData})

    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"something wrong"})
    }
}


export const getTableController = async (req, res)=>{
    try {
        const details = await detailsModel.find()
        res.status(200).json({tabledata:details})

    } catch (error) {
        console.log(error);
        res.status(400).json({msg:"no data found"})
        
    }
}