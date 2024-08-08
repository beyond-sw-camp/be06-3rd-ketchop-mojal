import { defineStore } from "pinia";
// import axios from "axios";

export const useChatMessageStore = defineStore('', {
    state: () => ({
    }),
    // persist:{
    //     storage: sessionStorage,
    // },
    actions:{
        getChatMessages(){
            
        },
        sendChatMessage(message){
            console.log(message);
        }
    }
})