<template>
  <div class="carousel-continer">
      <!-- <Carousel>
        <Slide v-for="slide in 3" :key="slide">
          <div class="carousel__item">
            <SelectCategory/>
          </div>
        </Slide>
    
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel> -->
      <carousel
        class="info-carousel"
        :per-page="1"
        :navigation-enabled="true"
        navigationNextLabel=""
        navigationPrevLabel=""
      >
        <slide class="info-slide">
          <section class="no-data page1">
            <img src="/Welcome.png"/>
            <div class="welcome">
              {{$route.params.userName}} 님, 회원가입을 환영합니다.
            </div>
          </section>
        </slide>
        
        <slide class="info-slide">
          <section class="no-data">
            <SelectCategory :selectType="1"/>
          </section>
        </slide>
        
        <slide class="info-slide">
          <section class="no-data">
            <SelectCategory :selectType="2"/>
          </section>
        </slide>

        <slide class="info-slide">
          <section class="no-data">
           <router-link to="/main">mojal 시작하기</router-link>
          </section>
        </slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </carousel>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import SelectCategory from '@/components/SelectCategory.vue'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    SelectCategory
  },
})
</script>

<style>
.carousel-continer{
    padding: 4rem;
    height: 100vh;
    width: 100vw;
    /* background: linear-gradient(101deg, #CCC4DA -3.78%, #0066D5 100%); */
    /* background: #CCC4DA; */
}
.carousel-viewport{
  height: 100%;
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
.page1 img{
  width: 15rem;
  height: auto;
}
.welcome{
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: 500;
}
</style>
