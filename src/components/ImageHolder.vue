<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  image: Object,
});
</script>

<template>
  <router-link :to="`/image/${image.id}`" class="image-holder col-md-3 col-sm-4 col-xs-12 mb-4">
    <img :src="image.src" :alt="image.alt" />
  </router-link>
</template>

<style scoped>
.image-holder {
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: block;

  >img {
    max-width: 100%;
    border-radius: 1.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    background-color: transparent;
  }
}
</style>