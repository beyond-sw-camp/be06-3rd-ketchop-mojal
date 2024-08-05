<template lang="">
    <div data-v-abea0528="" class="row no-gutters">
        <section data-v-abea0528="" class="chatbody-section col">
            <ChatHeader/>
            <ChatMessages/>
            <ChatMessageInput/>
        </section>
    </div>
</template>
<script>
import ChatHeader from '../components/ChatHeader.vue'
import ChatMessageInput from '../components/ChatMessageInput.vue'
import ChatMessages from '../components/ChatMessages.vue'

export default {
    components:{
        ChatHeader,
        ChatMessageInput,
        ChatMessages
    }
    
}
</script>
<style scoped>
.no-gutters{
    position: relative;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
}

.no-gutters {
    margin-right: 0;
    margin-left: 0;
}
.row {
    display: flex;
    flex-wrap: wrap;
}
.chatbody-section[data-v-abea0528] {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #eff1f5;
}
.chatbody-section > div:nth-of-type(3){
    margin: 0 1rem;
}
.no-gutters>.col{
    padding-right: 0;
    padding-left: 0;
}
.col{
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
}
</style>