const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "bag_store",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
});

// Ensure orders table exists on startup, puis colonne commune (bases créées avant cette colonne)
pool.query(
  `CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    telephone VARCHAR(20),
    ville VARCHAR(100),
    adresse TEXT,
    livraison VARCHAR(50),
    commune VARCHAR(150),
    frais_livraison INT NULL,
    total_commande INT NULL,
    produits JSON,
    remarque TEXT,
    date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  (err) => {
    if (err) {
      console.error("Erreur création table orders:", err);
      return;
    }
    console.log("Table orders prête.");
    pool.query(
      "ALTER TABLE orders ADD COLUMN commune VARCHAR(150) NULL",
      (e) => {
        if (e && e.code !== "ER_DUP_FIELDNAME" && e.errno !== 1060) {
          console.error("Erreur colonne commune:", e);
        }
        pool.query(
          "ALTER TABLE orders ADD COLUMN frais_livraison INT NULL",
          (e2) => {
            if (e2 && e2.code !== "ER_DUP_FIELDNAME" && e2.errno !== 1060) {
              console.error("Erreur colonne frais_livraison:", e2);
            }
            pool.query(
              "ALTER TABLE orders ADD COLUMN total_commande INT NULL",
              (e3) => {
                if (e3 && e3.code !== "ER_DUP_FIELDNAME" && e3.errno !== 1060) {
                  console.error("Erreur colonne total_commande:", e3);
                }
              }
            );
          }
        );
      }
    );
  }
);

module.exports = pool;

