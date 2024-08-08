import {createRouter, createWebHistory} from "vue-router";

import LoginPage from "@/pages/LoginPage.vue";
import SignupPage from "@/pages/SignupPage.vue";
import ChatListPage from "@/pages/ChatListPage.vue";
import ChatRoomPage from "@/pages/ChatRoomPage.vue";
import MyPage from "@/pages/MyPage.vue";
import EmsiMyPageComponent from "@/pages/EmsiMyPageComponent.vue";
import PoatCreate from "@/pages/PostCreat.vue";
import WriteCateModal from "@/components/WriteCateModal.vue";
import ExPostListComponent from "@/pages/ExPostListComponent.vue";
import ShPostListComponent from "@/pages/ShPostListComponent.vue";
import ExPostReadComponent from "@/pages/ExPostReadComponent.vue";
import ShPostReadComponent from "@/pages/ShPostReadComponent.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:"/login", component: LoginPage},
        {path:"/signup", component: SignupPage},
        {path:"/chat", component: ChatListPage},
        {name: "chat-room", path:"/chat-room/:roomIdx", component: ChatRoomPage},
        {path:"/mypage", component: MyPage},
        {path:"/emsimypage", component: EmsiMyPageComponent},
        {name: "postcreate", path:"/postcreate/:postType", component: PoatCreate},
        {path:"/writecate", component: WriteCateModal},
        {path:"/expostlist", component: ExPostListComponent},
        {path:"/shpostlist", component: ShPostListComponent},
        {path:"/expostread", component: ExPostReadComponent},
        {path:"/shpostread", component: ShPostReadComponent},
    ],
});


export default router;