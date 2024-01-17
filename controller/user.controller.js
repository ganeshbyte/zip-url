const handleUserSignUp = async (req, res) => {
    const { name, password, email } = req.body;
    const user = User.create({
        name, email, password
    });
    return res.reder("home")
}

module.exports = { handleUserSignUp };