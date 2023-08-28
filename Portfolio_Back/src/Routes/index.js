const { Router } = require("express");
const router = Router();
const postVisit = require ('../Handlers/postVisit')

router.post("/visit",postVisit)


module.exports = router;