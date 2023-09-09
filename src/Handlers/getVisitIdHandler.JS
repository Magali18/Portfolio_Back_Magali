const getVisitIdController = require('../Controller/getVisitIdController')

getVisitIdHandler =async (res,req)=>{
    try {
        const{id}=req.query
        const response = await getVisitIdController(id)
    res.status(200).json(response)
    } catch (error) {
        res.status(400).send({error:error.message})   
    }
};
module.exports ={getVisitIdHandler}