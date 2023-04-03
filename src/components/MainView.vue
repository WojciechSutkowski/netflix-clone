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
import { onMounted, ref } from 'vue'

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

onMounted(() => {
  const sectionHeroEl = document.querySelector('.nav-container') as Element
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0]

      if (ent.isIntersecting === false) {
        document.body.classList.add('sticky')
      }

      if (ent.isIntersecting === true) {
        document.body.classList.remove('sticky')
      }
    },
    {
      root: null,
      threshold: 0,
    }
  )
  obs.observe(sectionHeroEl)

  const allLinks = document.querySelectorAll('a:link')
  allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault()
      const href = link.getAttribute('href') as string

      // Scroll back to top
      if (href === '#')
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })

      // Scroll to other links
      if (href !== '#' && href.startsWith('#')) {
        const sectionEl = document.querySelector(href) as Element
        sectionEl.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
})
</script>

<template>
  <section class="hero" :style="{backgroundImage: 'url(' + movies[0].cover + ')'}" >
    <div class="nav-container">
      <nav class="nav">
        <a class="nav__logo" href="#">
          <img class="nav__logo--img" src="@/assets/logo.png" />
        </a>
        <ul class="nav__primary">
          <li class="nav__primary--option"><a href="#">Strona główna</a></li>
          <li class="nav__primary--option"><a href="#movies">Filmy</a></li>
          <li class="nav__primary--option"><a href="#series">Seriale</a></li>
          <li class="nav__primary--option"><a href="#standups">Programy</a></li>
          <li class="nav__primary--option"><a href="#">Nowe i popularne</a></li>
          <li class="nav__primary--option"><a href="#">Moja lista</a></li>
          <li class="nav__primary--option"><a href="#">Przeglądaj wg języka</a></li>
        </ul>
        <div class="nav__secondary">
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="notifications-outline"></ion-icon>
        </div>
      </nav>
    </div>
    <div class="hero__info">
      <div class="hero__program">
        <h2 class="hero__program--top-info">Nr 1 wśród filmów dzisiaj</h2>
        <p class="hero__program--desc">{{ movies[0].description }}</p>
        <div class="hero__info--buttons">
          <button class="button button__light"><ion-icon name="play"></ion-icon><p>Odtwórz</p></button>
          <button class="button button__dark">
            <ion-icon name="information-circle-outline"></ion-icon><p>
              Więcej informacji
            </p>
          </button>
        </div>
      </div>
      <div class="hero__info--age">
        <p>{{ movies[0].maturityRating }}+</p>
      </div>
    </div>
  </section>

  <section class="movies" id="movies">
    <label style="color: green">Movies</label>
    <ul class="list">
      <li v-for="el in movies">
        <img :src="el.cover" @click="modal(el.key)" />
        <MovieComponent :id="`${el.key}`" :data="el" class="hide" />
      </li>
    </ul>
  </section>

  <section class="series" id="series">
    <label style="color: green">Series</label>
    <ul class="list">
      <li v-for="el in series">
        <img :src="el.cover" @click="modal(el.key)" />
        <SeriesComponent :id="`${el.key}`" :data="el" class="hide" />
      </li>
    </ul>
  </section>

  <section class="standups" id="standups">
    <label style="color: green">Standups</label>
    <ul class="list">
      <li v-for="el in standups">
        <img :src="el.cover" @click="modal(el.key)" />
        <StandupComponent :id="`${el.key}`" :data="el" class="hide" />
      </li>
    </ul>
  </section>
  <footer>GRID</footer>
</template>

<style lang="scss" scoped>
.button {
  border: none;
  border-radius: 5px;
  padding: 1.2rem 2.8rem;
  display: flex;
  gap: 0.8rem;
  font-size: 2.4rem;
  cursor: pointer;

  &__light {
    background-color: white;
    color: black;

    &:hover {
      background-color: darkgray;
    }
  }

  &__dark {
    background-color: black;
    color: white;

    &:hover {
      background-color: grey;
    }
  }
}

a:link, a:visited {
  color: #e5e5e5;
  font-weight: 400;
  transition: color .4s;
}

a:hover, a:active {
  color: #b3b3b3;
}

.nav {
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  filter: brightness(100%);
  justify-content: start;
  background: transparent;
  padding: 1.4rem 3.6rem;
  transition: 0.4s;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.808) 0%, rgba(0, 0, 0, 0.021) 57%);

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

  &__secondary {
    margin-left: auto;
  }
}

.sticky .nav {
  position: fixed;
  z-index: 999;
  background-color: #141414;
}

.hero {
  width: 100vw;
  height: 100%;
  max-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: brightness(90%);
  position: relative;
  display: flex;
  justify-content: end;
  flex-direction: column;
  padding-bottom: 20rem;

  &__program {

    &--top-info{
      font-size: 2.4rem;
      color: white;
    }
  }

  &__info {
    display: flex;
    width: 100%;
    text-align: start;
    justify-content: space-between;

    &--buttons {
      display: flex;
    }

    &--age {
      width: 10rem;
      font-size: 2rem;
      border-left: 2px solid white;
      padding: 0.6rem 1.2rem;
      color: white;
      background-color: gray;
      align-self: flex-end;
    }}
}

.hide {
  display: none;
}

.list {
  display: flex;
  list-style: none;
}
</style>
