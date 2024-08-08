<template lang="">
    <div data-v-157a9d34="" class="custom-button">
        <div data-v-083eade8="" data-v-157a9d34="" class="nudge chat-button-nudge-wrap">
            <button data-v-cbc4fb12="" data-v-157a9d34="" glock="" type="button" class="btn soomgo-pay-btn btn-primary btn-sm btn-block sg-button" data-v-083eade8=""> {{buttonName}} </button>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        buttonName:{
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
.custom-button{
    width: 100%;
    margin-left: .4375rem;
    width: 10rem;
}
.nudge[data-v-157a9d34] {
    width: 100%;
}
.chat-button-nudge-wrap[data-v-083eade8] {
    position: relative;
}
.soomgo-pay-btn[data-v-157a9d34] {
    padding: .625rem .75rem;
    background-image: linear-gradient(90deg, #00c7ae 0, #4cc8e5);
    border: 0;
}
.btn[data-v-157a9d34] {
    border-radius: 6px;
    height: 2.25rem !important;
}
.btn-primary[data-v-cbc4fb12], .btn-primary[data-v-cbc4fb12]:focus {
    color: #fff;
    background-color: #00c7ae;
    border-color: #00c7ae;
}
.btn-block[data-v-cbc4fb12] {
    display: flex;
}
.btn-sm[data-v-cbc4fb12] {
    padding: .5rem .75rem;
    font-size: .875rem;
    line-height: 1.286;
    border-radius: 8px;
    font-weight: 500;
}
.sg-button[data-v-cbc4fb12] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .75rem 1rem;
    font-size: 1rem;
    line-height: 1.375;
    border-radius: 8px;
    font-weight: 500;
    width: 100%;
}
[type=button]:not(:disabled){
    cursor: pointer;
}
.btn {
    font-weight: 500;
    transition: opacity .2s ease-in-out;
}
</style>