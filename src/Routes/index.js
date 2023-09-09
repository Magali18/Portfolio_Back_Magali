const { Router } = require("express");
const router = Router();
const {postVisitHandler,getAllVisit } = require("../Handlers/index");

router.post("/visit",postVisitHandler)
router.get('/allVisit', getAllVisit)



module.exports = router;