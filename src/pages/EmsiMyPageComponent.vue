<template>
    <div id="main">
        <h1> 나의 글 ~~~~~~~~ 페이지</h1>
        <div><router-link :to="{ name: 'postcreate', params: { postType: 'exchange' } }">교환글쓰기  |</router-link></div>
        <div><router-link :to="{ name: 'postcreate', params: { postType: 'share' } }">| 나눔글쓰기</router-link></div>
    </div>
    
</template>
  

<script>
  
export default {
    name: 'EmsiMyPageComponent',
    data() {
        return {  }
    },
}
</script>
  

<style scoped>
#main{
    padding-top: 200px;
    display: flex;
    justify-content: center;
    
}

</style>
  