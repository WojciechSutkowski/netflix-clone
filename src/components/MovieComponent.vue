<script setup lang="ts">
import { timeConverter } from '../helpers/timeConverter'
import { defineProps } from 'vue';
import { ApiTypes, MovieApiTypes } from '../types/apiTypes';

const movie = defineProps<{
  data: MovieApiTypes
}>()


const closeModal = () =>{
  const id = `#${movie.data.key}`
  const overlay = document.querySelector('.overlay');
  const el = document.querySelector(id);
    console.log(el);
    el?.classList.add('hide')
    overlay?.classList.add('hide')
}

</script>

<template>
  <dialog class="modal">
    <h2>{{ movie.data.title }}</h2>
    <p>{{ movie.data.year }}</p>
    <p>+{{ movie.data.maturityRating }}</p>
    <p>{{ movie.data.description }}</p>
    <img class="cover" alt="cover" :src=movie.data.cover>
    <p>Time: {{ timeConverter(movie.data.type.time) }}</p>
    <p>{{ movie.data.type.typeName }}</p>
    <p>Director: {{ movie.data.type.director }}</p>
    <p>Script: {{ movie.data.type.script }}</p>
    <p>Cast: {{ movie.data.type.cast }}</p>
    <p>Genres: {{ movie.data.type.genres }}</p>
    <p>Categories: {{ movie.data.type.categories }}</p>
    <p>
      {{ timeConverter(movie.data.type.time) }}
    </p>
    <button @click="closeModal">Close</button>
  </dialog>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 15%);
  width: 70%;

  background-color: white;
  padding: 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.cover {
  width: 40rem;
}
</style>
