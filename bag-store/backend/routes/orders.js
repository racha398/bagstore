const express = require("express");
const https = require("https");
const pool = require("../config/db");

const router = express.Router();

function sendCallMeBot(phone, apikey, text) {
  if (!phone || !apikey) return;
  const cleanPhone = String(phone).replace(/\D/g, "");
  if (!cleanPhone.length) return;
  const url = `https://api.callmebot.com/whatsapp.php?phone=${cleanPhone}&text=${encodeURIComponent(text)}&apikey=${encodeURIComponent(apikey)}`;
  https
    .get(url, (r) => { r.on("data", () => {}); })
    .on("error", (e) => console.error("CallMeBot:", e.message));
}

function buildNotificationMessage(order) {
  const produits = Array.isArray(order.produits) ? order.produits : [];
  const total = produits.reduce((s, p) => s + (p.price || 0) * (p.quantity || 1), 0);
  const now = new Date();
  const dateStr = now.toLocaleString("fr-FR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
  const lines = [
    "🛍️ NOUVELLE COMMANDE",
    "─────────────────",
    "👤 Client :",
    `- Téléphone : ${order.telephone || ""}`,
    `- Adresse de livraison : ${order.adresse || ""}${order.ville ? ", " + order.ville : ""}`,
    "",
    "👜 Commande :",
    ...produits.map((p) => `- ${p.name || "Sac"} | Couleur : ${p.color || "-"} | Quantité : ${p.quantity || 1}`),
    `- Prix total : ${total.toLocaleString("fr-DZ")} DA`,
    "",
    `🕐 Date et heure : ${dateStr}`,
    "📋 Statut : En attente",
  ];
  return lines.join("\n");
}

// POST /api/orders
router.post("/", (req, res) => {
  const {
    nom,
    prenom,
    telephone,
    ville,
    adresse,
    livraison,
    produits,
    remarque,
  } = req.body || {};

  if (!nom || !prenom || !telephone || !ville || !adresse || !livraison) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }

  if (!Array.isArray(produits) || produits.length === 0) {
    return res.status(400).json({ error: "Aucun produit." });
  }

  const produitsJson = JSON.stringify(produits);

  const sql =
    "INSERT INTO orders (nom, prenom, telephone, ville, adresse, livraison, produits, remarque) VALUES (?, ?, ?, ?, ?, ?, CAST(? AS JSON), ?)";

  pool.execute(
    sql,
    [
      nom,
      prenom,
      telephone,
      ville,
      adresse,
      livraison,
      produitsJson,
      remarque || null,
    ],
    (err, result) => {
      if (err) {
        console.error("Erreur insertion commande:", err);
        return res.status(500).json({ error: "Erreur serveur." });
      }
      res.json({ success: true, id: result.insertId });

      const whatsappPhone = process.env.CALLMEBOT_PHONE || process.env.WHATSAPP_NUMBER;
      const callmebotKey = process.env.CALLMEBOT_API_KEY;
      if (whatsappPhone && callmebotKey) {
        const message = buildNotificationMessage(req.body);
        sendCallMeBot(whatsappPhone, callmebotKey, message);
      }
    }
  );
});

// GET /api/orders
router.get("/", (req, res) => {
  const sql = "SELECT * FROM orders ORDER BY date_commande DESC LIMIT 200";
  pool.query(sql, (err, rows) => {
    if (err) {
      console.error("Erreur lecture commandes:", err);
      return res.status(500).json({ error: "Erreur serveur." });
    }
    res.json(rows);
  });
});

module.exports = router;

