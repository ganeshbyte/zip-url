const User = require("../models/user.models");
const { setUser } = require("../service/auth");
const { v4: uuidv4 } = require('uuid');

const handleUserSignUp = async (req, res) => {
    try {

        const { username, password, email } = req.body;

        const user = User.create({
            username, email, password
        });

        return res.redirect("login");

    } catch (error) {
        res.status(500).json({ error: error })
    }
}

const handleUserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({
            email, password
        });

        if (!user) {
            return res.render("login", { error: "User Not Found" });
        }

        const sessionId = uuidv4();
        setUser(sessionId, user);
        res.cookie("id", sessionId);

        return res.render("homepage");

    } catch (error) {
        res.render("homepage", { error })
    }
}

module.exports = { handleUserSignUp, handleUserLogin };

