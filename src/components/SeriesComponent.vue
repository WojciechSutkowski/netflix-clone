<script setup lang="ts">
import { seriesNumberConverter } from '@/helpers/seriesNumberConverter'
import { defineProps } from 'vue'
import { SeriesApiTypes } from '@/types/apiTypes'

const series = defineProps<{
  data: SeriesApiTypes
}>()

const closeModal = () => {
  const id = `#${series.data.key}`
  const element = document.querySelector(id) as HTMLElement
  element.classList.add('hide')

  const overlay = document.querySelector('.overlay') as HTMLElement
  overlay.classList.add('hide')
}
</script>

<template>
  <div class="modal">
    <header class="modal__header">
      <img class="modal__cover" alt="cover" :src="series.data.cover" />
      <button class="button button__light play-btn">
        <ion-icon name="play"></ion-icon>
        <p>Odtwórz</p>
      </button>
      <button class="close-btn" @click="closeModal">
        <ion-icon name="close-outline"></ion-icon>
      </button>
    </header>

    <div class="modal__data">
      <main class="modal__data--desc">
        <span class="modal__data--desc--bar">
          <p>{{ series.data.year }}</p>
          <p>
            {{ seriesNumberConverter(series.data.type.seasons.length) }}
          </p>
          <p class="modal__data--desc--age">
            {{ series.data.maturityRating }}+
          </p>
        </span>
        <p>{{ series.data.description }}</p>
      </main>

      <aside class="modal__data--short-info">
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Obsada: </span>
          <span
            class="modal__list--elements"
            v-for="(actor, index) in series.data.type.cast"
          >
            <span v-if="index < 3"> {{ actor }}, </span></span
          >
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Gatunki: </span>
          <span
            class="modal__list--elements"
            v-for="genre in series.data.type.genres"
            >{{ genre }},
          </span>
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Kategorie: </span>
          <span
            class="modal__list--elements"
            v-for="category in series.data.type.categories"
            >{{ category }},
          </span>
        </div>
      </aside>

      <div class="episodes">
        <h2>Odcinki</h2>
        <p>Sezon {{ series.data.type.seasons[0].seasonNumber }}</p>
        <div
          class="episodes__episode"
          v-for="episode in series.data.type.seasons[0].episodes"
        >
          <span class="episodes__episode--number">{{
            episode.episodeNumber
          }}</span>
          <span class="episodes__episode--title">{{ episode.title }}</span>
          <span class="episodes__episode--time">{{ episode.time }} min</span>
        </div>
      </div>

      <div class="modal__data--info">
        <h2 class="modal__data--info--header">
          O tytule <strong>{{ series.data.title }}</strong>
        </h2>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Twórcy: </span>
          <span
            class="modal__list--elements"
            v-for="creator in series.data.type.creators"
            >{{ creator }},
          </span>
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Obsada: </span>
          <span
            class="modal__list--elements"
            v-for="actor in series.data.type.cast"
            >{{ actor }},
          </span>
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Gatunki: </span>
          <span
            class="modal__list--elements"
            v-for="genre in series.data.type.genres"
            >{{ genre }},
          </span>
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Kategorie: </span>
          <span
            class="modal__list--elements"
            v-for="category in series.data.type.categories"
            >{{ category }},
          </span>
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Kategoria wiekowa: </span>
          <span class="modal__list--elements">
            {{ series.data.maturityRating }}+
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  &__data {
    display: grid;
    grid-template-columns: 2fr 1fr;
    font-size: 1.6rem;
    padding: 4.8rem;
    padding-top: 1.2rem;

    &--desc {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      padding-right: 1rem;

      &--bar {
        display: flex;
        text-align: center;
        align-items: center;
        gap: 1rem;
        letter-spacing: 0.6px;
      }

      &--age {
        font-size: 1.2rem;
        padding: 0.1rem 0.4rem;
        border: 1px solid #fff;
      }
    }

    &--info {
      grid-column: 1/3;
      padding-top: 1.6rem;
      border-top: 1px solid #fff;

      &--header {
        font-weight: 400;
      }
    }
  }
}

.episodes {
  display: flex;
  flex-direction: column;
  padding-top: 3.6rem;
  grid-column: 1/3;

  &__episode {
    display: flex;
    text-align: center;
    align-items: center;
    width: 100%;
    min-height: 10rem;
    border-top: 1px solid #404040;

    &--number {
      width: 20%;
      color: #d2d2d2;
      font-size: 2.8rem;
    }

    &--title {
      width: 60%;
      font-weight: 600;
    }

    &--time {
      width: 20%;
    }
  }
}
</style>
