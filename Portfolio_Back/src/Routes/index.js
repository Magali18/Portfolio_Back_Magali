const { Router } = require("express");
const router = Router();
const {postVisitHandler,getAllVisit,getVisitIdHandler } = require("../Handlers/index");

router.post("/visit",postVisitHandler)
router.get('/allVisit', getAllVisit)
router.get('/visitId',getVisitIdHandler)


module.exports = router;