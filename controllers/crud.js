//Invocamos a la conexion de la DB
const conexion = require("../database/db");

//Editar_Persona........
// exports.editar_persona = async (req, res) => {
//   const id_persona = req.body.id_editar;
//   // console.log(id_persona)
//   const nombres = req.body.nombres_editar;
//   const apellidos = req.body.apellidos_editar;
//   const email = req.body.email_editar;
//   const direccion = req.body.direccion_editar;
//   // console.log(direccion)
//   const telefono = req.body.telefono_editar;
//   const rol = req.body.rol_editar;
//   // console.log(rol)
//   let id_rol = null;
//   switch (
//     rol //seccion de busqueda de id
//   ) {
//     case "administrador":
//       //console.log('entro a case administrador')
//       id_rol = "1";
//       break;
//     case "tecnico":
//       //   console.log('entro a case tecnico')
//       id_rol = "2";
//       break;
//     case "usuario":
//       //   console.log('entro a case usuario')
//       id_rol = "3";
//       break;
//   }

//   conexion.query(
//     "UPDATE persona SET ? WHERE id_persona = ?",
//     [
//       {
//         nombres: nombres,
//         apellidos: apellidos,
//         correo: email,
//         direccion: direccion,
//         id_rol: id_rol,
//         telefono: telefono,
//       },
//       id_persona,
//     ],
//     (error, results) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.redirect("/adminuser");
//       }
//     }
//   );
// };

//ELIMINAR persona

exports.eliminar_persona = async (req, res) => {
  const id_persona = req.body.id_eliminar;
  conexion.query(
    "DELETE FROM alumno WHERE id_alumno = ?",
    [id_persona],
    (error, results) => {
      if (error) {
        console.log(error);
      } else {
        res.redirect("/adminuser");
      }
    }
  );
};

//----------------METODOS CRUD DE USUARIO ADMINISTRADOR---------------------

exports.addPersona = async (req, res) => {
  //Metodo registrar persona
  //captura los datos desde el front
  try {
    //datos tabla ascensor
    const user = req.body.user;
    console.log("la es: " + user);
    const apellido = req.body.apellido;
    const fecha = req.body.fecha;
    const numid = req.body.numid;
    const eps = req.body.eps;
    const nom_acud = req.body.nom_acud;
    const tel_acudiente = req.body.tel_acudiente;
    const categoria = req.body.id_categoria;
    const id_categoria = categoria.split(" ", 1);
    console.log("la categoria es: " + id_categoria);

    conexion.query(
      "INSERT INTO alumno SET ?",
      {
        nombre: user,
        apellido: apellido,
        fecha_nacimiento: fecha,
        numid: numid,
        eps: eps,
        acudiente: nom_acud,
        tel_acudiente: tel_acudiente,
        id_categoria: id_categoria,
      },
      (error, result) => {
        if (error) throw error;

        res.redirect("/registro_jug");
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// agregar pago

exports.addPago = async (req, res) => {
  //Metodo registrar persona
  //captura los datos desde el front
  try {
    //datos tabla ascensor
    const fecha = req.body.fecha;
    const saldo = req.body.saldo;
    const mes = req.body.mes;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const valor = req.body.valor;
    const descripcion = req.body.descripcion;

    conexion.query(
      "INSERT INTO pago SET ?",
      {
        fecha: fecha,
        saldo: saldo,
        mes: mes,
        nombre: nombre,
        apellido: apellido,
        valor: valor,
        descripcion: descripcion,
      },
      (error, result) => {
        if (error) throw error;

        res.redirect("/mensualidad");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
