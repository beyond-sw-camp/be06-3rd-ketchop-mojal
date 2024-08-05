<template>
  <HeaderComponent/>
  <router-view></router-view>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
  },
  created(){
    console.log("      ██╗ ██╗      ███║   ████║        ████╗     ██╗");
    console.log("     ██║██ ██║   ██║  ██║  ██║        ██║ ██║    ██║");
    console.log("    ██║ ██║ ██║  ██║  ██║  ██║ ███╗  ██ ██ ██║   ██║");
    console.log("   ██║       ██║   ███║     ████║   ██║     ██║  ██████║");
  }
}
</script>

<style>
a{
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
</style>
