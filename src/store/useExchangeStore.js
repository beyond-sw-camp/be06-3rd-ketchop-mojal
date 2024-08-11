import axios from "axios";
import { defineStore } from "pinia";

export const useExchangeStore = defineStore('exchange', {
    state: () => ({
        request: {
            giveCategoryIdx:0,
            giveBtmCategory:"",
            takeCategoryIdx:0,
            takeBtmCategory:"",
            title:"",
            content:"",
            images:[]
        },
        
    }),
    actions:{
        async createExchangePost() {
            const url = '/proxy/exchange/create';

            const req = {
                giveCategoryIdx: this.request.giveCategoryIdx,
                giveBtmCategory:this.request.giveBtmCategory,
                takeCategoryIdx:this.request.takeCategoryIdx,
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