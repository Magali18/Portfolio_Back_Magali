const { Router } = require("express");
const router = Router();
const {postVisitHandler,getAllVisit,wppPost } = require("../Handlers/index");


router.post("/visit",postVisitHandler)
router.post("/postWpp", wppPost)

router.get('/allVisit', getAllVisit)



module.exports = router;