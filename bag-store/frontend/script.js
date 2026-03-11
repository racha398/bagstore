// Configuration: replace this with your WhatsApp number (without + or leading zeros)
// Example for Algeria: "213612345678"
const WHATSAPP_NUMBER = "213661130341";

const products = [
  {
    id: 1,
    name: "Sac",
    nameAr: "حقيبة",
    price: 2900,
    originalPrice: 3500,
    colors: ["Noir", "Marron", "Bordeaux"],
    colorsAr: ["أسود", "بني", "بوردو"],
    images: {
      Noir: "img/sac-noir.jpg",
      Marron: "img/sac-marron.jpg",
Bordeaux: "img/sac-bordeaux.jpg",
    },
  },
];

// Traductions FR / AR
const t = {
  fr: {
    siteTitle: "Sacs Élégants",
    introTitle: "Choisissez votre sac préféré",
    cartTitle: "Votre panier",
    cartEmpty: "Votre panier est vide.",
    total: "Total",
    orderButton: "Commander",
    orderFormTitle: "Informations de commande",
    labelNom: "Nom",
    labelPrenom: "Prénom",
    labelTelephone: "Numéro de téléphone",
    labelVille: "Wilaya",
    villePlaceholder: "Choisir une wilaya",
    labelAdresse: "Adresse complète",
    adressePlaceholder: "Ex: 12 rue..., quartier..., code postal",
    labelLivraison: "Type de livraison",
    livraisonDomicile: "Livraison à domicile",
    livraisonRelais: "Point relais",
    labelRemarque: "Remarque (optionnel)",
    remarquePlaceholder: "Ex: couleur préférée, créneau de livraison...",
    submitOrder: "Confirmer la commande",
    colorLabel: "Couleur",
    quantityLabel: "Quantité",
    addToCart: "Ajouter au panier",
    closeOverlay: "Fermer",
    article: " article",
    articles: " articles",
    toastAdded: "Produit ajouté au panier",
    toastMinOne: "Ajoutez au moins un produit.",
    toastAdresseRequired: "Veuillez renseigner l'adresse.",
    toastRequiredFields: "Veuillez remplir tous les champs obligatoires.",
    toastPhoneInvalid:
      "Numéro de téléphone invalide. Il doit commencer par 05, 06 ou 07 et contenir 10 chiffres.",
    toastSuccess: "Commande envoyée avec succès",
    toastError: "Impossible d'envoyer la commande.",
    cartItemColor: "Couleur",
    cartItemQty: "Qté",
    copyright: "© 2025 Sacs Élégants. Tous droits réservés.",
  },
  ar: {
    siteTitle: "حقائب أنيقة",
    introTitle: "اختر حقيبتك المفضلة",
    cartTitle: "سلتك",
    cartEmpty: "سلتك فارغة.",
    total: "المجموع",
    orderButton: "تأكيد الطلب",
    orderFormTitle: "معلومات الطلب",
    labelNom: "الاسم",
    labelPrenom: "اللقب",
    labelTelephone: "رقم الهاتف",
    labelVille: "الولاية",
    villePlaceholder: "اختر الولاية",
    labelAdresse: "العنوان الكامل",
    adressePlaceholder: "مثال: الشارع، الحي، الرمز البريدي",
    labelLivraison: "نوع التوصيل",
    livraisonDomicile: "توصيل إلى المنزل",
    livraisonRelais: "نقطة relay",
    labelRemarque: "ملاحظة (اختياري)",
    remarquePlaceholder: "مثال: اللون المفضل، وقت التوصيل...",
    submitOrder: "تأكيد الطلب",
    colorLabel: "اللون",
    quantityLabel: "الكمية",
    addToCart: "أضف إلى السلة",
    closeOverlay: "إغلاق",
    article: " منتج",
    articles: " منتجات",
    toastAdded: "تمت إضافة المنتج إلى السلة",
    toastMinOne: "أضف منتجاً واحداً على الأقل.",
    toastAdresseRequired: "يرجى إدخال العنوان.",
    toastRequiredFields: "يرجى ملء جميع الخانات الإلزامية.",
    toastPhoneInvalid:
      "رقم الهاتف غير صالح. يجب أن يبدأ بـ 05 أو 06 أو 07 ويتكون من 10 أرقام.",
    toastSuccess: "تم إرسال الطلب بنجاح",
    toastError: "تعذر إرسال الطلب.",
    cartItemColor: "اللون",
    cartItemQty: "الكمية",
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
  set("cart-title", T.cartTitle);
  set("cart-total-label", T.total);
  set("order-form-title", T.orderFormTitle);
  set("submit-order-btn", T.submitOrder);
  set("label-nom", T.labelNom);
  set("label-prenom", T.labelPrenom);
  set("label-telephone", T.labelTelephone);
  set("label-ville", T.labelVille);
  const villeSelect = document.getElementById("ville");
  if (villeSelect && villeSelect.options.length > 0) {
    villeSelect.options[0].text = T.villePlaceholder;
  }
  set("label-adresse", T.labelAdresse);
  set("label-livraison", T.labelLivraison);
  set("label-remarque", T.labelRemarque);
  set("order-button", T.orderButton);
  set("footer-copyright", T.copyright);

  const adresseInput = document.getElementById("adresse");
  if (adresseInput) adresseInput.placeholder = T.adressePlaceholder;

  const livraison = document.getElementById("livraison");
  if (livraison && livraison.options.length >= 2) {
    livraison.options[0].text = T.livraisonDomicile;
    livraison.options[1].text = T.livraisonRelais;
  }
  const remarque = document.getElementById("remarque");
  if (remarque) remarque.placeholder = T.remarquePlaceholder;

  const closeBtn = document.getElementById("overlay-close");
  if (closeBtn) closeBtn.setAttribute("aria-label", T.closeOverlay);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === currentLang);
  });
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
              <div class="label">${T.colorLabel}</div>
              <div class="color-selector" data-role="color-selector"></div>
            </div>
            <div>
              <div class="label">${T.quantityLabel}</div>
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

    const addBtn = card.querySelector('[data-role="add-to-cart"]');
    addBtn.addEventListener("click", () => {
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

function addToCart(item) {
  const existing = cart.find(
    (p) => p.id === item.id && p.color === item.color
  );
  if (existing) {
    existing.quantity += item.quantity;
  } else {
    cart.push({ ...item });
  }
  updateCartUI();
  showToast(getT().toastAdded);
}

function getDisplayNameForCartItem(item) {
  const product = products.find((p) => p.id === item.id);
  return product ? getProductDisplayName(product) : item.name;
}

function getDisplayColorForCartItem(item) {
  const product = products.find((p) => p.id === item.id);
  if (!product) return item.color;
  const idx = product.colors.indexOf(item.color);
  if (idx < 0) return item.color;
  const displayColors = getProductDisplayColors(product);
  return displayColors[idx] || item.color;
}

function updateCartUI() {
  const itemsContainer = document.getElementById("cart-items");
  const countLabel = document.getElementById("cart-count");
  const totalLabel = document.getElementById("cart-total");
  const orderButton = document.getElementById("order-button");
  const T = getT();

  if (cart.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.className = "cart-empty";
    emptyMsg.id = "cart-empty-msg";
    emptyMsg.textContent = T.cartEmpty;
    itemsContainer.innerHTML = "";
    itemsContainer.appendChild(emptyMsg);
    countLabel.textContent = "0" + T.article;
    totalLabel.textContent = "0 DA";
    orderButton.textContent = T.orderButton;
    orderButton.disabled = true;
    return;
  }

  let totalItems = 0;
  let totalPrice = 0;

  itemsContainer.innerHTML = "";
  cart.forEach((item) => {
    totalItems += item.quantity;
    totalPrice += item.price * item.quantity;
    const displayName = getDisplayNameForCartItem(item);
    const displayColor = getDisplayColorForCartItem(item);

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-item-main">
        <div class="cart-item-title">${displayName}</div>
        <div class="cart-item-meta">
          ${T.cartItemColor}: ${displayColor} · ${T.cartItemQty}: ${item.quantity}
        </div>
      </div>
      <div class="cart-item-price">${formatPrice(
        item.price * item.quantity
      )}</div>
    `;
    itemsContainer.appendChild(row);
  });

  countLabel.textContent =
    totalItems + (totalItems > 1 ? T.articles : T.article);
  totalLabel.textContent = formatPrice(totalPrice);
  orderButton.textContent = T.orderButton;
  orderButton.disabled = false;
}

function openOverlay() {
  if (cart.length === 0) return;
  const overlay = document.getElementById("order-overlay");
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
}

function closeOverlay() {
  const overlay = document.getElementById("order-overlay");
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  setTimeout(() => {
    toast.classList.remove("visible");
  }, 2600);
}

function buildWhatsappMessage(orderPayload) {
  const lines = [];
  lines.push("Nouvelle commande");
  lines.push("");
  lines.push(`Nom: ${orderPayload.nom} ${orderPayload.prenom}`);
  lines.push(`Téléphone: ${orderPayload.telephone}`);
  lines.push(`Ville: ${orderPayload.ville}`);
  lines.push("");
  lines.push("Produits commandés:");
  orderPayload.produits.forEach((p) => {
    lines.push(
      `- ${p.name} | Couleur: ${p.color} | Quantité: ${p.quantity}`
    );
  });
  lines.push("");
  lines.push(`Livraison: ${orderPayload.livraison}`);
  lines.push(`Adresse: ${orderPayload.adresse}`);
  if (orderPayload.remarque) {
    lines.push("");
    lines.push(`Remarque: ${orderPayload.remarque}`);
  }
  return lines.join("\n");
}

async function submitOrder(event) {
  event.preventDefault();
  if (cart.length === 0) {
    showToast(getT().toastMinOne);
    return;
  }

  const T = getT();
  const form = event.target;

  const nom = form.nom.value.trim();
  const prenom = form.prenom.value.trim();
  const telephoneRaw = form.telephone.value.trim();
  const ville = form.ville.value.trim();
  const adresse = form.adresse.value.trim();
  const livraison = form.livraison.value;
  const remarque = form.remarque.value.trim();

  if (!nom || !prenom || !telephoneRaw || !ville || !adresse || !livraison) {
    showToast(T.toastRequiredFields);
    return;
  }

  const telephoneDigits = telephoneRaw.replace(/\D/g, "");
  const phonePattern = /^(05|06|07)\d{8}$/;
  if (!phonePattern.test(telephoneDigits)) {
    showToast(T.toastPhoneInvalid);
    const telInput = document.getElementById("telephone");
    if (telInput) {
      telInput.focus();
    }
    return;
  }

  const payload = {
    nom,
    prenom,
    telephone: telephoneDigits,
    ville,
    adresse,
    livraison,
    remarque,
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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Erreur serveur");
    }

    showToast(getT().toastSuccess);
    closeOverlay();
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
  updateCartUI();
}

document.addEventListener("DOMContentLoaded", () => {
  applyStaticTranslations();
  renderProducts();
  updateCartUI();

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

  document
    .getElementById("order-button")
    .addEventListener("click", openOverlay);
  document
    .getElementById("overlay-close")
    .addEventListener("click", closeOverlay);

  document
    .getElementById("order-form")
    .addEventListener("submit", submitOrder);

  document
    .getElementById("order-overlay")
    .addEventListener("click", (e) => {
      if (e.target.id === "order-overlay") {
        closeOverlay();
      }
    });
});

