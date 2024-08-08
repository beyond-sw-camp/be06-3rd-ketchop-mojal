import axios from "axios";
import { defineStore } from "pinia";

export const useExchangeStore = defineStore('exchange', {
    state: () => ({
        request: {
            giveCategoryIdx:null,
            giveBtmCategory:"",
            takeCategoryIdx:null,
            takeBtmCategory:"",
            title:"",
            contentㄴ:"",
            images:[]
        },
        
    }),
    actions:{
        async createExchangePost() {
            const url = 'http://localhost:8082/api/exchange/create';

            const req = {
                // giveCategoryIdx: this.request.giveCategoryIdx,
                giveCategoryIdx: 1,
                giveBtmCategory:this.request.giveBtmCategory,
                // takeCategoryIdx:this.request.takeCategoryIdx,
                takeCategoryIdx:4,
                takeBtmCategory:this.request.takeBtmCategory,
                title:this.request.title,
                contents:this.request.content,
                images: this.images
            };

            try {
                console.log(req);
                const response = await axios.post(url, req, {withCredential:true});
                console.log('Post created successfully:', response.data);
                if(response.data.code===2101){
                    alert(response.data.message);
                }else if(response.data.code===2102){
                    alert(response.data.message);
                }
            } catch (error) {
                console.error('Error creating post:', error);
            }
        },
    }
})