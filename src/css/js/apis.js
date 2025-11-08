// Verifica se Leaflet (L) está disponível — evita ReferenceError quando executado pelo Node
if (typeof L === 'undefined') {
  console.error('Leaflet (L) não está definido. Este script precisa rodar no navegador com Leaflet carregado.');
  // Se estiver rodando no Node, encerra com código de erro
  if (typeof process !== 'undefined' && process.exit) process.exit(1);
}
const q = encodeURIComponent('Fortaleza, Ceará, Brasil');

const baseUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${q}`;

// Inicializa o mapa no elemento com id="map"
const mapa = L.map('map').setView([-3.81115, -38.56891], 13);

// Adiciona o mapa base do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(mapa);

async function requisicaoApi () {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
      console.log('Resultado da API:', data);
    } catch (error) {
      console.error('Erro ao buscar localização:', error);
    }

    L.marker([-3.81115, -38.56891])
      .addTo(mapa)
      .bindPopup("Rua Dom Oscar Romero, 11 Mondubim - Fortaleza/Ceará")
      .openPopup();
  }
  requisicaoApi();
