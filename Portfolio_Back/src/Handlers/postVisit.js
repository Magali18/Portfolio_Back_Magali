const {createVisitController} = require('../Controller/createVisit')

const postVisitHandler = async (req,res)=>{
    const {name} = req.body
try {
    const newVisit = await createVisitController(name)

    res.status(200).json(newVisit)
    
} catch (error) {
    res.status(400).json({ error: error.message });
}
};
module.exports= postVisitHandler;