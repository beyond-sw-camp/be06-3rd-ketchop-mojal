import { defineStore } from "pinia";

export const useShareCreateStore = defineStore('share-post', {
    state: () => ({
        title:"",
        contents:"",
        deadline:null,
        capacity:null,
        categoryIdx:null,
        btmCategory:""
    }),
    actions:{
        changePostType(type) {
            this.postType = type;
        },
    }
})