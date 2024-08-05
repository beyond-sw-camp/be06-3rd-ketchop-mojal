import {createRouter, createWebHistory} from "vue-router";

import LoginPage from "@/pages/LoginPage.vue";
import SignupPage from "@/pages/LoginPage.vue";
import ChatListPage from "@/pages/ChatListPage.vue";
import ChatRoomPage from "@/pages/ChatRoomPage.vue";
import MyPage from "@/pages/MyPage.vue";
import EmsiMyPageComponent from "@/pages/EmsiMyPageComponent.vue";
import ExPostCreateComponent from "@/pages/ExPostCreateComponent.vue";
import ShPoatCreateComponent from "@/pages/ShPostCreateComponent.vue";
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
        {path:"/chat-room", component: ChatRoomPage},
        {path:"/mypage", component: MyPage},
        {path:"/emsimypage", component: EmsiMyPageComponent},
        {path:"/expostcreate", component: ExPostCreateComponent},
        {path:"/shpostcreate", component: ShPoatCreateComponent},
        {path:"/writecate", component: WriteCateModal},
        {path:"/expostlist", component: ExPostListComponent},
        {path:"/shpostlist", component: ShPostListComponent},
        {path:"/expostread", component: ExPostReadComponent},
        {path:"/shpostread", component: ShPostReadComponent},
    ],
});


export default router;