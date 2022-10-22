exports.getAll = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(`SELECT * FROM usuario`, (err, result) => {
      if (err) return res.send(err);

      res.json(result);
    });
  });
};

exports.getOne = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      `SELECT * FROM usuario WHERE id = ?`,
      [req.params.value],
      (err, result) => {
        if (err) return res.send(err);

        res.json(result);
      }
    );
  });
};

exports.create = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(`INSERT INTO usuario SET ? `, [req.body], (err, result) => {
      if (err) return res.send(err);

      res.send("Creación exitosa");
    });
  });
};

exports.update = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      `UPDATE usuario SET ? WHERE id = ?`,
      [req.body, req.params.value],
      (err, result) => {
        if (err) return res.send(err);

        res.send("Actualización exitosa");
      }
    );
  });
};

exports.deleteItem = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    conn.query(
      `DELETE FROM usuario WHERE id = ?`,
      [req.params.value],
      (err, result) => {
        if (err) return res.send(err);

        res.send("Eliminación exitosa");
      }
    );
  });
};
