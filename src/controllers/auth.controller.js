import pool from "../config";
import jwt from "jsonwebtoken";

// Recibe como parametro correo y password y regresa el token de validacion

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await pool.query(
      "SELECT * from users WHERE email = $1 AND password = $2",
      [email, password]
    );

    console.log(response);

    if (response.rows.length > 0) {
      const user = response.rows[0];
      const token = jwt.sign({ id: user.id }, "api-auth", {
        expiresIn: 86400,
      });

      res.json(token);
    } else {
      res.status(403).json("error no estas registrado");
    }
  } catch (error) {
    res.status(403).json(error);
  }
};
