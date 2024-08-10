<template>
    <div>
        <h5>너 뭐 잘해? 너 뭐 돼?</h5>
        <h3>카테고리를 선택해주세요</h3>
        <div data-v-a9f85b62="" data-v-713cd9e8="" class="main-pro-locations">
            <ul data-v-a9f85b62="" class="location-list" id="category-list">
                <li v-for="category in categoryStore.categories" 
                    :key="category.idx" 
                    @click="selectCategory(category.idx)" 
                    :class="{'selected': selected.includes(category.idx)}" 
                    class="location-item">
                    {{ category.name }}
                </li>
            </ul>
        </div>
        <button @click="saveCategories">카테고리 선택 완료</button>
    </div>
</template>
<script>
import { useCategoryStore } from '@/store/useCategoryStore'; 
import { mapStores } from 'pinia';
import axios from 'axios';

export default {
    computed: {
        ...mapStores(useCategoryStore),
    },
    data(){
        return{
            selected:[],
        }
    },
    methods:{
        selectCategory(idx) {
            if (this.selected.includes(idx)) {
                // Deselect category
                const index = this.selected.indexOf(idx);
                if (index > -1) {
                    this.selected.splice(index, 1);
                }
            } else if (this.selected.length < 5) {
                // Select category if less than 5 selected
                this.selected.push(idx);
            } else {
                // Notify user if more than 5 selected
                alert('카테고리는 5개까지만 선택 가능합니다.');
            }
        },
        async saveCategories(){
            console.log(this.selected);

            let url = "/proxy/add/category";
            let requestData = { categories: this.selected };
            try {
                let response = await axios.post(url, requestData);
                console.log(response.data); // 서버 응답 출력
            } catch (error) {
                console.error('Error:', error);
            }
        }
    }
    
    
}
</script>
<style scoped>
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
.main-pro-locations {
    /* Add your styles here */
}
.location-list {
    /* Add your styles here */
}
.location-item {
    cursor: pointer;
    /* 기본 스타일 */
}
.location-item.selected {
    background-color: #f0f0f0; /* 선택되었을 때의 배경색 */
    color: #007bff; /* 선택되었을 때의 글자색 */
}

    
</style>