const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "bag_store",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
});

// Ensure orders table exists on startup
pool.query(
  `CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    telephone VARCHAR(20),
    ville VARCHAR(100),
    adresse TEXT,
    livraison VARCHAR(50),
    produits JSON,
    remarque TEXT,
    date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  (err) => {
    if (err) {
      console.error("Erreur création table orders:", err);
    } else {
      console.log("Table orders prête.");
    }
  }
);

module.exports = pool;

