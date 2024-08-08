import { defineStore } from "pinia";
import axios from "axios";

export const useMemberStore = defineStore('member', {
    state: () => ({
        userIdx : "",
        userName : "",
        userEmail : "",
        isLogined : false,

        userCategories:[]
    }),
    // persist: true,
    persist:{
        storage: sessionStorage,
    },
    actions:{
        async login(member){
            let url = `api/member/login`;

            let response = await axios.post(url, member); 
            console.log(response);
            if(response.data.isSuccess){
                this.isLogined=true;
                this.userIdx=response.data.idx;
                this.userName=response.data.nickname;
                this.userEmail=response.data.email;
            }
        },
        async signup(member){
            let url = 'api/member/signup';

            let response = await axios.post(url, member, {withCredentials:false});
            console.log(response);
        },
        logout() {
            this.isLogined = false;
        },
        async getUserCategories(){
            let url = `/api/my/category`;

            let response = await axios.get(url); 
            console.log(response);
            this.userCategories = response.data.result;
        }
    }
})