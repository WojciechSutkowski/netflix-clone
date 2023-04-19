<script setup lang="ts">
import { timeConverter } from '../helpers/timeConverter'
import { defineProps } from 'vue';
import { ApiTypes, StandupApiTypes } from '../types/apiTypes';

const standup = defineProps<{
  data: StandupApiTypes
}>()

const closeModal = () =>{
  const id = `#${standup.data.key}`
  const overlay = document.querySelector('.overlay');
  const el = document.querySelector(id);
    console.log(el);
    el?.classList.add('hide')
    overlay?.classList.add('hide')
}

</script>

<template>
  <dialog class="modal">
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
