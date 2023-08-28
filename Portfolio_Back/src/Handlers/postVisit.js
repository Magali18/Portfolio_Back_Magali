

const postVisit = (req,res)=>{
try {
    res.status(200).json('todo ok')
    
} catch (error) {
    res.status(400).json({ error: error.message });
}
};
module.exports = postVisit;