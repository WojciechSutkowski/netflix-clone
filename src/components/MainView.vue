<script setup lang="ts">
import api from '../data/api'
import MovieComponent from './MovieComponent.vue'
import SeriesComponent from './SeriesComponent.vue'
import StandupComponent from './StandupComponent.vue'
import {
  MovieApiTypes,
  SeriesApiTypes,
  StandupApiTypes,
} from '../types/apiTypes'
import { ref } from 'vue'

// const [...data] = api.value

const getItem = <T>(T: string) =>
  api.value.filter((item) => item.type.typeName === T) as T[]

const movies = ref(getItem<MovieApiTypes>('Movie'))
const series = ref(getItem<SeriesApiTypes>('Series'))
const standups = ref(getItem<StandupApiTypes>('Standup'))

console.log(movies)
console.log(series)
console.log(standups)

const modal = (e: string) => {
  const id = `#${e}`
  console.log(id)

  const el = document.querySelector(id)
  console.log(el)
  el?.classList.remove('hide')
}
</script>

<template>
  <section class="hero">
    <nav class="nav">
      <a class="nav__logo" href="#">
        <img class="nav__logo--img" src="@/assets/logo.png" />
      </a>
      <ul class="nav__primary">
        <li class="nav__primary--option active">Strona główna</li>
        <li class="nav__primary--option">Filmy</li>
        <li class="nav__primary--option">Seriale</li>
        <li class="nav__primary--option">Programy</li>
        <li class="nav__primary--option">Nowe i popularne</li>
        <li class="nav__primary--option">Moja lista</li>
        <li class="nav__primary--option">Przeglądaj wg języka</li>
      </ul>
      <div class="nav__seconadry">
        <ion-icon name="search-outline"></ion-icon>
        <ion-icon name="notifications-outline"></ion-icon>
      </div>
    </nav>

  </section>
  <label>Movies</label>
  <ul class="list">
    <li v-for="el in movies">
      <img :src="el.cover" @click="modal(el.key)" />
      <MovieComponent :id="`${el.key}`" :data="el" class="hide" />
    </li>
  </ul>

  <label>Series</label>
  <ul class="list">
    <li v-for="el in series">
      <img :src="el.cover" @click="modal(el.key)" />
      <SeriesComponent :id="`${el.key}`" :data="el" class="hide" />
    </li>
  </ul>

  <label>Standups</label>
  <ul class="list">
    <li v-for="el in standups">
      <img :src="el.cover" @click="modal(el.key)" />
      <StandupComponent :id="`${el.key}`" :data="el" class="hide" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.nav {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 7rem;
  color: white;
  display: flex;
  background: transparent;

  &__logo {
    position: relative;
    
    &--img {
      max-width: 12rem;
    }
  }

  &__primary {
    list-style: none;
    display: flex;
    align-items: center;
    font-size: 1.4rem;

    &--option {
      margin-left: 2rem;
    }
  }
}

.hero {
  width: 100vw;
  height: 100%;
  background-repeat: no-repeat;
  background-image: url('@/assets/hero.jpeg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.active {
  font-weight: 500;
}
.hide {
  display: none;
}

.list {
  display: flex;
  list-style: none;
}
</style>
