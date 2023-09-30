const { Router } = require("express");
const router = Router();
const {wppPost } = require("../Handlers/index");


router.post("/postWpp", wppPost)
module.exports = router;