const { Router } = require("express");
const router = Router();
const postVisitHandler = require("../Handlers/postVisit");

router.post("/visit",postVisitHandler)


module.exports = router;