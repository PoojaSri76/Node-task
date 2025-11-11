export const bodyController = (req, res)=>{

    // console.log(req.body);
    res.status(200).json({msg:`the warrior is ${req.body.warriorName} from ${req.body.place}`, experience:req.body.experience, power:req.body.superPower})
    
}

export const paramsController = (req, res)=>{
    // console.log(req.params);
    const id = Number(req.params.warriorId);
    switch (id) {
        case 1:
            res.status(200).json({msg:"Power stone"})
            break;
        case 2:
            res.status(200).json({msg:"Space Stone"})
            break;
        case 3:
            res.status(200).json({msg:"Mind Stone"})
            break;
        case 4:
            res.status(200).json({msg:"Reality Stone"})
            break;
        case 5:
            res.status(200).json({msg:"Time Stone"})
            break;
        case 6:
            res.status(200).json({msg:"Soul Stone"})
            break;
        default:
            res.status(404).json({msg:"The ID doesn't exists"})
            break;
    }
}

export const queryController = (req, res)=>{
    console.log(req.query);
    if (req.query.planetId == 1){
        res.status(200).json({msg:`${req.query.character} is in Knowhere Planet`})
    }else{
        res.status(404).json({msg:"planet not found"})
    }
    
}

export const headerController = (req,res)=>{
    // console.log(req.headers);
    if (req.headers.place == 'wakanda') {
        res.status(200).json({msg:"vibranium - access granted"})
    }else{
        res.status(403).json({msg:"access denied"})
    }
    
}