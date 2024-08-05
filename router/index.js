import {createRouter, createWebHistory} from "vue-router";

import LoginPage from "@/pages/LoginPage.vue";
import SignupPage from "@/pages/LoginPage.vue";
import ChatListPage from "@/pages/ChatListPage.vue";
import ChatRoomPage from "@/pages/ChatRoomPage.vue";
import MyPage from "@/pages/MyPage.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/login", component: LoginPage},
        {path:"/signup", component: SignupPage},
        {path:"/chat", component: ChatListPage},
        {path:"/chat-room", component: ChatRoomPage},
        {path:"/mypage", component: MyPage}
    ],
});


export default router;