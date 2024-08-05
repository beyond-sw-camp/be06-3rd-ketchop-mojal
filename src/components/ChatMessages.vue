<template lang="">
    <div data-v-abea0528="" data-name="chat-messages">
        <div data-v-19f19603="" data-v-abea0528="" class="chat-messages-container">
            <div data-v-19f19603="">
                <div data-v-19f19603="" class="chat-messages">
                    <ul data-v-19f19603="">
                        <li data-v-19f19603="" id="message-965353008" class="">
                            <ChatBubble/>
                        </li>
                        <li data-v-19f19603="" id="message-965353008" class="">
                            <ChatBubble/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ChatBubble from './ChatBubble.vue'
export default {
    components:{
        ChatBubble
    }
    
}
</script>
<style scoped>
ul li:nth-of-type(2){
    text-align: right;
}
</style>