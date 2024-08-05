<template lang="">
    <div data-v-31ad20b6="" class="chat-list-container">
        <div data-v-31ad20b6="" class="page-header">
            <div data-v-0b1c3aaa="" data-v-31ad20b6="" class="container">
                <section data-v-0b1c3aaa="" data-name="page-title">
                    <h3 data-v-0b1c3aaa="">채팅</h3>
                    <a data-v-0b1c3aaa="" href="/chats/edit" class="chat-list-edit-button"> 편집 </a>
                </section>
            </div>
        </div>
        <div data-v-31ad20b6="" class="page-body">
            <div data-v-31ad20b6="" class="container container">
                <ul data-v-31ad20b6="" class="chat-list">
                    <li>
                        <router-link to="chat-room">
                            <span><ChatElement/></span>
                        </router-link>
                    </li> 
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import ChatElement from '../components/ChatElement.vue';

export default {
    components:{
        ChatElement
    }
};
</script>
<style scoped>
    .chat-list-container[data-v-31ad20b6] {
        /* padding-top: 7.5rem; */
        padding: 7.5rem 2.5rem;
    }
    .chat-list-container .container[data-v-31ad20b6] {
        max-width: 37.5rem;
        padding: 0;
    }
    a{
        text-decoration: none;
    }

    @media (min-width: 992px) {
        .container{
            max-width: 60rem;
        }
    }
    @media (min-width: 768px) {
        .container{
            max-width: 45rem;
        }
    }
    @media (min-width: 576px) {
        .container{
            max-width: 33.75rem;
        }
    }
    @media (min-width: 992px) {
        .container {
            max-width: 60rem;
        }
    }
    @media (min-width: 768px) {
        .container {
            max-width: 45rem;
        }
    }
    @media (min-width: 576px) {
        .container {
            max-width: 33.75rem;
        }
    }
    .container {
        width: 100%;
        padding-right: .9375rem;
        padding-left: .9375rem;
        margin-right: auto;
        margin-left: auto;
    }
    section[data-name=page-title][data-v-0b1c3aaa] {
        display: flex;
        justify-content: space-between;
    }

    section {
        display: block;
    }
    section[data-name=page-title] h3[data-v-0b1c3aaa] {
        display: inline-block;
        margin-bottom: 0;
        font-weight: 500;
        color: #323232;
    }

    h3{
        margin-top: 0;
        margin-bottom: .5rem;
    }
    h3 {
        font-size: 1.75rem;
        line-height: 2.625rem;
        font-weight: 400;
        letter-spacing: -.03125rem;
    }
    h3 {
        display: block;
        font-size: 1.17em;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
        unicode-bidi: isolate;
    }
    section[data-name=page-title] .chat-list-edit-button[data-v-0b1c3aaa] {
        margin: auto 0;
        color: #737373;
    }
    a{
        text-decoration: none;
    }
    a {
        color: #323232;
        background-color: transparent;
    }
    a:-webkit-any-link {
        color: -webkit-link;
        cursor: pointer;
        text-decoration: underline;
    }
    .chat-list-container .page-body[data-v-31ad20b6] {
        min-height: -webkit-fill-available;
        /* padding: .75rem 0 4rem; */
        padding: 1rem 0 4rem;
    }
    .chat-list-container .page-body .container[data-v-31ad20b6] {
        min-height: 12.5rem;
    }
    .chat-list-container .container[data-v-31ad20b6] {
        max-width: 37.5rem;
        padding: 0;
    }
    @media (min-width: 992px) {
        .container, .container-lg, .container-md, .container-sm {
            max-width: 60rem;
        }
    }
    @media (min-width: 768px) {
        .container, .container-md, .container-sm {
            max-width: 45rem;
        }
    }
    @media (min-width: 576px) {
        .container, .container-sm {
            max-width: 33.75rem;
        }
    }
    @media (min-width: 992px) {
        .container {
            max-width: 60rem;
        }
    }
    @media (min-width: 768px) {
        .container {
            max-width: 45rem;
        }
    }
    @media (min-width: 576px) {
        .container {
            max-width: 33.75rem;
        }
    }
    .container {
        width: 100%;
        padding-right: .9375rem;
        padding-left: .9375rem;
        margin-right: auto;
        margin-left: auto;
    }
    .chat-list-container .page-body .container .chat-list[data-v-31ad20b6] {
        display: flex;
        flex-direction: column;
        gap: .75rem;
        margin: 0;
    }
    ul {
        padding: 0;
    }
</style>