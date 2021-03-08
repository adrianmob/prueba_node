import { pool } from "../config";

// Recibe como parametro clabe y deposito y regresa un mensaje de confirmacion de la transaccion

export const createTransferencias = async (req, res) => {
  const { clabe, deposito } = req.body;

  const query_cuenta = await pool.query("SELECT balance from clabe WHERE =$1", [
    clabe,
  ]);

  let balance = query_cuenta.rows[0].balance;
  balance = parseFloat(balance);
  balance += parseFloat(deposito);

  const query_deposito = await pool.query(
    "UPDATE cuenta SET balance = ($1) WHERE id=$2 RETURNING *",
    [balance, id_cuenta]
  );

  if (query_deposito.rows.length > 0) {
    res.json({
      deposito: "exito",
    });
  } else {
    res.status(401).json({
      error: "error",
    });
  }
};
