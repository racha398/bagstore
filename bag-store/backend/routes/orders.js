const express = require("express");
const nodemailer = require("nodemailer");
const pool = require("../config/db");

const router = express.Router();

function buildOrderEmailHtml(order) {
  const produits = Array.isArray(order.produits) ? order.produits : [];
  const total = produits.reduce(
    (sum, p) => sum + (p.price || 0) * (p.quantity || 1),
    0
  );
  const now = new Date();
  const dateStr = now.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const produitsRows = produits
    .map(
      (p) => `
        <tr>
          <td>${p.name || "Sac"}</td>
          <td>${p.color || "-"}</td>
          <td style="text-align:center;">${p.quantity || 1}</td>
          <td style="text-align:right;">${(p.price || 0).toLocaleString(
            "fr-DZ"
          )} DA</td>
        </tr>`
    )
    .join("");

  return `
    <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.5; color: #222;">
      <h2 style="margin-bottom: 0.5rem;">🛒 Nouvelle commande !</h2>
      <p style="margin-top: 0;">${dateStr}</p>

      <h3>👤 Client</h3>
      <ul>
        <li><strong>Nom :</strong> ${order.nom || ""} ${order.prenom || ""}</li>
        <li><strong>Téléphone :</strong> ${order.telephone || ""}</li>
        <li><strong>Ville (wilaya) :</strong> ${order.ville || ""}</li>
        <li><strong>Commune :</strong> ${order.commune || ""}</li>
        <li><strong>Adresse :</strong> ${order.adresse || ""}</li>
        <li><strong>Type de livraison :</strong> ${order.livraison || ""}</li>
        ${
          order.frais_livraison != null
            ? `<li><strong>Frais de livraison :</strong> ${Number(
                order.frais_livraison
              ).toLocaleString("fr-DZ")} DA</li>`
            : ""
        }
        ${
          order.total_commande != null
            ? `<li><strong>Total commande :</strong> ${Number(
                order.total_commande
              ).toLocaleString("fr-DZ")} DA</li>`
            : ""
        }
      </ul>

      <h3>👜 Produits</h3>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <thead>
          <tr>
            <th style="border-bottom: 1px solid #ddd; text-align:left; padding: 4px 0;">Produit</th>
            <th style="border-bottom: 1px solid #ddd; text-align:left; padding: 4px 0;">Couleur</th>
            <th style="border-bottom: 1px solid #ddd; text-align:center; padding: 4px 0;">Qté</th>
            <th style="border-bottom: 1px solid #ddd; text-align:right; padding: 4px 0;">Prix</th>
          </tr>
        </thead>
        <tbody>
          ${produitsRows}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" style="padding-top: 8px; text-align:right;"><strong>Total</strong></td>
            <td style="padding-top: 8px; text-align:right;"><strong>${total.toLocaleString(
              "fr-DZ"
            )} DA</strong></td>
          </tr>
        </tfoot>
      </table>

      ${
        order.remarque
          ? `<h3 style="margin-top: 1.5rem;">📝 Remarque du client</h3>
             <p>${order.remarque}</p>`
          : ""
      }
    </div>
  `;
}

// POST /api/orders
router.post("/", (req, res) => {
  const body = req.body || {};
  const {
    nom,
    prenom,
    telephone,
    ville,
    adresse,
    livraison,
    produits,
    remarque,
  } = body;
  const commune =
    body.commune !== undefined && body.commune !== null
      ? String(body.commune).trim()
      : "";

  const frais_livraison =
    body.frais_livraison !== undefined &&
    body.frais_livraison !== null &&
    body.frais_livraison !== ""
      ? Number(body.frais_livraison)
      : null;
  const total_commande =
    body.total_commande !== undefined &&
    body.total_commande !== null &&
    body.total_commande !== ""
      ? Number(body.total_commande)
      : null;

  if (!nom || !prenom || !telephone || !ville || !commune || !adresse || !livraison) {
    return res.status(400).json({ error: "Champs obligatoires manquants." });
  }

  if (!Array.isArray(produits) || produits.length === 0) {
    return res.status(400).json({ error: "Aucun produit." });
  }

  const produitsJson = JSON.stringify(produits);

  const sql =
    "INSERT INTO orders (nom, prenom, telephone, ville, commune, adresse, livraison, frais_livraison, total_commande, produits, remarque) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CAST(? AS JSON), ?)";

  pool.execute(
    sql,
    [
      nom,
      prenom,
      telephone,
      ville,
      commune,
      adresse,
      livraison,
      Number.isFinite(frais_livraison) ? frais_livraison : null,
      Number.isFinite(total_commande) ? total_commande : null,
      produitsJson,
      remarque || null,
    ],
    (err, result) => {
      if (err) {
        console.error("Erreur insertion commande:", err);
        return res.status(500).json({ error: "Erreur serveur." });
      }
      res.json({ success: true, id: result.insertId });

      const gmailUser = process.env.GMAIL_USER;
      const gmailPass = process.env.GMAIL_PASS;
      const adminEmail = process.env.ADMIN_EMAIL;

      if (!gmailUser || !gmailPass || !adminEmail) {
        console.warn(
          "Email non envoyé : variables GMAIL_USER, GMAIL_PASS ou ADMIN_EMAIL manquantes."
        );
        return;
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      const mailOptions = {
        from: `"Bag Store" <${gmailUser}>`,
        to: adminEmail,
        subject: "🛒 Nouvelle commande !",
        html: buildOrderEmailHtml({
          nom,
          prenom,
          telephone,
          ville,
          commune,
          adresse,
          livraison,
          frais_livraison: Number.isFinite(frais_livraison)
            ? frais_livraison
            : null,
          total_commande: Number.isFinite(total_commande)
            ? total_commande
            : null,
          produits: JSON.parse(produitsJson),
          remarque,
        }),
      };

      transporter.sendMail(mailOptions, (emailErr) => {
        if (emailErr) {
          console.error("Erreur envoi email de commande:", emailErr);
        }
      });
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

