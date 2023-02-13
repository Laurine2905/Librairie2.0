<script setup>
//import Livre2 from "./components/Livre2.vue";
// A REVOIR
// AJOUTER un livre a la librairie

const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/31/livres";

// -- handler pour ajouter une nouvelle chose à partir
//    du libelle saisi dans le formulaire
//     qui se retrouve en paramétre
function handlerAdd(titre, qtestock, prix) {
  console.log(titre + " " + qtestock + " " + prix);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ titre: titre }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getListeLivre();
    })
    .catch((error) => console.log(error));
}
</script>

<template>
  <p>livre modification : ajouter un livre</p>
</template>

<style>
</style>