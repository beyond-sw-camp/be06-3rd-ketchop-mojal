import { defineStore } from "pinia";
import axios from "axios";

export const useMemberStore = defineStore('member', {
    state: () => ({
        member : {
            userIdx : "",
            userName : "",
            password:"",
            userEmail : "",
            isLogined : false,
            uuid:""
        },

        userCategories:[]
    }),
    // persist: true,
    persist:{
        storage: sessionStorage,
    },
    actions:{
        async login(member){
            let url = `/proxy/member/login`;

            let response = await axios.post(url, member); //응답 받아서 저장
            console.log(response);
            if(response.data.isSuccess){
                this.member.isLogined=true;
                this.member.userIdx=response.data.idx;
                this.member.userName=response.data.nickname;
                this.member.userEmail=response.data.email;
            }
        },
        async signup(member){
            let url = '/proxy/member/signup';

            let response = await axios.post(url, member, {withCredentials:false});
            console.log(response);
        },
        async sendEmail(email){
            
            let emailAuthReq={
                email:email,
                uuid:""
            };

            // console.log(emailAuthReq);

            let url = `/proxy/email/send`

            let response = await axios.post(url, emailAuthReq);
            console.log(response);
        },
        async verify(member){

            let emailAuthReq={
                email:member.email,
                uuid:member.uuid
            }

            let url = `/proxy/email/verify`;

            let response = await axios.post(url, emailAuthReq);
            console.log(response);
        },
        logout() {
            this.isLogined = false;
        },
        async getUserCategories(){
            let url = `/proxy/my/category`;

            let response = await axios.get(url); 
            console.log(response);
            this.userCategories = response.data.result;
        }
    }
})