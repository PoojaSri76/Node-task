export const AuthController = (req,res)=>{
    console.log(req.body);
    const {username} = req.body;
     if (username == "guru") {
        res.status(200).json({msg:"Welcome GURU"})
     }else{
        res.status(404).json({msg:"user not found"})
     }
    
}

export const reverseController = (req, res)=>{
    console.log(req.body);
    const {numbers} = req.body;
    const responseArray = numbers.reverse();
    console.log(responseArray);
    res.status(200).json({result:responseArray})
}

