import { pool } from "../config";

// Recibe como parametro email y password y regresa el usuario creado

export const createHolder = async (req, res) => {
  const role = await checkRole(req.userId);

  if (role === "ADMIN") {
    const { email, password } = req.body;

    const clabe = Date.now();

    const query_cuenta = await pool.query(
      "INSERT INTO cuenta (CLABE,balance)  VALUES ($1, $2) RETURNING *",
      [clabe, 0]
    );
    const cuenta_id = query_cuenta.rows[0].id;

    const query_holder = await pool.query(
      "INSERT INTO users (email,password, role, cuenta_id) VALUES ($1,$2,$3,$4) RETURNING *",
      [email, password, "HOLDER", cuenta_id]
    );

    if (query_holder.rows.length > 0) {
      res.json({
        holder: query_holder.rows[0],
      });
    }

    res.json({
      error: "error",
    });
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

// Recibe como parametro id_cuenta y deposito y regresa un mensaje de confirmacion de la transaccion

export const createDeposito = async (req, res) => {
  const role = await checkRole(req.userId);

  if (role === "ADMIN") {
    const { id_cuenta, deposito } = req.body;
    const query_cuenta = await pool.query(
      "SELECT balance from cuenta WHERE id=$1",
      [id_cuenta]
    );

    let balance = query_cuenta.rows[0].balance;
    balance = parseFloat(balance);
    balance += parseFloat(deposito);

    const query_deposito = await pool.query(
      "UPDATE cuenta SET balance = ($1) WHERE id=$2 RETURNING *",
      [balance, id_cuenta]
    );

    if (query_deposito.rows.length > 0) {
      res.json({
        deposito: query_deposito.rows[0],
      });
    } else {
      res.status(401).json({
        error: "error",
      });
    }
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
};

const checkRole = async (userId) => {
  const query_user = await pool.query("SELECT role from users WHERE id=$1", [
    userId,
  ]);

  return query_user.rows[0].role;
};
