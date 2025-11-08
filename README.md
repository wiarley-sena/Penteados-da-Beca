# Penteados Beca

Pequeno site de portfólio com galeria e mapa de localização usando Leaflet + Nominatim (OpenStreetMap).

## O que tem aqui
- HTML semântico para as seções (início, sobre, serviços/penteados, localização).
- CSS responsivo em `src/css/`.
- Código JavaScript em `src/js/`, incluindo consumo do Nominatim e integração com Leaflet (`src/js/apis.js`).
- Imagens em `src/images/`.

## Pré-requisitos
- Um navegador moderno (Chrome, Firefox, Edge).
- Servidor estático local para abrir `src/index.html` (recomendado). Não abra o arquivo via `file://` — o Leaflet e fetch funcionam melhor por HTTP.

Opções simples:
- VSCode + extensão Live Server
- Python 3: `python -m http.server 8000` (execute no diretório raiz do projeto)

## Como rodar localmente
1. Abra um terminal na pasta do projeto (`c:\projetos-pessoais\penteados-beca`).
2. Inicie um servidor estático. Por exemplo, com Python no PowerShell:

```powershell
python -m http.server 8000
```

3. Abra no navegador: `http://localhost:8000/src/index.html`.

> Alternativa: use Live Server do VSCode e abra a página `src/index.html`.

## Estrutura do projeto (resumo)
- `src/index.html` — página principal (semântica: `nav`, `main`, `section`, `footer`).
- `src/css/` — arquivos CSS (`reset.css`, `estilo.css`, `responsivo.css`, `leaflet.css`).
- `src/js/` — scripts JS (carrossel, `apis.js`, etc.).
- `src/images/` — imagens usadas no site.

## Notas sobre Leaflet
- Leaflet é uma biblioteca de mapas para o navegador que expõe o objeto global `L` quando o script do Leaflet é carregado (via CDN ou bundle).
- No HTML do projeto incluímos o CSS e o JS do Leaflet via CDN antes do `apis.js` — isso garante que `L` esteja disponível.
- `L.map('map')` cria a instância do mapa dentro do `<div id="map">`.
- `setView([lat, lon], zoom)` centraliza o mapa.
- `L.tileLayer(...).addTo(mapa)` adiciona o mapa base (tiles do OpenStreetMap).

## Notas sobre Nominatim (OpenStreetMap)
- O projeto usa o serviço Nominatim para converter texto de endereço em coordenadas (geocoding).
- Regras importantes:
  - Não abuse do serviço público. Há limites de uso e políticas de fair use.
  - Para produção, recomendo hospedagem própria de geocoding ou um serviço pago.
  - O Nominatim pede que você identifique seu aplicativo (User-Agent) e/ou use proxy server-side para requisições mais controladas.

## Troubleshooting (erros comuns)
- Erro `ReferenceError: L is not defined`:
  - Significa que o Leaflet não foi carregado antes do `apis.js`. Verifique a ordem dos `<script>` no `index.html` (Leaflet deve vir antes).

- Erro `Cannot read property 'map' of null` ou mapa não aparece:
  - Confirme que existe `<div id="map"></div>` no HTML e que o CSS define uma altura (`#map { height: 600px; }`).
  - Certifique-se que o script roda após o DOM estar carregado (coloque scripts no final do `body` ou use `DOMContentLoaded`).

- `fetch` falha com erro de rede / CORS:
  - Verifique o console → Network. CORS no Nominatim pode bloquear requisições diretas dependendo do ambiente.
  - Em casos de CORS ou requisitos de headers, mova a chamada para um backend (proxy) que inclua headers apropriados.

## Como interpretar erros e depurar
- Abra o Console do navegador (F12) e a aba Network.
- Leia o stack trace: ele mostra arquivo e número da linha onde ocorreu o erro.
- Use `console.log` para inspecionar valores antes do ponto de falha.
- Verifique a ordem de carregamento dos scripts: bibliotecas (Leaflet) primeiro; scripts que dependem delas depois.

## Referências úteis
- Leaflet: https://leafletjs.com/
- Nominatim usage policy: https://operations.osmfoundation.org/policies/nominatim/
- MDN fetch/Promise: https://developer.mozilla.org/

