import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "@/pages/member/LoginPage.vue";
import SignupPage from "@/pages/member/SignupPage.vue";
import ChatListPage from "@/pages/chat/ChatListPage.vue";
import ChatRoomPage from "@/pages/chat/ChatRoomPage.vue";
import MyPage from "@/pages/MyPage.vue";
// import ExPostCreateComponent from "@/pages/ExPostCreateComponent.vue";
import PoatCreate from "@/pages/post/PostCreat.vue";
// import WriteCateModal from "@/components/WriteCateModal.vue";
import ExPostReadPage from "@/pages/post/ExPostReadPage.vue";
import SharePostReadPage from "@/pages/SharePostReadPage.vue";
import SharePage from "@/pages/post/SharePage.vue";
import ExchangePage from "@/pages/post/ExchangePage.vue";
import MyPostPage from "@/pages/post/MyPostPage.vue";
import MainPage from "@/pages/MainPage.vue";
// import SelectCategory from "@/pages/SelectCategory.vue"
import RedirectPage from "@/pages/RedirectPage.vue"
import HomePage from '@/pages/HomePage.vue'
import MainComponent from '@/components/MainComponent.vue'




const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/main",
            component: MainPage,
            children: [
                { path: "", component: MainComponent },
                { path: "/login", component: LoginPage },
                { path: "/signup", component: SignupPage },
                { path: "/chat", component: ChatListPage },
                { name: "chat-room", path: "/chat-room/:roomIdx", component: ChatRoomPage },
                { path: "/mypage", component: MyPage },
                { path: "/myposts", component: MyPostPage },
                { name: "postcreate", path: "/postcreate/:postType", component: PoatCreate },
                { name: "exchange", path: "/exchange", component: ExchangePage },
                { name: "share", path: "/share", component: SharePage },
                // { path: "/writecate", component: WriteCateModal },
                { name: "expostdetail", path: "/expostread/:id", component: ExPostReadPage },
                { name: "sharedetail", path: "/sharedetail/:id", component: SharePostReadPage },

            ]
        },
        { path: "/", component: HomePage },
        { name: "redirect", path: "/redirect/:userName", component: RedirectPage },
    ],
});


export default router;