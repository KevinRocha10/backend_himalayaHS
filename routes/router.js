const express = require("express");
const router = express.Router();

//constante para definir el controlador
const authController = require("../controllers/authController");

//router para las vistas
router.get("/login", authController.isAuthenticated, (req, res) => {
  res.render("login", { user: req.user });
});

router.get("/index", (req, res) => {
  res.render("index", { user: req.user });
});

//router para los métodos del controller
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;
