<template>
  <div class="home-page before-login-background">
    <div class="home-text-container">
      <div class="main-text">넌 모잘해?</div>
      <div class="main-text">난 모잘해!</div>
      <div class="sub-text">재능 교환 커뮤니티 ‘MOJAL'을 시작해보세요</div>
      <button><router-link to="signup">start</router-link></button>
    </div>
  </div>
</template>

<script>
import { useMemberStore } from '@/store/useMemberStore'; 
import { mapStores } from 'pinia';

export default {
  components: {
  },
  computed: {
        ...mapStores(useMemberStore),
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
.home-page{
  width: 100vw;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
}
.before-login-background{
    background: linear-gradient(101deg, #CCC4DA -3.78%, #0066D5 100%);
}
.home-text-container{
  color: #FFF;
  width: 48vw;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: auto;
}
.main-text{
  font-size: 6.5625vw;
  font-weight: 700;
}
.home-text-container .main-text:nth-of-type(2){
  font-size: 6.5625vw;
  align-self: flex-end;
  margin-top: 1vw;
}
.sub-text{
  font-size: 2.2979vw;
  margin: 1.5vw auto;

}
.home-text-container button{
  background-color: rgba(0, 102, 213, 0.80);
  width: 15.4167vw;
  height: 4.495vw;
  border-radius: 1.5104vw;
  color: #FFF;
  margin: 1.5vw auto;
  font-size: 1.5104vw;
}
.home-text-container button a{
  color: #FFF;
}

</style>
