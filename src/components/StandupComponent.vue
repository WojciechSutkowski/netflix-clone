<script setup lang="ts">
import { timeConverter } from '../helpers/timeConverter'
import { defineProps } from 'vue'
import { StandupApiTypes } from '../types/apiTypes'

const standup = defineProps<{
  data: StandupApiTypes
}>()

const closeModal = () => {
  const id = `#${standup.data.key}`
  const element = document.querySelector(id) as HTMLElement
  element.classList.add('hide')

  const overlay = document.querySelector('.overlay') as HTMLElement
  overlay.classList.add('hide')
}
</script>

<template>
  <div class="modal">
    <header class="modal__header">
      <img class="modal__cover" alt="cover" :src="standup.data.cover" />
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
          <p>{{ standup.data.year }}</p>
          <p>{{ timeConverter(standup.data.type.time) }}</p>
          <p class="modal__data--desc--age">
            {{ standup.data.maturityRating }}+
          </p>
        </span>
        <p>{{ standup.data.description }}</p>
      </main>

      <aside class="modal__data--short-info">
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Obsada: </span>
          <span
            class="modal__list--elements"
            v-for="(actor, index) in standup.data.type.cast"
          >
            <span v-if="index < 3"> {{ actor }}, </span></span
          >
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Gatunki: </span>
          <span
            class="modal__list--elements"
            v-for="genre in standup.data.type.genres"
            >{{ genre }},
          </span>
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Kategorie: </span>
          <span
            class="modal__list--elements"
            v-for="category in standup.data.type.categories"
            >{{ category }},
          </span>
        </div>
      </aside>

      <div class="modal__data--info">
        <h2 class="modal__data--info--header">
          O tytule <strong>{{ standup.data.title }}</strong>
        </h2>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Obsada: </span>
          <span
            class="modal__list--elements"
            v-for="actor in standup.data.type.cast"
            >{{ actor }},
          </span>
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Scenariusz: </span>
          <span
            class="modal__list--elements"
            v-for="scripter in standup.data.type.script"
            >{{ scripter }},
          </span>
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Gatunki: </span>
          <span
            class="modal__list--elements"
            v-for="genre in standup.data.type.genres"
            >{{ genre }},
          </span>
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Kategorie: </span>
          <span
            class="modal__list--elements"
            v-for="category in standup.data.type.categories"
            >{{ category }},
          </span>
        </div>
        <div class="modal__data--short-info--element">
          <span class="modal__list--info">Kategoria wiekowa: </span>
          <span class="modal__list--elements">
            {{ standup.data.maturityRating }}+
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
    grid-template-rows: 1fr 1fr;
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
</style>
