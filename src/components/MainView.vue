<script setup lang="ts">
import api from '../data/api'
import MovieComponent from './MovieComponent.vue'
import SeriesComponent from './SeriesComponent.vue'
import StandupComponent from './StandupComponent.vue'
import {
  MovieApiTypes,
  SeriesApiTypes,
  StandupApiTypes,
} from '@/types/apiTypes'
import { onMounted, ref } from 'vue'

const getItem = <T>(T: string) =>
  api.value.filter((item) => item.type.typeName === T) as T[]

const movies = ref(getItem<MovieApiTypes>('Movie'))
const series = ref(getItem<SeriesApiTypes>('Series'))
const standups = ref(getItem<StandupApiTypes>('Standup'))

const modal = (el: string) => {
  const id = `#${el}`
  const element = document.querySelector(id) as HTMLElement
  element.style.top = '50px'
  element.classList.remove('hide')

  const overlay = document.querySelector('.overlay') as HTMLElement
  overlay.classList.remove('hide')

  window.scrollTo(0, 0)
}

onMounted(() => {
  const sectionHeroEl = document.querySelector('.nav-container') as HTMLElement
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
  <header class="hero">
    <img class="hero__bg" src="@/assets/hero.jpg" />
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
        </ul>
      </nav>
    </div>
    <div class="hero__info">
      <div class="hero__program">
        <img class="hero__program--img" src="@/assets/hero_text.png" />
        <span class="hero__program--top-info">
          <div class="hero__program--top-info-square">TOP<br />10</div>
          <h3 class="hero__program--top-info-text">
            Nr 1 wśród filmów dzisiaj
          </h3>
        </span>
        <p class="hero__program--desc">{{ movies[0].description }}</p>
        <div class="hero__info--buttons">
          <button class="button button__light">
            <ion-icon name="play"></ion-icon>
            <p>Odtwórz</p>
          </button>
          <button class="button button__dark" @click="modal('pulp-fiction')">
            <ion-icon name="information-circle-outline"></ion-icon>
            <p>Więcej informacji</p>
          </button>
        </div>
      </div>
      <div class="hero__info--age">
        <p>{{ movies[0].maturityRating }}+</p>
      </div>
    </div>
  </header>

  <main class="main">
    <section class="list" id="movies">
      <label class="list__heading">Filmy</label>
      <ul class="list__carousel">
        <div class="btn-arrow btn-arrow__left">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <div class="list__carousel--wrapper">
          <li class="list__element" v-for="el in movies">
            <img class="list__img" :src="el.cover" @click="modal(el.key)" />
            <MovieComponent :id="`${el.key}`" :data="el" class="hide" />
          </li>
        </div>
        <div class="btn-arrow btn-arrow__right">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </ul>
    </section>

    <section class="list" id="series">
      <label class="list__heading">Seriale</label>
      <ul class="list__carousel">
        <div class="btn-arrow btn-arrow__left">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <div class="list__carousel--wrapper">
          <li class="list__element" v-for="el in series">
            <img class="list__img" :src="el.cover" @click="modal(el.key)" />
            <SeriesComponent :id="`${el.key}`" :data="el" class="hide" />
          </li>
        </div>
        <div class="btn-arrow btn-arrow__right">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </ul>
    </section>

    <section class="list" id="standups">
      <label class="list__heading">Programy</label>
      <ul class="list__carousel">
        <div class="btn-arrow btn-arrow__left">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <div class="list__carousel--wrapper">
          <li class="list__element" v-for="el in standups">
            <img class="list__img" :src="el.cover" @click="modal(el.key)" />
            <StandupComponent :id="`${el.key}`" :data="el" class="hide" />
          </li>
        </div>
        <div class="btn-arrow btn-arrow__right">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
      </ul>
    </section>

    <footer class="footer">
      <div class="footer__grid">
        <div class="footer__socials">
          <a href="#"
            ><ion-icon id="fb-icon" name="logo-facebook"></ion-icon
          ></a>
          <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
          <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
          <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
        </div>
        <a class="footer__link" href="#">Audiodeskrypcja</a>
        <a class="footer__link" href="#">Centrum pomocy</a>
        <a class="footer__link" href="#">Karty podarunkowe</a>
        <a class="footer__link" href="#">Media Center</a>
        <a class="footer__link" href="#">Relacje z inwestorami</a>
        <a class="footer__link" href="#">Praca</a>
        <a class="footer__link" href="#">Warunki korzystania</a>
        <a class="footer__link" href="#">Prywatność</a>
        <a class="footer__link" href="#">Informacje prawne</a>
        <a class="footer__link" href="#">Ustawienia plików cookie</a>
        <a class="footer__link" href="#">Informacje o firmie</a>
        <a class="footer__link" href="#">Skontaktuj się z nami</a>
        <div class="footer__copy">&copy; 2023 by Wojciech Sutkowski</div>
      </div>
    </footer>
  </main>
  <div class="overlay hide" />
</template>

<style lang="scss" scoped>
a:link,
a:visited {
  color: #e5e5e5;
  font-weight: 400;
  transition: color 0.4s;
}

a:hover,
a:active {
  color: #b3b3b3;
}
.hero {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60vw;

  &__bg {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.95) 50%
    );
    -webkit-mask-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.95) 50%
    );
  }

  &__program {
    padding-left: 6.4rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 40%;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
    color: #fff;

    &--top-info {
      font-size: 2.4rem;
      display: flex;
      gap: 1.2rem;
    }

    &--top-info-square {
      display: flex;
      align-items: center;
      text-align: center;
      padding: 0.4rem;
      background-color: red;
      border-radius: 5px;
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1;
    }

    &--top-info-text {
      font-size: 1.6vw;
      font-weight: 700;
    }

    &--desc {
      font-size: 1.2vw;
    }
  }

  &__info {
    display: flex;
    width: 100%;
    text-align: start;
    justify-content: space-between;

    &--buttons {
      display: flex;
      line-height: 88%;
      margin-top: 1.2vw;
      gap: 1rem;
    }

    &--age {
      height: 2.4vw;
      font-size: 1.1vw;
      border-left: 3px solid #dcdcdc;
      padding: 0.5vw 3.5vw 0.5vw 0.8vw;
      color: white;
      z-index: 2;
      background-color: rgba(51, 51, 51, 0.6);
      align-self: flex-end;
    }
  }
}
.nav-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 6rem;
  width: 100%;
  padding-right: 1.4rem;
}
.nav {
  text-align: center;
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1.6rem 6rem;
  transition: 0.4s;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 10%, transparent);

  &__logo {
    position: relative;
    padding-top: 0.2rem;
    margin-right: 1.6rem;

    &--img {
      max-width: 10rem;
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

.sticky .nav {
  position: fixed;
  z-index: 4;
  background-color: #141414;
}

.main {
  margin-top: -30rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3.6rem;
}

.hide {
  display: none;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.8rem;

  &__heading {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    padding-left: 6rem;
    z-index: 3;
  }

  &__carousel {
    width: 100vw;
    display: flex;
    justify-content: space-between;

    &--wrapper {
      display: flex;
      gap: 2rem;
      list-style: none;
    }
  }

  &__img {
    cursor: pointer;
    position: relative;
    z-index: 3;
    width: 28rem;
    border-radius: 4px;
  }
}

.footer {
  width: 100%;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8rem;

  &__grid {
    display: grid;
    width: 96rem;
    font-size: 1.2rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 2fr repeat(3, 1fr) 2fr;
  }

  &__link:link,
  &__link:visited {
    color: grey;
    padding: 0.4rem 0;
  }

  &__link:hover,
  &__link:active {
    text-decoration: underline;
  }

  &__socials {
    color: #fff;
    font-size: 2.8rem;
    grid-column: 1/5;
    grid-row: 1/2;
    display: flex;
    gap: 2rem;
    padding-bottom: 1rem;
  }
  &__copy {
    padding: 1rem 0;
    grid-column: 1/5;
    grid-row: 5/6;
    align-self: center;
  }
}

.btn-arrow {
  width: 6rem;

  &__right {
    margin-right: 1.2rem;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 4;
}
</style>
