"use strict";
// Padrão camelCase
// Manipulação do DOM -> Document Object Model
// Toggle -> Interruptor

const menuHotDog = document.querySelector("#menu-hotdog");
const body = document.querySelector("body");

menuHotDog.addEventListener("click", (e) => {

    e.preventDefault();

    body.classList.toggle("open");

});

function createBlock(galleryElement) {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="gallery-picture">
            <img src="assets/images/gallery/bondinho_pao_acucar.jpg" alt="Bondinho Pão de Açúcar" />
            <div class="gallery-ellipse">
                <svg width="24" height="24" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 27L12.3975 25.0578C4.93 18.1864 0 13.6545 0 8.09264C0 3.56076 3.509 0 7.975 0C10.498 0 12.9195 1.19183 14.5 3.0752C16.0805 1.19183 18.502 0 21.025 0C25.491 0 29 3.56076 29 8.09264C29 13.6545 24.07 18.1864 16.6025 25.0725L14.5 27Z" fill="#333333A0"/>
                </svg>
            </div>
        </div>
        <h2>Bondinho Pão de Açúcar</h2>
        <div class="card-location">
            <svg width="24" height="24" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#C7C7C8"/>
            </svg>
            <h3>Rio de Janeiro - RJ</h3>
        </div>
    `;

    galleryElement.appendChild(card);

}

function createGallery(galleryEl) {

    // Criar a div com a classe card automaticamente
    createBlock(galleryEl);
    createBlock(galleryEl);
    createBlock(galleryEl);

}

const carouselGallery = document.querySelector(".carousel-gallery");

createGallery(carouselGallery);

/*
INFORMAÇÕES SOBRE PONTOS TURÍSTICO

Nome: Maracanã
Site: https://rio.gov.br
Endereço: Avenida do Maracanã, 3000, Rio de Janeiro, RJ, 012345-987
Imagem: maracana.jpg
Ingresso: Quanto custa o ingresso? R$ 30,00 meia, R$ 60,00
Descrição: Estádio de Futebol muito conhecido onde são disputadas várias partidas
Longitude e Latitude: @-22.9120985,-43.2307563,17.75z

*/