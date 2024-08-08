<template>
    <div id="main">
        <h1> 나눔글 리스트 ~~~~~~~~ 페이지</h1>
        <div><router-link to="shpostread">나눔글 하나 상세보기</router-link></div>
    </div>
    
</template>
  

<script>
  
export default {
    name: 'ShPostListComponent',
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
  