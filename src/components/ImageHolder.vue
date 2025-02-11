<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  image: Object,
});
</script>

<template>
  <a href="/image" class="image-holder col-md-4 col-sm-6 col-xs-12 mb-4">
    <img :src="image.src" :alt="image.alt" />
  </a>
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