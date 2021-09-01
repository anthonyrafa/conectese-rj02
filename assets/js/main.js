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