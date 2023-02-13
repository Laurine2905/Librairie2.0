<script setup>
// -- handle pour supprimer une chose à prtir de l'index dans la liste
import Livre2 from "@/components/Livre2.vue";
defineEmits(["getListeLivre"]);
function handlerDelete(id) {
  console.log(id);
  const url =
    "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/31/livres";
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
</script>

<template>
  <p>livre modification : supprimer un livre</p>
</template>

<style>
</style>