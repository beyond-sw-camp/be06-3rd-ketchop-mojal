import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
    state: () => (
        {
            categoryAll: [],
            selectedCategoryIdx: null,
            categories: []
        }
    ),
    actions: {
        // 카테고리 다가져오기
        async getCategoryAll() {
            let url = `/proxy/get/categories`;

            let response = await axios.get(url); //응답 받아서 저장
            this.categoryAll = response.data;
        },
<<<<<<< HEAD
        selectCategory(categoryIdx) {
            this.selectedCategoryIdx = categoryIdx;
        },
=======
        async getCategories(){
            let url = `http://localhost:8080/get/categories`;

            let response = await axios.get(url); //응답 받아서 저장
            this.categories = response.data;
        }
>>>>>>> b60471a07c3adcb651f11a715eb14445265724b7
    },
});
