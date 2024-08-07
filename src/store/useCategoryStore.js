import axios from "axios";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", {
    state: () => (
        {
            category: {
                result:
                {
                    sharePosts: [],
                    exchangePosts: []
                }
            },
            selectedCategoryIdx: null,
        }
    ),
    actions: {
        async getCategory(categoryIdx) {
            let url = `http://localhost:8080/search/category?idx=${categoryIdx}`;

            let response = await axios.get(url); //응답 받아서 저장
            this.category = response.data.result
            console.log(this.category)
        },
        async getCategoryAll() {
            let url = `http://localhost:8080/get/categories`;

            let response = await axios.get(url); //응답 받아서 저장
            this.categories = response.data.result;
            console.log("done!!");
        },
    },
});