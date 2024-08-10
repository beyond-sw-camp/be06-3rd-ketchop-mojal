<template>
    <div class="main-component-container">
        <div class="left-content">
            <div>
                <div class="content-title">내 재능</div>
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
                <div class="content-title">내 관심 카테고리</div>
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
            <div class="content-title">추천글</div>
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
        this.memberStore.getUserCategories();
    }
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 1rem;
}
.left-content{
    border-right: 1px solid #525252;
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
    width: 60rem;
    display: flex;
}
.main-component-container >div:nth-of-type(1){
    width: 50%;
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
    font-size: 2rem;
    margin-bottom: 1.5rem;
}
</style>