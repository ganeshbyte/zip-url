const { Router } = require("express");
const { handleUserSignUp, handleUserLogin } = require("../controller/user.controller");
const router = Router();


//localhost:3000/api/users
router.post("/signup", handleUserSignUp);
router.post("/login", handleUserLogin);

module.exports = router;
