<script setup lang="ts">
import { seriesNumberConverter } from '../helpers/seriesNumberConverter'
import { defineProps } from 'vue'
import { Movie } from '../types/store'
import { ApiTypes, SeriesApiTypes } from '../types/apiTypes'

const series = defineProps<{
  data: SeriesApiTypes
}>()

const closeModal = () => {
  const id = `#${series.data.key}`
  // console.log(id);
  const el = document.querySelector(id)
  console.log(el)
  el?.classList.add('hide')
}
</script>

<template>
  <div style="background-color: green">
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
  </div>
</template>

<style lang="scss" scoped></style>
