<template>
  <div class="container">
    <h1>Gallery app</h1>
    <div class="filters row mb-4">
      <div class="input-holder col-md-4 mb-2">
        <input class="form-control" v-model="filters.title" placeholder="Title" type="text" />
      </div>
      <div class="input-holder col-md-4 mb-2">
        <input class="form-control" v-model="filters.id" placeholder="ID" type="text" />
      </div>
      <div class="input-holder col-md-4 mb-2">
        <select class="form-select" v-model="filters.category">
          <option value="" selected>Category</option>
          <option v-for="category in categories" :key="category">{{ category }}</option>
        </select>
      </div>
      <div>
        <button v-if="filters.title || filters.id || filters.category" class="btn btn-primary"
          @click="resetFilters">Clear filters</button>
      </div>
    </div>
    <div class="images-gallery row">
      <ImageHolder :image="image" v-for="image in filteredImages" :key="image.id" />
      <h5 v-if="filteredImages.length == 0">No images were found matching your filters.</h5>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import { images, categories } from '@/data/data';
import ImageHolder from '@/components/ImageHolder.vue';

const filteredImages = computed(() => {
  return images.filter(image => {
    if (filters.value.title.length > 2 && !image.title.toLowerCase().includes(filters.value.title.toLowerCase())) {
      return false;
    }

    if (filters.value.id && !image.id.toString().includes(filters.value.id)) {
      return false;
    }

    if (filters.value.category && !image.category.includes(filters.value.category)) {
      return false;
    }

    return true
  })
});

const filters = ref({
  title: '',
  id: '',
  category: ''
});

function resetFilters() {
  filters.value.title = '';
  filters.value.id = '';
  filters.value.category = '';
}
</script>

<style>
.container {
  width: 100%;

  h1 {
    text-align: center;
    margin: 1rem 0;
  }
}
</style>
