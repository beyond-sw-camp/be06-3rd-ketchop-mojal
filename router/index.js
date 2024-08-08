import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/pages/member/LoginPage.vue";
import SignupPage from "@/pages/member/SignupPage.vue";
import ChatListPage from "@/pages/chat/ChatListPage.vue";
import ChatRoomPage from "@/pages/chat/ChatRoomPage.vue";
import MyPage from "@/pages/member/MyPage.vue";
import PoatCreate from "@/pages/post/PostCreat.vue";
import ExPostReadComponent from "@/components/post/ExPostReadComponent.vue";
import ShPostReadComponent from "@/components/post/ShPostReadComponent.vue";
import SharePage from "@/pages/post/SharePage.vue";
import ExchangePage from "@/pages/post/ExchangePage.vue";
import MyPostPage from "@/pages/post/MyPostPage.vue";
import MainPage from "@/pages/MainPage.vue";
import ExPostListComponent from "@/components/post/ExPostListComponent.vue";
import ShPostListComponent from "@/components/post/ShPostListComponent.vue";
import SelectCategory from "@/pages/SelectCategory.vue"


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/login", component: LoginPage },
        { path: "/", component: MainPage },
        { path: "/signup", component: SignupPage },
        { path: "/chat", component: ChatListPage },
        { name: "chat-room", path: "/chat-room/:roomIdx", component: ChatRoomPage }, //props: route => ({ roomTitle: route.params.roomTitle })
        { path: "/mypage", component: MyPage },
        { path: "/myposts", component: MyPostPage },
        { path: "/expostcreate", component: ExPostCreateComponent },
        { name: "postcreate", path: "/postcreate/:postType", component: PoatCreate },
        { path: "/writecate", component: WriteCateModal },
        { path: "/exchange", component: ExchangePage },
        { path: "/share", component: SharePage },
        { name: "/expostread", path:"/expostread/:postIdx", component: ExPostReadComponent },
        { path: "/shpostread", component: ShPostReadComponent },
    ],
});


export default router;