import { defineStore } from "pinia";
import axios from "axios";

export const useMemberStore = defineStore('member', {
    state: () => ({
        userIdx : "",
        userName : "",
        userEmail : "",
        isLogined : false
    }),
    // persist: true,
    persist:{
        storage: sessionStorage,
    },
    actions:{
        async login(member){
            let url = `http://localhost:8080/member/login`;

            let response = await axios.post(url, member); //응답 받아서 저장
            console.log(response);
            if(response.data.isSuccess){
                this.isLogined=true;
                this.userIdx=response.data.idx;
                this.userName=response.data.nickname;
                this.userEmail=response.data.email;
            }
        },
        async signup(member){
            let url = 'http://localhost:8080/member/signup';

            let response = await axios.post(url, member);
            console.log(response);
        },
        logout() {
            this.isLogined = false;
        },
    }
})