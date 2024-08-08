<template lang="">
    <div data-v-abea0528="" data-name="chat-messages">
        <div data-v-19f19603="" data-v-abea0528="" class="chat-messages-container">
            <div data-v-19f19603="">
                <div data-v-19f19603="" class="chat-messages">
                    <ul data-v-19f19603="">
                        <li v-for="msg in messages" :key="msg.idx" :class="{'sender-message': isSender(msg.senderIdx)}"  data-v-19f19603="" id="message-965353008">
                            <ChatBubble :content="msg.content"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ChatBubble from './ChatBubble.vue'
import { mapStores } from 'pinia';
import {useChatMessageStore} from '@/store/useChatMessageStore';
import {useMemberStore} from '@/store/useMemberStore';

export default {
    components:{
        ChatBubble
    },
    props: {
        roomIdx: {
            type: String,
            required: true
        }
    },
    data(){
        return{
            messages: [
                { idx : 1, senderIdx: 1, content: "hihi content1" },
                { idx : 2, senderIdx: 2, content: "hihi content2" },
                { idx : 3, senderIdx: 1, content: "hihi content3" },
                { idx : 4, senderIdx: 2, content: "hihi content4" },
                { idx : 5, senderIdx: 2, content: "hihi content5" },
                { idx : 6, senderIdx: 1, content: "hihi content6" },
                { idx : 7, senderIdx: 1, content: "hihi content7" }
            ]
        };
    },
    computed:{
        ...mapStores(useChatMessageStore),
        ...mapStores(useMemberStore)
    },
    mounted(){
        console.log(this.roomIdx);
        this.getChatMessages(this.roomIdx);
    },
    methods: {
        getChatMessages(roomIdx) {
            console.log(roomIdx)
            // const response = this.useChatRoomStore.getChatList();
            // this.messages = response.data;
        },
        isSender(senderIdx) {
            return this.memberStore.userIdx === senderIdx;
        }
    }
    
}
</script>
<style scoped>
.sender-message{
    text-align: right;
}
</style>