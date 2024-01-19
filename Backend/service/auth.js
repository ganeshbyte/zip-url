const setSessionIdToUser = new Map();

const setUser = (id, user) => {
    setSessionIdToUser.set(id, user);
}

const getUser = (id) => {
    return setSessionIdToUser.get(id);
}

module.exports = { getUser, setUser };