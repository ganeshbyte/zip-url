const { Router } = require("express");
const { signUpPage, loginPage } = require("../controller/static.controller");

const router = Router();

//localhost:3000/
router.get("/signup", signUpPage);
router.get("/login", loginPage);
module.exports = router;
