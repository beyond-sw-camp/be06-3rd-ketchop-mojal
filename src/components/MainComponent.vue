<template>
    <div class="main-component-container">
        <div class="left-content">
            <div>
                <h3 class="content-title">내 재능</h3>
                <div>
                    <div data-v-a9f85b62="" data-v-713cd9e8="" class="main-pro-locations">
                        <ul data-v-a9f85b62="" class="location-list" id="category-list">
                            <li v-for="category in memberStore.userCategories" 
                                :key="category.idx" 
                                class="location-item">
                                {{ category.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div class="box"></div>
                <h3 class="content-title">내 관심 카테고리</h3>
                <div>
                    <div>
                        <div data-v-a9f85b62="" data-v-713cd9e8="" class="main-pro-locations">
                            <ul data-v-a9f85b62="" class="location-list" id="category-list">
                                <li v-for="category in memberStore.userCategories" 
                                    :key="category.idx" 
                                    class="location-item">
                                    {{ category.name }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-content">
            <h3 class="content-title">추천글</h3>
            <div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import {useMemberStore} from '@/store/useMemberStore';

export default {
    computed:{
        ...mapStores(useMemberStore)
    },
    mounted(){
        // this.memberStore.getUserCategories();
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 1rem;
}
.left-content{
    border-right: 1px solid #8e8e8e;
    padding: 1rem 2rem;
}
.left-content >div{
    height: 50%;
}
.right-content{
    padding: 1rem 2rem;
}
.main-component-container{
    padding: 10rem 0;
    margin: 0 auto;
    height: 100%;
    width: 80rem;
    display: flex;
    color: #303030;
}
.main-component-container >div:nth-of-type(1){
    width: 45%;
}
.main-pro-locations{
    height: auto;
}
.main-pro-locations .location-item{
    position: relative;
    float: left;
    padding: .5625rem 1.125rem;
    margin-right: .5rem;
    margin-bottom: .625rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #737373;
    letter-spacing: -.01875rem;
    border: .0625rem solid #e1e1e1;
    border-radius: 21px;
}
.location-list{
    height: 100%;
}
.content-title{
    /* font-size: 2rem; */
    margin-bottom: 1.5rem;
}
</style>