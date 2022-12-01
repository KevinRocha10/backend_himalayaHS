const express = require("express");
const router = express.Router();
const conexion = require("../database/db");
const crud = require("../controllers/crud");

//constante para definir el controlador
const authController = require("../controllers/authController");

//router para las vistas
router.get("/", authController.isAuthenticated, (req, res) => {
  res.render("option", { user: req.user });
});

router.get("/index", (req, res) => {
  res.render("index", { user: req.user });
});

router.get("/login", (req, res) => {
  res.render("login", { alert: false });
});

//router para los métodos del controller
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;
