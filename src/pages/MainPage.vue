<template>
 <div class="custom-header"> <HeaderComponent/></div>
  <router-view></router-view>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import { useCategoryStore } from '@/store/useCategoryStore'; 
import { mapStores } from 'pinia';

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  computed: {
        ...mapStores(useCategoryStore),
    },
  created(){
    console.log("      ██╗ ██╗      ███║   ████║        ████╗     ██╗");
    console.log("     ██║██ ██║   ██║  ██║  ██║        ██║ ██║    ██║");
    console.log("    ██║ ██║ ██║  ██║  ██║  ██║ ███╗  ██ ██ ██║   ██║");
    console.log("   ██║       ██║   ███║     ████║   ██║     ██║  ██████║");
  },
  mounted(){
    this.getCategories();
  },
  methods:{
    async getCategories(){
      await this.categoryStore.getCategories();
    }
  }
}
</script>

<style>
.custom header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
}
a{
  color: black;
  text-decoration: none;
}
li, ul{
  list-style: none;
}
* {
    word-break: break-word;
}

*, :after, :before {
    box-sizing: border-box;
}
button{
  background: transparent;
  border: none;
}
#app{
  width: 100%;
}
:root {
    --blue: #4785ff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #ff3131;
    --orange: #fd7e14;
    --yellow: #ffce21;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #999;
    --gray-dark: #525252;
    --primary: #00c7ae;
    --secondary: #e1e1e1;
    --success: #00c7ae;
    --info: #17a2b8;
    --warning: #ffce21;
    --danger: #ff3131;
    --light: #fafafa;
    --dark: #525252;
    --breakpoint-xs: 0;
    --breakpoint-sm: 36rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 62rem;
    --breakpoint-xl: 75rem;
    --font-family-sans-serif: "Noto Sans KR", "Malgun Gothic", -apple-system, "Segoe UI", Roboto, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}
</style>
