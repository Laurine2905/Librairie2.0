<script setup>
// Rechercher un livre dans la librairie
// ======> la fonction affiche les livres vérifiant le critère de recherche
function rechercherLivre(search) {
  console.log(search);
  const url =
    "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/31/livres?search=";
  const fetchOptions = { method: "GET" };
  fetch(url + search, fetchOptions)
    .then((response) => {
      console.log("test");
      return response.json();
    })
    .then((dataJSON) => {
      let livres = dataJSON.results;
      console.log(livres);
      let texteHTML = ""; // variable pour contenir le html généré
      for (let l of livres) {
        // boucle sur le tableau des livres
        texteHTML = texteHTML + "<li>" + l.titre + "</li>";
      }
      // insérer le HTML dans la liste <ul id="liste"></ul> du fichier index.html
      document.getElementById("liste2").innerHTML = texteHTML;
    })
    .catch((error) => console.log(error));
}
</script>


<template>
  <h1>Rechercher un livre</h1>
  <input type="text" id="nom" v-model="search" placeholder="nom du livre" />
  <button @click="rechercherLivre(search)">Rechercher</button>

  <ul id="liste2"></ul>
</template>


