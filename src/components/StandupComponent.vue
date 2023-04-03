<script setup lang="ts">
import { timeConverter } from '../helpers/timeConverter'
import { defineProps } from 'vue';
import { ApiTypes, StandupApiTypes } from '../types/apiTypes';

const standup = defineProps<{
  data: StandupApiTypes
}>()

const closeModal = () =>{
  const id = `#${standup.data.key}`
    // console.log(id);
  const el = document.querySelector(id);
    console.log(el);
    el?.classList.add('hide')
}

</script>

<template>
  <div style="background-color: blue">
    <h2>{{ standup.data.title }}</h2>
    <p>{{ standup.data.year }}</p>
    <p>+{{ standup.data.maturityRating }}</p>
    <p>{{ standup.data.description }}</p>
    <img alt="cover" :src=standup.data.cover>
    <p>Time: {{ timeConverter(standup.data.type.time) }}</p>
    <p>{{ standup.data.type.typeName }}</p>
    <p>Script: {{ standup.data.type.script }}</p>
    <p>Cast: {{ standup.data.type.cast }}</p>
    <p>Genres: {{ standup.data.type.genres }}</p>
    <p>Categories: {{ standup.data.type.categories }}</p>
    <p>
      {{ timeConverter(standup.data.type.time) }}
    </p>    <button @click="closeModal">Close</button>
  </div>
</template>

<style lang="scss" scoped></style>
