<script setup>
import { reactive, onMounted } from "vue";

// -- la classe Chose
import Chose from "../Chose";
// -- le sous composants utilisés
import LivreItem from "./LivreItem.vue";

// -- la liste des choses --> dans le state
// --> donnée réactive = l'affichage sera actualisée
//      automatiquement à chque cght dans la liste
const listeC = reactive([]);
//url de l'api pour récupérer les livres
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/31/livres";

// Afficher le contenu de la librairie
// ======> la fonction qui récupère les livres et les affiche
function getListeLivre() {
  let fetchOptions = { method: "GET" }; // On utilise GET pour récupéré les infos ici le titre de chaque livre

  fetch(url, fetchOptions)
    .then((response) => {
      console.log("test");
      // -- réponse au sens du protocole HTTP
      return response.json(); // -- extraire les données au format JSON
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées au format JSON
      console.log("test2");
      let livres = dataJSON;
      let texteHTML = ""; // variable pour contenir le html généré
      for (let l of livres) {
        // boucle sur le tableau des livres
        texteHTML = texteHTML + "<li>" + l.titre + "</li>";
      }
      // insérer le HTML dans la liste <ul id="liste"></ul> du fichier index.html
      document.getElementById("liste").innerHTML = texteHTML;
    })
    // gestion des erreurs
    .catch((error) => console.log(error));
}
onMounted(() => {
  getListeLivre();
});

function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getListeLivre();
    })
    .catch((error) => console.log(error));
}
// a modifier une fois qu'on aura les boutons avec un add envent listener
getListeLivre();
</script>

<template>
  <h1>Liste des livres</h1>
  <ul id="liste"></ul>
  <ul>
    <li v-for="(chose, index) of listeC" :key="chose.id">
      {{ chose.pourAfficher() }}
      <button @click="handlerDelete(index)">Supprimer</button>
    </li>
  </ul>
</template>

<style>
</style>