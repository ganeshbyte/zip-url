const signUpPage = async (req, res) => {
    return res.render("signup");
}

const loginPage = (req, res) => {
    return res.render("login");
}

module.exports = { signUpPage, loginPage };