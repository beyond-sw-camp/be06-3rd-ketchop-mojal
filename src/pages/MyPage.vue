<template lang="">
    <div class="container container-md">
        <div data-v-64335656="" class="mypage-container">
            <h1 data-v-64335656="" class="mypage-title">마이페이지</h1>
            <div data-v-e20527e2="" data-v-64335656="" class="profile-container underline">
                <a data-v-e20527e2="" href="/mypage/account-info" class="">
                    <div data-v-e20527e2="" class="thumb">
                        <div data-v-29d5164e="" data-v-e20527e2="" class="user-profile-picture h-100">
                            <div data-v-29d5164e="" data-name="image" class="" data-src="https://static.cdn.soomgo.comNone?h=320&amp;w=320" lazy="error" style="background-image: url(&quot;data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K&quot;);">
                            </div>
                        </div>
                    </div>
                    <div data-v-e20527e2="" class="user-info">
                        <div data-v-e20527e2="" class="user-name">
                            <span data-v-e20527e2="" class="name-length">{{memberStore.userName}}</span>
                            <span data-v-e20527e2="" class="user-type">고객님</span>
                        </div>
                        <div data-v-e20527e2="" class="user-id">
                            <img data-v-e20527e2="" src="https://assets.cdn.soomgo.com/icons/icon-mypage-kakaotalk-signin.svg">
                            <span data-v-e20527e2="" class="id-length">{{memberStore.userEmail}}</span>
                        </div>
                    </div>
                    <div data-v-e20527e2="" class="account-setting">
                        <button data-v-e20527e2="" type="button" class="btn btn-account-setting btn-secondary">계정설정</button>
                    </div>
                </a>
                <a data-v-e20527e2="" href="/mypage/coupon" class="btn coupon-btn btn-secondary btn-block" target="_self">쿠폰함</a>
            </div>
            <div data-v-23177e17="" data-v-64335656="" class="my-page-menu">
                <ul data-v-23177e17="" class="underline">
                    <li data-v-23177e17="" class="main-menu">
                        <div data-v-a9f85b62="" data-v-713cd9e8="" class="main-pro-locations">
                            <div style="margin-bottom : 20px">내 재능</div>
                            <ul data-v-a9f85b62="" class="location-list" id="category-list">
                                <li class="location-item">IT/Programming</li>
                                <li class="location-item">IT/Programming</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul data-v-23177e17="" class="underline">
                    <li data-v-23177e17="" class="main-menu"> 설정 
                        <a data-v-23177e17="" role="button"></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { mapStores } from 'pinia';
import {useMemberStore} from '@/store/useMemberStore';

export default {
    computed:{
        ...mapStores(useMemberStore)
    },
}
</script>
<style scoped>
 .main-pro-locations .location-item{
        position: relative;
        float: left;
        padding: .5625rem 1.125rem;
        margin-right: .5rem;
        margin-bottom: .625rem;
        font-size: 1rem;
        line-height: 1.5;
        color: #737373;
        letter-spacing: -.01875rem;
        border: .0625rem solid #e1e1e1;
        border-radius: 21px;
    }
@media (max-width: 991.98px) {
    .container {
        padding-left: 1rem;
        padding-right: 1rem;
    }
}
@media (min-width: 576px) {
    .container, .container-sm {
        max-width: 33.75rem;
    }
}
.container-md{
    width: 100%;
    padding-top: 4.5rem;
    padding-right: .9375rem;
    padding-left: .9375rem;
    margin-right: auto;
    margin-left: auto;
}
.mypage-container .mypage-title[data-v-64335656] {
    font-weight: 500;
    line-height: 1.41;
    letter-spacing: -.0462rem;
    color: #323232;
    margin: 0;
    font-size: 1.5rem;
    padding: 1.875rem 0;
}
.underline[data-v-e20527e2] {
    border-bottom: .0625rem solid;
    border-color: #f2f2f2;
}

.profile-container[data-v-e20527e2] {
    font-size: 0;
    padding: 1.5rem 0;
    margin-bottom: 1rem;
    position: relative;
    background-color: #fff;
    z-index: 3;
}
.profile-container a[data-v-e20527e2] {
    display: flex;
    align-items: center;
}
a, a:hover {
    text-decoration: none;
}
a {
    color: #323232;
    background-color: transparent;
}
.thumb[data-v-e20527e2] {
    width: 4.375rem;
    height: 4.375rem;
    min-width: 4.375rem;
    overflow: hidden;
}
.user-profile-picture[data-v-29d5164e] {
    position: relative;
}
.h-100 {
    height: 100% !important;
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
.user-info[data-v-e20527e2] {
    flex: 1;
    overflow: hidden;
    text-align: left;
    padding-left: .75rem;
}
.user-name[data-v-e20527e2] {
    display: flex;
    flex: 1;
    font-size: 1.125rem;
    font-weight: 500;
    color: #323232;
}
.name-length[data-v-e20527e2] {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: .3125rem;
}
.user-name .user-type[data-v-e20527e2] {
    flex: 0 0 auto;
    padding-right: 1rem;
}
.user-id[data-v-e20527e2] {
    display: flex;
    font-size: .75rem;
    color: #b5b5b5;
}
.user-id img[data-v-e20527e2] {
    margin-right: .25rem;
}

img, svg {
    vertical-align: middle;
}
img {
    border-style: none;
}
.profile-container .account-setting .btn-account-setting[data-v-e20527e2] {
    border: none;
    border-radius: 12px;
    background-color: #f2f2f2;
    padding: .25rem .625rem;
    font-size: .75rem;
    color: #737373;
    font-weight: 500;
}
[type=button]:not(:disabled){
    cursor: pointer;
}
.btn {
    font-weight: 500;
    transition: opacity .2s ease-in-out;
}
.my-page-menu>ul[data-v-23177e17] {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
}

.underline[data-v-23177e17] {
    border-bottom: .0625rem solid;
    border-color: #f2f2f2;
}
.my-page-menu .main-menu[data-v-23177e17] {
    display: flex;
    align-items: center;
    padding: .75rem 0;
    font-size: 1.125rem;
    font-weight: 700;
    color: #323232;
}
a:not([href]), a:not([href]):hover {
    color: inherit;
    text-decoration: none;
}

.clickable, [role=button] {
    cursor: pointer;
}
.my-page-menu>ul[data-v-23177e17]:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 2.53125rem;
}
.my-page-menu .main-menu[data-v-23177e17] {
    display: flex;
    align-items: center;
    padding: .75rem 0;
    font-size: 1.125rem;
    font-weight: 700;
    color: #323232;
}

</style>