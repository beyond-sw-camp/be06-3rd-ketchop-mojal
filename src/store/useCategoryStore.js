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
        async getCategories() {
            let url = `/proxy/get/categories`;

            let response = await axios.get(url); //응답 받아서 저장
            this.categories = response.data;
        },
        selectCategory(categoryIdx) {
            this.selectedCategoryIdx = categoryIdx;
            console.log("스토어 카테고리 선택", this.selectedCategoryIdx)
        },
    },
});
