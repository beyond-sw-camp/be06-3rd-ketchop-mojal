import { defineStore } from "pinia";
import axios from "axios";

export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories:[]
    }),
    actions:{
        async getCategories(){
            let url = `/api/get/categories`;

            let response = await axios.get(url); //응답 받아서 저장
            this.categories = response.data;
        }
    }
})