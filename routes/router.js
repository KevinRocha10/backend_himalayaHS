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
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/option", (req, res) => {
  res.render("option", { alert: false });
});

router.get("/registro_jug", (req, res) => {
  // res.render("registro_jug");

  //Plantilla adminser -->tecnicos de usuario
  conexion.query("SELECT * FROM categoria", (error, result) => {
    if (error) {
      throw error;
    } else {
      res.render("registro_jug", { result: result });
    }
  });
});

router.get("/mensualidad", (req, res) => {
  // res.render("registro_jug");
  res.render("mensualidad");
});

router.get("/adminuser", (req, res) => {
  //Plantilla adminser -->tecnicos de usuario
  conexion.query(
    "SELECT alumno.id_alumno, alumno.nombre, alumno.apellido, alumno.fecha_nacimiento, alumno.numid,alumno.eps, alumno.acudiente, alumno.tel_acudiente , categoria.descripcion FROM alumno inner join categoria on alumno.id_categoria=categoria.id_categoria",
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.render("adminuser", { result: result });
      }
    }
  );
});

router.get("/busquedas", (req, res) => {
  //Plantilla adminser -->tecnicos de usuario
  conexion.query(
    "SELECT categoria.descripcion, alumno.nombre, alumno.apellido FROM categoria inner join alumno on  alumno.id_categoria=categoria.id_categoria;",
    (error, result) => {
      if (error) {
        throw error;
      } else {
        res.render("busquedas", { result: result });
      }
    }
  );
});

//router para los métodos del controller
router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

//Metodos CRUD para el registro de tareas--------------
router.post("/addPersona", crud.addPersona);
module.exports = router;
