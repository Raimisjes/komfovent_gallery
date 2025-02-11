<script setup>
import { images } from '@/data/data';
import { defineProps } from 'vue';

const props = defineProps(['id']);

const selectedImage = images.filter(image => image.id === props.id)[0];
</script>

<template>
  <div class="container">
    <div class="row" v-if="selectedImage">
      <div class="col-md-7">
        <div class="image-holder">
          <img :src="selectedImage.src" :alt="selectedImage.alt" />
        </div>
      </div>
      <div class="col-md-5">
        <div class="info-holder">
          <a href="/" class="back">Back to gallery</a>
          <h3>{{ selectedImage.title }}</h3>
          <p>{{ selectedImage.description }}</p>
          <div class="categories">
            <span v-for="category in selectedImage.category" class="">{{ category }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  align-items: center;
  justify-content: center;
  display: flex;
}

.image-holder {
  img {
    max-width: 100%;
    border-radius: 2rem;
  }
}

.info-holder {
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  position: relative;
  padding: 2.5rem 0;

  .categories {
    >span {
      display: inline-block;
      font-size: 0.8rem;
      padding: 0.2rem 0.7rem;
      background-color: #f29393;
      color: white;
      margin: 0 0.5rem 0.5rem 0;
      border-radius: 0.5rem;
    }
  }

  .back {
    position: absolute;
    bottom: 0;
    right: 0;
    text-decoration: none;
    color: #f29393;
  }
}
</style>
