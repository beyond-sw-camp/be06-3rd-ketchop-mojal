<template lang="">
    <div data-v-abea0528="" data-name="chat-messages">
        <div data-v-19f19603="" data-v-abea0528="" class="chat-messages-container">
            <div data-v-19f19603="">
                <div data-v-19f19603="" class="chat-messages">
                    <ul data-v-19f19603="">
                        <li v-for="msg in chatMessageStore.messages" :key="msg.idx" :class="{'sender-message': isSender(msg.senderIdx)}"  data-v-19f19603="" id="message-965353008">
                            <ChatBubble :msg="msg"/>
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
import { useChatMessageStore } from '@/store/useChatMessageStore';
import { useMemberStore } from '@/store/useMemberStore';
import { useChatRoomStore } from '@/store/useChatRoomStore';

export default {
    components:{
        ChatBubble
    },
    props: {
        roomIdx: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
        };
    },
    computed:{
        ...mapStores(useChatMessageStore),
        ...mapStores(useChatRoomStore),
        ...mapStores(useMemberStore)
    },
    async mounted() {
        await this.joinRoomAndGetChatMessages(this.roomIdx);
    },
    methods: {
        async joinRoomAndGetChatMessages(roomIdx) {
            // console.log("Joining room with ID:", roomIdx);
            try {
                await this.chatMessageStore.getChatMessages(roomIdx);
                this.messages = this.chatMessageStore.messages;
                console.log("Messages fetched successfully");
                // console.log(this.messages);
                
            } catch (error) {
                console.error("Error joining room and fetching messages:", error);
            }
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