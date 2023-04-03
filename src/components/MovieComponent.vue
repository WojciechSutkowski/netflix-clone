<script setup lang="ts">
import { timeConverter } from '../helpers/timeConverter'
import { defineProps } from 'vue';
import { ApiTypes, MovieApiTypes } from '../types/apiTypes';

const movie = defineProps<{
  data: MovieApiTypes
}>()

const closeModal = () =>{
  const id = `#${movie.data.key}`
    // console.log(id);
  const el = document.querySelector(id);
    console.log(el);
    el?.classList.add('hide')
}

</script>

<template>
  <div style="background-color: red">
    <h2>{{ movie.data.title }}</h2>
    <p>{{ movie.data.year }}</p>
    <p>+{{ movie.data.maturityRating }}</p>
    <p>{{ movie.data.description }}</p>
    <img alt="cover" :src=movie.data.cover>
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
  </div>
</template>

<style lang="scss" scoped></style>
