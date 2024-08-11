<template>
  <div class="app-container">
    <div ><HeaderComponent/></div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  computed: {
  },
  created(){
  },
  mounted(){
  },
  methods:{
  }
}
</script>

<style scoped>
.app-container{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

</style>
