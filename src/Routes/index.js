const { Router } = require("express");
const router = Router();
const {wppPost } = require("../Handlers/index");


router.post("/postWpp", wppPost)

router.get('/',(req, res)=>{
    res.status(200).send('Hola esta deployado')
})

router.get('/hola',(req, res)=>{
    res.status(200).send('Hola esta es la ruta de prueba')
})





module.exports = router;