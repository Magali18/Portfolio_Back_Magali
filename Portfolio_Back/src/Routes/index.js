const { Router } = require("express");
const router = Router();
const {postVisitHandler,getAllVisit,getVisitIdHandler } = require("../Handlers/index");

router.post("/visit",postVisitHandler)
router.get('/allVisit', getAllVisit)



module.exports = router;