<template>
  <div class="carousel-continer">
      <Carousel>
        <Slide v-for="slide in 3" :key="slide">
          <div class="carousel__item">{{ slide }}</div>
        </Slide>
    
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>

<style>
.carousel-continer{
    padding: 4rem;
    height: 100vh;
    width: 100vw;
}
.carousel{
    height: 100%;
    justify-content: center;
}
.carousel__item {
  min-height: 100%;
  width: 100%;
  background-color: white;
  color: black;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
