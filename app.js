const WHATSAPP_NUMBER = "56992397238";

const whatsappText = encodeURIComponent(
`Hola, quiero contar mi sueño.

País:
Nombre o anónimo:
Mi sueño:
Autorizo que pueda ser publicado: Sí`
);

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

document.getElementById("whatsappBtn").href = whatsappLink;
document.getElementById("whatsappBtn2").href = whatsappLink;

const dreams = [
  {
    title: "La casa que respiraba",
    country: "Chile",
    text: "Soñé que entraba a una casa antigua donde las paredes parecían respirar.",
    reel: true
  },
  {
    title: "El tren sin destino",
    country: "Argentina",
    text: "Un tren nocturno cruzaba ciudades que nunca había visto.",
    reel: true
  },
  {
    title: "El mar sobre la ciudad",
    country: "Perú",
    text: "La ciudad estaba bajo el agua, pero todos podían caminar y respirar.",
    reel: false
  },
  {
    title: "La llamada del sueño",
    country: "México",
    text: "Recibí una llamada dentro del sueño. La voz decía que ya nos conocíamos.",
    reel: true
  },
  {
    title: "El bosque de puertas",
    country: "Colombia",
    text: "En un bosque aparecían puertas flotando, cada una llevaba a un recuerdo.",
    reel: false
  }
];

const dreamList = document.getElementById("dreamList");
const buttons = document.querySelectorAll(".filters button");

function renderDreams(country = "todos") {
  dreamList.innerHTML = "";

  const filtered = country === "todos"
    ? dreams
    : dreams.filter(dream => dream.country === country);

  filtered.forEach(dream => {
    const card = document.createElement("article");
    card.className = "dream-card";

    card.innerHTML = `
      <h3>${dream.title}</h3>
      <p class="country">${dream.country}</p>
      <p>${dream.text}</p>
      ${dream.reel ? '<span class="reel">Potencial para Reel</span>' : ''}
    `;

    dreamList.appendChild(card);
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderDreams(button.dataset.country);
  });
});

renderDreams();