const { Router } = require("express");
const User = require("../models/user.models");
const { handleUserSignUp } = require("../controller/user.controller");
const router = Router();


//signup route
router.post("/", handleUserSignUp);

module.exports = router;
