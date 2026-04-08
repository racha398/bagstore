// Configuration: replace this with your WhatsApp number (without + or leading zeros)
const WHATSAPP_NUMBER = "213661130341";

const LIVRAISON_DOMICILE = "Livraison à domicile";
const LIVRAISON_STOP_DESK = "Stop Desk";

const SHIPPING_RATES = {
  Alger: { domicile: 400, stopDesk: 250 },
  Boumerdès: { domicile: 600, stopDesk: 300 },
  Blida: { domicile: 600, stopDesk: 300 },
  Tipaza: { domicile: 600, stopDesk: 300 },
  "Tizi Ouzou": { domicile: 700, stopDesk: 350 },
  Bouira: { domicile: 700, stopDesk: 350 },
  Médéa: { domicile: 700, stopDesk: 350 },
  "Aïn Defla": { domicile: 800, stopDesk: 350 },
  "Aïn Témouchent": { domicile: 800, stopDesk: 350 },
  Tissemsilt: { domicile: 800, stopDesk: 350 },
  Tlemcen: { domicile: 800, stopDesk: 350 },
  Oran: { domicile: 800, stopDesk: 350 },
  Mostaganem: { domicile: 800, stopDesk: 350 },
  Relizane: { domicile: 800, stopDesk: 350 },
  Mascara: { domicile: 800, stopDesk: 350 },
  Batna: { domicile: 800, stopDesk: 350 },
  Constantine: { domicile: 800, stopDesk: 350 },
  Chlef: { domicile: 800, stopDesk: 350 },
  Mila: { domicile: 800, stopDesk: 350 },
  "M'Sila": { domicile: 800, stopDesk: 350 },
  "Sidi Bel Abbès": { domicile: 800, stopDesk: 350 },
  Annaba: { domicile: 800, stopDesk: 350 },
  Sétif: { domicile: 800, stopDesk: 350 },
  Skikda: { domicile: 800, stopDesk: 350 },
  Béjaïa: { domicile: 800, stopDesk: 350 },
  "Bordj Bou Arréridj": { domicile: 800, stopDesk: 350 },
  Jijel: { domicile: 850, stopDesk: 350 },
  "El Tarf": { domicile: 900, stopDesk: 350 },
  Guelma: { domicile: 900, stopDesk: 350 },
  Khenchela: { domicile: 900, stopDesk: 350 },
  Saïda: { domicile: 900, stopDesk: 350 },
  Tébessa: { domicile: 900, stopDesk: 350 },
  "Souk Ahras": { domicile: 900, stopDesk: 350 },
  Tiaret: { domicile: 900, stopDesk: 350 },
  Biskra: { domicile: 1000, stopDesk: 500 },
  Djelfa: { domicile: 1000, stopDesk: 500 },
  Laghouat: { domicile: 1000, stopDesk: 500 },
  "Ouled Djellal": { domicile: 1000, stopDesk: 550 },
  Ghardaïa: { domicile: 1100, stopDesk: 500 },
  Touggourt: { domicile: 1100, stopDesk: 500 },
  "El Oued": { domicile: 1100, stopDesk: 500 },
  Ouargla: { domicile: 1100, stopDesk: 500 },
  "El M'Ghair": { domicile: 1100, stopDesk: 600 },
  "El Meniaa": { domicile: 1150, stopDesk: 550 },
  "El Bayadh": { domicile: 1200, stopDesk: 600 },
  Naâma: { domicile: 1200, stopDesk: 600 },
  Béchar: { domicile: 1200, stopDesk: 600 },
  "Béni Abbès": { domicile: 1200, stopDesk: 750 },
  Adrar: { domicile: 1500, stopDesk: 700 },
  Timimoun: { domicile: 1500, stopDesk: 700 },
  Tindouf: { domicile: 1500, stopDesk: 700 },
  "In Salah": { domicile: 1700, stopDesk: 900 },
  Tamanrasset: { domicile: 1800, stopDesk: 1000 },
  Illizi: { domicile: 2000, stopDesk: 1000 },
  Djanet: { domicile: 2900, stopDesk: 2200 },
};

const products = [
  {
    id: 1,
    name: "Sac",
    nameAr: "حقيبة",
    price: 3500,
    originalPrice: 4000,
    colors: ["Noir", "Marron", "Bordeaux"],
    colorsAr: ["أسود", "بني", "بوردو"],
    images: {
      Noir: "img/sac-noir.jpg",
      Marron: "img/sac-marron.jpg",
      Bordeaux: "img/sac-bordeaux.jpg",
    },
  },
  {
    id: 2,
    name: "Cabas",
    nameAr: "حقيبة سفر",
    price: 4900,
    colors: ["Beige", "Noir"],
    colorsAr: ["بيج", "أسود"],
    images: {
      Beige: "img/cabas-beige.png",
      Noir: "img/cabas-noir.png",
    },
  },
];

const t = {
  fr: {
    siteTitle: "Sacs Élégants",
    introTitle: "Catalogue",
    orderPanelTitle: "Commande",
    summaryEmpty: "Aucun article sélectionné",
    addToCart: "Ajouter",
    villePlaceholder: "Choisir une wilaya",
    livraisonDomicile: "À domicile",
    livraisonRelais: "Stop Desk",
    communePlaceholder: "Ex: Alger-Centre, Bab Ezzouar…",
    adressePlaceholder: "Ex: 12 rue..., quartier…",
    labelSubtotalProducts: "Sous-total produits",
    labelLineShipping: "Livraison",
    labelGrandTotal: "Total",
    toastMinOne: "Ajoutez au moins un article.",
    toastRequiredFields: "Veuillez remplir tous les champs obligatoires.",
    toastPhoneInvalid:
      "Numéro de téléphone invalide. Il doit commencer par 05, 06 ou 07 et contenir 10 chiffres.",
    toastSuccess: "Commande envoyée avec succès",
    toastError: "Impossible d'envoyer la commande.",
    cartItemColor: "Couleur",
    cartItemQty: "Qté",
    shippingNeedWilaya: "Choisissez une wilaya",
    shippingUnavailable: "Tarif à confirmer",
    copyright: "© 2025 Sacs Élégants. Tous droits réservés.",
  },
  ar: {
    siteTitle: "حقائب أنيقة",
    introTitle: "المنتجات",
    orderPanelTitle: "الطلب",
    summaryEmpty: "لم يُختر أي منتج",
    addToCart: "إضافة",
    villePlaceholder: "اختر الولاية",
    livraisonDomicile: "إلى المنزل",
    livraisonRelais: "Stop Desk",
    communePlaceholder: "مثال: وسط المدينة، الحي…",
    adressePlaceholder: "مثال: الشارع، الحي…",
    labelSubtotalProducts: "المجموع الفرعي (منتجات)",
    labelLineShipping: "التوصيل",
    labelGrandTotal: "الإجمالي",
    toastMinOne: "أضف منتجاً واحداً على الأقل.",
    toastRequiredFields: "يرجى ملء جميع الخانات الإلزامية.",
    toastPhoneInvalid:
      "رقم الهاتف غير صالح. يجب أن يبدأ بـ 05 أو 06 أو 07 ويتكون من 10 أرقام.",
    toastSuccess: "تم إرسال الطلب بنجاح",
    toastError: "تعذر إرسال الطلب.",
    cartItemColor: "اللون",
    cartItemQty: "الكمية",
    shippingNeedWilaya: "اختر الولاية",
    shippingUnavailable: "السعر يُؤكد لاحقاً",
    copyright: "© 2025 حقائب أنيقة. جميع الحقوق محفوظة.",
  },
};

let cart = [];
let currentLang = localStorage.getItem("lang") || "fr";

function getT() {
  return t[currentLang] || t.fr;
}

function applyStaticTranslations() {
  const T = getT();
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.title = currentLang === "ar" ? "متجر الحقائب" : "Boutique de Sacs";

  const set = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  set("site-title", T.siteTitle);
  set("intro-title", T.introTitle);
  set("order-panel-title", T.orderPanelTitle);
  set("summary-empty-msg", T.summaryEmpty);
  set("label-subtotal-products", T.labelSubtotalProducts);
  set("label-line-shipping", T.labelLineShipping);
  set("label-grand-total", T.labelGrandTotal);
  set("footer-copyright", T.copyright);

  const villeSelect = document.getElementById("ville");
  if (villeSelect && villeSelect.options.length > 0) {
    villeSelect.options[0].text = T.villePlaceholder;
  }

  const livraison = document.getElementById("livraison");
  if (livraison && livraison.options.length >= 2) {
    livraison.options[0].text = T.livraisonDomicile;
    livraison.options[1].text = T.livraisonRelais;
  }

  const communeInput = document.getElementById("commune");
  if (communeInput) communeInput.placeholder = T.communePlaceholder;

  const adresseInput = document.getElementById("adresse");
  if (adresseInput) adresseInput.placeholder = T.adressePlaceholder;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });

  updateCheckoutTotals();
}

function getShippingAmount(wilaya, livraisonType) {
  const row = wilaya ? SHIPPING_RATES[wilaya] : undefined;
  if (!row) return null;
  if (livraisonType === LIVRAISON_DOMICILE) return row.domicile;
  if (livraisonType === LIVRAISON_STOP_DESK) return row.stopDesk;
  return null;
}

function formatPrice(value) {
  const locale = currentLang === "ar" ? "ar-DZ" : "fr-DZ";
  return `${value.toLocaleString(locale)} DA`;
}

function getProductDisplayName(product) {
  return currentLang === "ar" && product.nameAr ? product.nameAr : product.name;
}

function getProductDisplayColors(product) {
  if (currentLang === "ar" && product.colorsAr) return product.colorsAr;
  return product.colors;
}

function getDisplayColorForLine(item) {
  const product = products.find((p) => p.id === item.id);
  if (!product) return item.color;
  const idx = product.colors.indexOf(item.color);
  if (idx < 0) return item.color;
  return getProductDisplayColors(product)[idx] || item.color;
}

function getDisplayNameForLine(item) {
  const product = products.find((p) => p.id === item.id);
  return product ? getProductDisplayName(product) : item.name;
}

function addToCart(item) {
  const existing = cart.find((p) => p.id === item.id && p.color === item.color);
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push({ ...item });
  }
  renderCartSummary();
  updateCheckoutTotals();
}

function removeFromCart(index) {
  if (index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  renderCartSummary();
  updateCheckoutTotals();
}

function renderCartSummary() {
  const emptyEl = document.getElementById("summary-empty-msg");
  const listEl = document.getElementById("cart-summary-items");
  const T = getT();

  if (!emptyEl || !listEl) return;

  if (cart.length === 0) {
    emptyEl.hidden = false;
    listEl.hidden = true;
    listEl.innerHTML = "";
    return;
  }

  emptyEl.hidden = true;
  listEl.hidden = false;
  listEl.innerHTML = "";

  cart.forEach((item, index) => {
    const displayName = getDisplayNameForLine(item);
    const displayColor = getDisplayColorForLine(item);
    const lineTotal = item.price * item.quantity;

    const row = document.createElement("div");
    row.className = "summary-line";
    row.innerHTML = `
      <div class="summary-line-main">
        <div class="summary-line-title">${displayName}</div>
        <div class="summary-line-meta">${T.cartItemColor}: ${displayColor} · ${T.cartItemQty}: ${item.quantity}</div>
      </div>
      <span class="summary-line-price">${formatPrice(lineTotal)}</span>
      <button type="button" class="summary-line-remove" data-cart-index="${index}" aria-label="Retirer">×</button>
    `;
    row
      .querySelector(".summary-line-remove")
      .addEventListener("click", () => removeFromCart(index));
    listEl.appendChild(row);
  });
}

function productsSubtotal() {
  return cart.reduce((s, i) => s + i.price * i.quantity, 0);
}

function updateCheckoutTotals() {
  const subEl = document.getElementById("subtotal-products");
  const shipEl = document.getElementById("line-shipping");
  const grandEl = document.getElementById("grand-total");
  if (!subEl || !shipEl || !grandEl) return;

  const T = getT();
  const sub = productsSubtotal();
  subEl.textContent = formatPrice(sub);

  const villeEl = document.getElementById("ville");
  const livEl = document.getElementById("livraison");
  const wilaya = villeEl ? villeEl.value : "";
  const liv = livEl ? livEl.value : "";

  const ship = wilaya ? getShippingAmount(wilaya, liv) : null;

  if (ship == null) {
    shipEl.textContent = wilaya ? T.shippingUnavailable : T.shippingNeedWilaya;
    grandEl.textContent = formatPrice(sub);
  } else {
    shipEl.textContent = formatPrice(ship);
    grandEl.textContent = formatPrice(sub + ship);
  }
}

function splitFullName(full) {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { nom: "", prenom: "" };
  if (parts.length === 1) return { nom: parts[0], prenom: "—" };
  return { prenom: parts[0], nom: parts.slice(1).join(" ") };
}

function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";
  const T = getT();

  products.forEach((product) => {
    const displayName = getProductDisplayName(product);
    const displayColors = getProductDisplayColors(product);
    const selectedColorKey = product.colors[0];
    const selectedColorDisplay = displayColors[0];
    const quantity = 1;
    const imageByColor = product.images || {};
    const initialImage = imageByColor[selectedColorKey] || "";
    const placeholder =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23e7d5c0' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' fill='%23988' font-size='14' text-anchor='middle' dy='.3em'%3EPhoto%3C/text%3E%3C/svg%3E";
    const imgSrc = initialImage || placeholder;

    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.productId = product.id;

    const priceHtml = product.originalPrice
      ? `<span class="product-price-old">${formatPrice(product.originalPrice)}</span> <span class="product-price">${formatPrice(product.price)}</span>`
      : `<span class="product-price">${formatPrice(product.price)}</span>`;

    card.innerHTML = `
      <div class="product-image-wrapper">
        <img class="product-image" data-role="product-image" src="${imgSrc}" alt="${displayName} - ${selectedColorDisplay}" />
      </div>
      <div class="product-info">
        <div>
          <h3 class="product-title">${displayName}</h3>
          <div class="product-price-wrap">${priceHtml}</div>
          <div class="product-meta">
            <div>
              <div class="label">${T.cartItemColor}</div>
              <div class="color-selector" data-role="color-selector"></div>
            </div>
            <div>
              <div class="label">${T.cartItemQty}</div>
              <div class="quantity-selector" data-role="quantity-selector">
                <button type="button" class="quantity-btn" data-action="decrease">−</button>
                <div class="quantity-value" data-role="quantity-value">${quantity}</div>
                <button type="button" class="quantity-btn" data-action="increase">+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="product-actions">
          <button type="button" class="btn-primary" data-role="add-to-cart">
            ${T.addToCart}
          </button>
        </div>
      </div>
    `;

    const colorContainer = card.querySelector('[data-role="color-selector"]');
    const productImg = card.querySelector('[data-role="product-image"]');
    displayColors.forEach((displayColor, index) => {
      const colorKey = product.colors[index];
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "color-pill" + (index === 0 ? " selected" : "");
      pill.textContent = displayColor;
      pill.dataset.color = colorKey;
      pill.addEventListener("click", () => {
        colorContainer
          .querySelectorAll(".color-pill")
          .forEach((el) => el.classList.remove("selected"));
        pill.classList.add("selected");
        if (productImg) {
          productImg.src = imageByColor[colorKey] || placeholder;
          productImg.alt = displayName + " - " + displayColor;
        }
      });
      colorContainer.appendChild(pill);
    });

    const qtySelector = card.querySelector('[data-role="quantity-selector"]');
    const qtyValue = card.querySelector('[data-role="quantity-value"]');

    qtySelector.addEventListener("click", (e) => {
      const btn = e.target.closest(".quantity-btn");
      if (!btn) return;
      let current = parseInt(qtyValue.textContent, 10) || 1;
      const action = btn.dataset.action;
      if (action === "decrease" && current > 1) current -= 1;
      if (action === "increase" && current < 20) current += 1;
      qtyValue.textContent = String(current);
    });

    card.querySelector('[data-role="add-to-cart"]').addEventListener("click", () => {
      const selectedPill = colorContainer.querySelector(".color-pill.selected");
      const color = selectedPill ? selectedPill.dataset.color : selectedColorKey;
      const qty = parseInt(qtyValue.textContent, 10) || 1;
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        color,
        quantity: qty,
      });
    });

    container.appendChild(card);
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

async function submitOrder(event) {
  event.preventDefault();
  if (cart.length === 0) {
    showToast(getT().toastMinOne);
    return;
  }

  const T = getT();
  const form = event.target;

  const fullName = form.client_fullname.value.trim();
  const { nom, prenom } = splitFullName(fullName);
  const telephoneRaw = form.telephone.value.trim();
  const ville = form.ville.value.trim();
  const communeEl = document.getElementById("commune");
  const commune = communeEl ? communeEl.value.trim() : "";
  const adresse = form.adresse.value.trim();
  const livraison = form.livraison.value;

  if (!nom || !prenom || !telephoneRaw || !ville || !commune || !adresse || !livraison) {
    showToast(T.toastRequiredFields);
    return;
  }

  const telephoneDigits = telephoneRaw.replace(/\D/g, "");
  const phonePattern = /^(05|06|07)\d{8}$/;
  if (!phonePattern.test(telephoneDigits)) {
    showToast(T.toastPhoneInvalid);
    document.getElementById("telephone")?.focus();
    return;
  }

  const sub = productsSubtotal();
  const frais = getShippingAmount(ville, livraison);
  const fraisNum = frais != null ? frais : null;
  const totalCommande = sub + (fraisNum != null ? fraisNum : 0);

  let remarque = "";
  if (fraisNum == null && ville) {
    remarque = `${T.labelLineShipping}: ${T.shippingUnavailable}`;
  }

  const payload = {
    nom,
    prenom,
    telephone: telephoneDigits,
    ville,
    commune,
    adresse,
    livraison,
    frais_livraison: fraisNum,
    total_commande: totalCommande,
    remarque: remarque || null,
    produits: cart.map((item) => ({
      id: item.id,
      name: item.name,
      color: item.color,
      quantity: item.quantity,
      price: item.price,
    })),
  };

  try {
    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Erreur serveur");

    showToast(getT().toastSuccess);
    cart = [];
    renderCartSummary();
    form.reset();
    updateCheckoutTotals();
    const villeSelect = document.getElementById("ville");
    if (villeSelect && villeSelect.options.length > 0) {
      villeSelect.options[0].text = getT().villePlaceholder;
    }
  } catch (err) {
    console.error(err);
    showToast(getT().toastError);
  }
}

function setLanguage(lang) {
  if (lang !== "fr" && lang !== "ar") return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  applyStaticTranslations();
  renderProducts();
  renderCartSummary();
}

document.addEventListener("DOMContentLoaded", () => {
  applyStaticTranslations();
  renderProducts();
  renderCartSummary();

  const villeSelect = document.getElementById("ville");
  const livraisonSelect = document.getElementById("livraison");
  if (villeSelect) villeSelect.addEventListener("change", updateCheckoutTotals);
  if (livraisonSelect) livraisonSelect.addEventListener("change", updateCheckoutTotals);

  document.querySelectorAll(".lang-btn[data-lang]").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  const hamburger = document.getElementById("hamburger");
  const langSwitcher = document.getElementById("lang-switcher");
  if (hamburger && langSwitcher) {
    hamburger.addEventListener("click", () => {
      const open = langSwitcher.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", open);
    });
    langSwitcher.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("click", () => {
        langSwitcher.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  document.getElementById("order-form").addEventListener("submit", submitOrder);
});
