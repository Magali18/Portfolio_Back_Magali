const { Router } = require("express");
const router = Router();
const {wppPost } = require("../Handlers/index");


router.post("/postWpp", wppPost)

router.get('/',(req, res)=>{
    res.status(200).send('Hola esta deployado')
})






module.exports = router;