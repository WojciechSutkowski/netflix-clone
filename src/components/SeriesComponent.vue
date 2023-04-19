<script setup lang="ts">
import { seriesNumberConverter } from '../helpers/seriesNumberConverter'
import { defineProps } from 'vue'
import { Movie } from '../types/store'
import { ApiTypes, SeriesApiTypes } from '../types/apiTypes'

const series = defineProps<{
  data: SeriesApiTypes
}>()

const closeModal = () =>{
  const id = `#${series.data.key}`
  const overlay = document.querySelector('.overlay');
  const el = document.querySelector(id);
    console.log(el);
    el?.classList.add('hide')
    overlay?.classList.add('hide')
}
</script>

<template>
  <dialog class="modal">
    <h2>{{ series.data.title }}</h2>
    <p>{{ series.data.year }}</p>
    <p>+{{ series.data.maturityRating }}</p>
    <p>{{ series.data.description }}</p>
    <img alt="cover" :src="series.data.cover" />
    <p>{{ series.data.type.typeName }}</p>
    <pre>
      {{ seriesNumberConverter(series.data.type.seasons?.length) }}
    </pre>
    <p>Seasons: {{ series.data.type.seasons }}</p>
    <p>Creators: {{ series.data.type.creators }}</p>
    <p>Cast: {{ series.data.type.cast }}</p>
    <p>Genres:{{ series.data.type.genres }}</p>
    <p>Categories:{{ series.data.type.categories }}</p>
    <button @click="closeModal">Close</button>
  </dialog>
</template>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;

  background-color: white;
  padding: 6rem;
  border-radius: 5px;
  box-shadow: 0 3rem 5rem rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.cover {
  width: 40rem;
}</style>
