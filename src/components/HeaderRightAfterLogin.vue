<template lang="">
    <div data-v-26153660="" class="right-section-logined">
        <router-link to="chat">
            <span data-v-26153660="" class="gnb-link">채팅</span>
        </router-link>
        <div data-v-4c66cf88="" data-v-26153660="" class="notification-counter notification-counter right-section-item has-badge">
            <button data-v-4c66cf88="" type="button" class="btn btn-clear btn-none">
                <span data-v-0d243f1a="" data-v-4c66cf88="" class="sg-icon-v1 alarm fill" style="width: 1.5rem; height: 1.5rem; --svg-color: #323232;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.001 2.06079L11.999 2.06079C9.97499 2.06349 8.05941 2.98877 6.66424 4.5908C5.27192 6.18956 4.50296 8.33834 4.50071 10.5608V14.4899C4.50071 14.5503 4.47888 14.6086 4.43924 14.6541L3.4303 15.8127C3.15284 16.1313 3 16.5395 3 16.962V17.3108C3 18.2773 3.7835 19.0608 4.75 19.0608H8.32868C8.47595 19.7683 8.82956 20.423 9.35253 20.9399C10.0562 21.6354 11.0087 22.0245 12.0001 22.0245C12.9915 22.0245 13.944 21.6354 14.6477 20.9399C15.1707 20.423 15.5243 19.7683 15.6715 19.0608H19.25C20.2165 19.0608 21 18.2773 21 17.3108V16.962C21 16.5395 20.8472 16.1313 20.5697 15.8127L19.5608 14.6541C19.5211 14.6086 19.4993 14.5503 19.4993 14.4899V10.56C19.497 8.33758 18.7281 6.18956 17.3358 4.5908C15.9406 2.98877 14.025 2.06349 12.001 2.06079ZM14.1158 19.0608H9.88446C9.99491 19.3628 10.1719 19.6407 10.407 19.873C10.828 20.2892 11.4009 20.5245 12.0001 20.5245C12.5993 20.5245 13.1722 20.2892 13.5933 19.873C13.8283 19.6407 14.0053 19.3628 14.1158 19.0608ZM7.79542 5.57591C8.93058 4.27244 10.4456 3.56317 12 3.56079C13.5544 3.56317 15.0694 4.27244 16.2046 5.57591C17.3428 6.88293 17.9974 8.67461 17.9993 10.5616V14.4899C17.9993 14.9124 18.1521 15.3206 18.4296 15.6392L19.4385 16.7978C19.4782 16.8433 19.5 16.9016 19.5 16.962V17.3108C19.5 17.4489 19.3881 17.5608 19.25 17.5608H4.75C4.61193 17.5608 4.5 17.4489 4.5 17.3108V16.962C4.5 16.9016 4.52183 16.8433 4.56147 16.7978L5.57042 15.6392C5.84788 15.3206 6.00071 14.9124 6.00071 14.4899V10.5611C6.00273 8.67432 6.65726 6.88282 7.79542 5.57591Z" fill="black">
                        </path>
                    </svg>
                </span>
            </button>
        </div>
        <div data-v-35a09b99="" data-v-26153660="" class="usermenu user-menu right-section-item">
            <div data-v-35a09b99="" class="usermenu-button" @click="usermenuClick">
                <div data-v-29d5164e="" data-v-35a09b99="" class="user-profile-picture no-padding user-menu-open-customer">
                    <div data-v-29d5164e="" data-name="image" class="">
                        <img data-v-29d5164e="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K" alt="프로필 사진이 없는 사용자 기본 이미지">
                    </div>
                </div>
                <img :class="{'rotate': isUserMenuOn}" data-v-35a09b99="" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxMnYxMkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzg4OCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEwIDQgNiA4IDIgNCIvPgogICAgPC9nPgo8L3N2Zz4K">
            </div>
            <div data-v-35a09b99="" class="usermenu-dropdown" :class="{'usermenu-off':!isUserMenuOn}" >
                <div data-v-35a09b99="" data-name="user-info">
                    <h4 data-v-35a09b99="" data-name="name">{{memberStore.userName}} 고객님</h4>
                </div>
                <div data-v-35a09b99="" data-name="usermenu-control">
                    <div data-v-35a09b99="" class="col">
                        <router-link to="mypage" @click="mypage">
                            <span>마이페이지</span>
                        </router-link>
                    </div>
                    <div data-v-35a09b99="" class="col" @click="logout">로그아웃</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import {useMemberStore} from '@/store/useMemberStore';

export default {
    methods:{
        usermenuClick(){
            this.isUserMenuOn=!this.isUserMenuOn;
        },
        logout() {
            this.memberStore.logout();
            this.isUserMenuOn=false;
            //세션 삭제 코드 추가하기
            this.$router.push("/");
        },
        mypage(){
            this.isUserMenuOn=false;
        }
    },
    computed:{
        ...mapStores(useMemberStore)
    },
    data() {
        return { 
            isUserMenuOn : false
        };
    },
}
</script>
<style scoped>
button{
    background: transparent;
    border: none;
}
.rotate {
    transform: rotate(180deg);
    transition: transform 0.3s;
}
.usermenu-off{
    display: none;
}
.right-section-logined[data-v-26153660] {
    justify-content: flex-end;
}

.desktop-header .right-section-logined[data-v-26153660] {
    display: flex;
    align-items: center;
}
.gnb-link[data-v-26153660] {
    font-size: .875rem;
}
.right-section-item[data-v-26153660] {
    margin-left: 1rem;
}
.notification-counter[data-v-4c66cf88] {
    position: relative;
    cursor: pointer;
}
.right-section-item[data-v-26153660] {
    margin-left: 1rem;
}
.usermenu[data-v-35a09b99] {
    position: relative;
}
.usermenu-button[data-v-35a09b99] {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.usermenu-button .user-profile-picture[data-v-35a09b99] {
    width: 2rem;
    height: 2rem;
    margin-right: .5rem;
}
.user-profile-picture[data-v-29d5164e] {
    position: relative;
}
.user-profile-picture.no-padding div[data-name=image][data-v-29d5164e] {
    height: 100%;
    padding-bottom: 0;
}
.user-profile-picture div[data-name=image][data-v-29d5164e] {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #e1e1e1;
    border: .0625rem solid #f2f2f2;
    border-radius: 50%;
    background-size: cover;
    background-position: 50% 50%;
}
.user-profile-picture div[data-name=image] img[data-v-29d5164e] {
    width: 100%;
    vertical-align: middle;
}
.usermenu[data-v-35a09b99] .usermenu-dropdown {
    z-index: 100;
}
.usermenu-dropdown[data-v-35a09b99] {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(103%);
    background-color: #fff;
    border: .0625rem solid #e1e1e1;
    border-radius: 4px;
    padding: 1.3125rem;
    width: 15rem;
    overflow: visible;
    box-shadow: 0 0 .625rem 0 rgba(0, 0, 0, .1);
    text-align: left;
}
.usermenu-dropdown div[data-name=user-info] h4[data-name=name][data-v-35a09b99] {
    font-size: 1rem;
    margin-bottom: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.usermenu-dropdown div[data-name=usermenu-control][data-v-35a09b99] {
    border-bottom: .0625rem solid #e1e1e1;
    padding-bottom: 1.3125rem;
    padding-left: 0;
}
.usermenu-dropdown .logout[data-v-35a09b99], .usermenu-dropdown div[data-name=signup-pro-control] button.btn[data-v-35a09b99], .usermenu-dropdown div[data-name=user-type-control] button.btn[data-v-35a09b99], .usermenu-dropdown ul[data-name=usermenu-control][data-v-35a09b99] {
    font-size: .875rem;
    line-height: 1.3125rem;
    font-weight: 400;
    letter-spacing: -.0125rem;
}
.usermenu-dropdown div[data-name=usermenu-control] div[data-v-35a09b99] {
    padding: .65625rem 0;
    cursor: pointer;
}
.usermenu-dropdown div[data-name=usermenu-control]{
    margin-top: 1rem;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -.9375rem;
    margin-left: -.9375rem;
}
ul li {
    list-style: none;
}
.usermenu-dropdown div[data-name=usermenu-control] div[class*=col][data-v-35a09b99] {
    color: #323232;
}

.col{
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
}
</style>