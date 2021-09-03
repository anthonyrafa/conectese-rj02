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

const database = [{
    name: "Bondinho Pão de Açúcar",
    site: "http://www.bondinho.com.br/",
    address: "Av. Pasteur, 520 - Urca",
    city: "Rio de Janeiro",
    state: "RJ",
    cep: "22290-240",
    imageName: "bondinho_pao_acucar.jpg",
    ticket: {
        inteira: 114.00,
        meia: 60.00
    },
    description: "Debruçado sobre a Baía de Guanabara, esse morro é alcançado por teleférico e oferece magnífica vista.",
    longitudeLatitude: "@-22.9557706,-43.2020016,13z"
}, {
    name: "Museu do Amanhã",
    site: "https://museudoamanha.org.br/",
    address: "Praça Mauá, 1 - Centro",
    city: "Rio de Janeiro",
    state: "RJ",
    cep: "20081-240",
    imageName: "museu_do_amanha.jpg",
    ticket: {
        inteira: 30.00,
        meia: 15.00
    },
    description: "Museu de ciências aplicadas que explora as oportunidades e os desafios que a humanidade terá de enfrentar nas próximas décadas a partir das perspectivas da sustentabilidade e da convivência.",
    longitudeLatitude: "@-22.8943676,-43.1817211,17z"
}, {
    name: "Corcovado",
    site: "https://corcovado.com.br/",
    address: "Praça Mauá, 1 - Centro",
    city: "Rio de Janeiro",
    state: "RJ",
    cep: "20081-240",
    imageName: "corcovado.jpg",
    ticket: {
        inteira: 30.00,
        meia: 15.00
    },
    description: "O Corcovado é um dos morros da cidade do Rio de Janeiro, célebre no Brasil e no mundo pela sua estátua do Cristo Redentor de 38 metros de altura.",
    longitudeLatitude: "@-22.8943676,-43.1817211,17z"
}, {
    name: "Praia de Copacabana",
    site: "https://praiacopacabana.com.br/",
    address: "Praça Mauá, 1 - Centro",
    city: "Rio de Janeiro",
    state: "RJ",
    cep: "20081-240",
    imageName: "praia_copacabana.jpg",
    ticket: {
        inteira: 30.00,
        meia: 15.00
    },
    description: "Praia famosa de 3,5 km com extensa faixa de areia, calçadão movimentado, quiosques de comida e hotéis.",
    longitudeLatitude: "@-22.8943676,-43.1817211,17z"
}, {
    name: "Estádio do Maracanã",
    site: "https://estadiomaracana.com.br",
    address: "Praça Mauá, 1 - Centro",
    city: "Rio de Janeiro",
    state: "RJ",
    cep: "20081-240",
    imageName: "maracana.jpg",
    ticket: {
        inteira: 30.00,
        meia: 15.00
    },
    description: "Estádio Jornalista Mário Filho, mais conhecido como Maracanã, ou carinhosamente como Maraca, é um estádio de futebol localizado na Zona Norte da cidade brasileira do Rio de Janeiro.",
    longitudeLatitude: "@-22.8943676,-43.1817211,17z"
}, {
    name: "Parque Lage",
    site: "http://eavparquelage.rj.gov.br/",
    address: "Praça Mauá, 1 - Centro",
    city: "Rio de Janeiro",
    state: "RJ",
    cep: "20081-240",
    imageName: "parque_lage.jpg",
    ticket: {
        inteira: 30.00,
        meia: 15.00
    },
    description: "O Parque Henrique Lage é um parque público da cidade do Rio de Janeiro, localizado aos pés do morro do Corcovado, na rua Jardim Botânico.",
    longitudeLatitude: "@-22.8943676,-43.1817211,17z"
}];

function createBlock(galleryElement, location) {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="gallery-picture">
            <img src="assets/images/gallery/${location.imageName}" alt="${location.name}" />
            <div class="gallery-ellipse">
                <svg width="24" height="24" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 27L12.3975 25.0578C4.93 18.1864 0 13.6545 0 8.09264C0 3.56076 3.509 0 7.975 0C10.498 0 12.9195 1.19183 14.5 3.0752C16.0805 1.19183 18.502 0 21.025 0C25.491 0 29 3.56076 29 8.09264C29 13.6545 24.07 18.1864 16.6025 25.0725L14.5 27Z" fill="#333333A0"/>
                </svg>
            </div>
        </div>
        <h2>${location.name}</h2>
        <div class="card-location">
            <svg width="24" height="24" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#C7C7C8"/>
            </svg>
            <h3>${location.city} - ${location.state}</h3>
        </div>
    `;

    const galleryEllipse = card.querySelector(".gallery-ellipse");

    galleryEllipse.addEventListener("click", () => {

        galleryEllipse.classList.toggle("active");

    });

    galleryElement.appendChild(card);

}

function createGallery(database, galleryEl) {

    database.forEach(location => {

        createBlock(galleryEl, location);

    });

}

const carouselGallery = document.querySelectorAll(".carousel-gallery");

carouselGallery.forEach(el => {

    createGallery(database, el);

});

function initSlick(id) {
    $(`#${id}`).slick({
        slidesToShow: 5,
        slidesToScroll: 3,
        variableWidth: true,
        swipeToSlide: true,
        touchThreshold: 100,
        appendArrows: `#${id}`,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }            
        ]
    });
}

function removeActive(element) {

    element.forEach(el => {
        if (el.classList.contains("active")) {
            el.classList.remove("active");
        }
    });

}

const linksGallery = document.querySelectorAll(".link-slider a");

linksGallery.forEach(linkElement => {

    linkElement.addEventListener("click", event => {

        event.preventDefault();

        removeActive(linksGallery);

        linkElement.classList.add("active");

    });

})

$(document).on("ready", function() {

    carouselGallery.forEach(element => {

        initSlick(element.id);

    });    

});

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