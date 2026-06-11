const express = require("express");
const mysql = require("mysql");
const BodyParser = require("body-parser");

const app = express();

app.use(BodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs", "add.ejs");
app.set("views", "views");

const db = mysql.createConnection({
  host: "localhost",
  database: "db_parkir",
  user: "root",
  password: "",
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected....");

  //untuk get data
  app.get("/", (req, res) => {
    const sql = "SELECT * FROM data_parkir";
    db.query(sql, (err, result) => {
      if (err) throw err;

      let users = JSON.parse(JSON.stringify(result));

      // Format tanggal sebelum dikirim ke EJS
      users = users.map((user) => {
        if (user.tanggal) {
          // Konversi ke objek Date
          const tanggal = new Date(user.tanggal);

          // Pastikan format tanggal sesuai dengan timezone lokal
          user.tanggal = tanggal.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          });
        }
        return user;
      });

      // Kirim data ke template dengan tanggal yang sudah diformat
      res.render("index", { users: users, title: "Parkiran BFI" });
    });
  });

  //untuk insert/add data
  app.post("/add", (req, res) => {
    const insertSql = `INSERT INTO data_parkir (nama, motor, mobil, tanggal, isverif) VALUES('${req.body.nama}',
          '${req.body.motor}', '${req.body.mobil}', '${req.body.tanggal}', '${req.body.isverif}');`;
    db.query(insertSql, (err, result) => {
      if (err) throw err;
      res.redirect("/");
    });
  });
});

//untuk verifikasi code admin
app.post("/add", (req, res) => {
  // Kode admin yang benar
  const validKodeAdmin = "masukkan password di sini"; // Ganti dengan kode admin yang sesuai

  // Cek apakah kode admin yang dikirim sesuai
  if (req.body.kode_admin !== validKodeAdmin) {
    // Jika kode admin salah, kirim respon error
    return res.status(403).send("Kode admin salah! Tolong di isi dengan benar");
  }

  // Jika kode admin benar, lanjutkan menambah data
  const insertSql = `
    INSERT INTO data_parkir (nama, motor, mobil, tanggal, isverif)
    VALUES ('${req.body.nama}', '${req.body.motor}', '${req.body.mobil}', '${req.body.tanggal}', '${req.body.isverif}');
  `;

  db.query(insertSql, (err, result) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(8000, () => {
  console.log("server ready...");
});
