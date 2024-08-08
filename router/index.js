import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/pages/LoginPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import ChatListPage from "@/pages/ChatListPage.vue";
import ChatRoomPage from "@/pages/ChatRoomPage.vue";
import MyPage from "@/pages/MyPage.vue";
import ExPostCreateComponent from "@/pages/ExPostCreateComponent.vue";
import PoatCreate from "@/pages/PostCreat.vue";
import WriteCateModal from "@/components/WriteCateModal.vue";
import ExPostReadComponent from "@/pages/ExPostReadComponent.vue";
import ShPostReadComponent from "@/pages/ShPostReadComponent.vue";
import SharePage from "@/pages/SharePage.vue";
import ExchangePage from "@/pages/ExchangePage.vue";
import MyPostPage from "@/pages/MyPostPage.vue";
import MainPage from "@/pages/MainPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/login", component: LoginPage },
        { path: "/", component: MainPage },
        { path: "/signup", component: SignupPage },
        { path: "/chat", component: ChatListPage },
        { name: "chat-room", path: "/chat-room/:roomIdx", component: ChatRoomPage },
        { path: "/mypage", component: MyPage },
        { path: "/myposts", component: MyPostPage },
        { path: "/expostcreate", component: ExPostCreateComponent },
        { name: "postcreate", path: "/postcreate/:postType", component: PoatCreate },
        { path: "/writecate", component: WriteCateModal },
        { path: "/exchange", component: ExchangePage },
        { path: "/share", component: SharePage },
        { path: "/expostread", component: ExPostReadComponent },
        { path: "/shpostread", component: ShPostReadComponent },
    ],
});


export default router;