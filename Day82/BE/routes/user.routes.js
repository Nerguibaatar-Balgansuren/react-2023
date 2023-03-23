const { Router } = require("express");
const route = Router();
const user = require("../controllers/user.controllers");
const auth = require("../middleware/auth");

route.post("/user", user.register);
route.post("/login", user.login);
route.post("/userall", auth, user.getAll);

module.exports = route;
