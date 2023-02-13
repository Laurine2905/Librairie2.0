<script setup>
import { defineProps, defineEmits } from "vue";
// -- il faut déclarer les 2 params (props) du composant
defineProps(["chose", "indexc"]);
// -- les 2 events émis par ce composant
defineEmits(["deletec"]);
</script>

<template>
  <li>
    {{ chose.pourAfficher() }}
    <!-- au click sur le bouton, 
         on emet un événement dont on choisit le nom (ici deleteC)
         la fonction qui gèrera cet event aura en paramètre la valeur de index
    -->
    <button @click="$emit('deletec', indexc)">Supprimer</button>
  </li>
</template>

<style>
</style>