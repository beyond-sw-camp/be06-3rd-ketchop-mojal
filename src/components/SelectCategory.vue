<template>
    <div>
        <div v-if="selectType===1">
            <h5>너 뭐 잘해? 너 뭐 돼?</h5>
            <h3>나의 재능 카테고리를 선택해주세요</h3>
        </div>
        <div v-else>
            <h5>너 뭐 잘해? 너 뭐 돼?</h5>
            <h3>관심 카테고리를 선택해주세요</h3>
        </div>
        <div v-if="selectType===1" data-v-a9f85b62="" data-v-713cd9e8="" class="main-pro-locations">
            <ul data-v-a9f85b62="" class="location-list" id="category-list">
                <li v-for="category in categoryStore.categories" 
                    :key="category.idx" 
                    @click="selectMyCategory(category.idx)" 
                    :class="{'selected': selectedMy.includes(category.idx)}" 
                    class="location-item">
                    {{ category.name }}
                </li>
            </ul>
        </div>
        <div v-else data-v-a9f85b62="" data-v-713cd9e8="" class="main-pro-locations">
            <ul data-v-a9f85b62="" class="location-list" id="category-list">
                <li v-for="category in categoryStore.categories" 
                    :key="category.idx" 
                    @click="selectLikeCategory(category.idx)" 
                    :class="{'selected': selected.includes(category.idx)}" 
                    class="location-item">
                    {{ category.name }}
                </li>
            </ul>
        </div>
        <button v-if="selectType===1" data-v-5467bada="" @click="saveMyCategories" data-testid="btn-login" class="btn-login btn-primary">
            <span data-v-5467bada="">MOJAL 시작하기!</span>
        </button>
        <button v-else data-v-5467bada="" @click="saveMyCategories" data-testid="btn-login" class="btn-login btn-primary">
            <span data-v-5467bada="">카테고리 선택 완료</span>
        </button>
    </div>
</template>
<script>
import { useCategoryStore } from '@/store/useCategoryStore'; 
import { useMemberStore } from '@/store/useMemberStore'; 
import { mapStores } from 'pinia';
import axios from 'axios';

export default {
    props:{
        selectType:{
            type: Number,
            required: true
        }
    },
    computed: {
        ...mapStores(useCategoryStore, useMemberStore),
    },
    data(){
        return{
            selectedMy:[],
            selectedLike:[],
        }
    },
    methods:{
        selectMyCategory(idx) {
            if (this.selectedMy.includes(idx)) {
                // Deselect category
                const index = this.selectedMy.indexOf(idx);
                if (index > -1) {
                    this.selectedMy.splice(index, 1);
                }
            } else if (this.selectedMy.length < 5) {
                // Select category if less than 5 selected
                this.selectedMy.push(idx);
            } else {
                // Notify user if more than 5 selected
                alert('카테고리는 5개까지만 선택 가능합니다.');
            }
        },
        selectLikeCategory(idx) {
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
        async saveMyCategories(){
            console.log(this.selected);

            let url = "/proxy/add/category";
            let requestData = { categories: this.selectedMy };
            try {
                let response = await axios.post(url, requestData);
                console.log(response.data);
                this.memberStore.getUserCategories();
                this.$router.push("/main");

            } catch (error) {
                console.error('Error:', error);
            }
        },
        user(){
            this.memberStore.getUserCategories();
        }
    }
    
    
}
</script>
<style scoped>
.main-pro-locations .location-item{
    /* position: relative;
    float: left; */
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
     display: flex;
    flex-wrap: wrap;
}
.location-list {
    /* Add your styles here */
    display: flex;
    flex-wrap: wrap; 
}
.location-list li{
    display: inline;
}
.location-item {
    cursor: pointer;
    /* 기본 스타일 */
}
.location-item.selected {
    background-color: #f0f0f0; /* 선택되었을 때의 배경색 */
    color: #007bff; /* 선택되었을 때의 글자색 */
}
.btn-primary {
    color: #fff;
    background : linear-gradient(65deg, #B69CE5, #0066D5);
    border-radius: 5rem;
    width: auto;
    border: none;
    text-align: center;
    vertical-align: middle;
    font-size: 1rem;
    line-height: 1.5;
    padding: .6875rem 13.75rem;
    margin-bottom: .75rem;
    margin-top: 1.5rem;
}
    
</style>