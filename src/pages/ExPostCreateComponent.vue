<template>
    <!-- body -> bbodyy, html -> template -->
    <div class="bbodyy post-write hide-mobile-global-header" style="padding-right: 0px;">   
    <div id="app" data-browser="Chrome" data-is-loaded="true" class="">
        <div id="app-sticky-nav" class="vue-portal-target"></div>
        <div id="app-body">
            <div data-v-c05eb1ae="" class="community-container container">
                <div data-v-0352d1b6="" data-v-c05eb1ae="" class="soomgo-life-container">
                    <!-- 작성 포스트 컨테이너 -->
                    <section data-v-517e3499="" data-v-0352d1b6="" class="write-post-container">
                        <div data-v-d87b96c8="" data-v-517e3499="" class="select-subject-header">
                            <div data-v-d87b96c8="" class="subject-header-wrapper">
                                <img data-v-d87b96c8=""
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzMyMzIzMiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuNDMuNDNsMS4xMzEgMS4xMzEtNy40MzQgNy40MzUgNy40MzQgNy40MzQtMS4xMzEgMS4xMzEtNy40MzUtNy40MzQtNy40MzQgNy40MzRMLjQzIDE2LjQzbDcuNDM0LTcuNDM0TC40MyAxLjU2MSAxLjU2MS40M2w3LjQzNCA3LjQzNEwxNi40My40M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMzcgLTExNCkgdHJhbnNsYXRlKDAgOTQpIHRyYW5zbGF0ZSgzMzcgMjApIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="
                                    alt="뒤로 가기" class="back-button">
                                <!-- 글 주제 선택 부분 -->
                                <select data-v-746dd3c0="" data-v-d87b96c8=""
                                    class="post-subject-select-box custom-select legacy-typography headline-subhead3 gray-900 text-align-left"
                                    value="ask-provider" id="__BVID__12040">
                                    <option data-v-d87b96c8="" disabled="disabled" value=""> 주제 선택 </option>
                                    <option data-v-d87b96c8="" value="ask-provider"><router-link to="/expostcreate">교환</router-link></option>
                                    <option data-v-d87b96c8="" value="together"><router-link to="/shpostcreate">나눔</router-link></option>
                                </select>
                                <!-- 글 등록 버튼 부분 -->
                                <button data-v-d87b96c8="" type="button" disabled="disabled"
                                    class="btn btn-secondary disabled write-post-submit">등록
                                </button>
                            </div>
                        </div>
                        <!-- 파일 업로드 부분 -->
                        <div data-v-88fa91b4="" data-v-517e3499="" class="attach-file-wrapper">
                            <div data-v-88fa91b4="" class="attach-file-area">
                                <div data-v-88fa91b4="" class="add-image-icon"></div>
                                <div data-v-88fa91b4="" class="custom-file b-form-file file-input" aria-required="false"
                                    aria-invalid="false" id="__BVID__12042__BV_file_outer_">
                                    <input type="file" name="uploadFile"
                                        accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp,image/heic"
                                        multiple="multiple" class="custom-file-input" id="__BVID__12042"
                                        style="z-index: -5;">
                                    <label data-browse="Browse" class="custom-file-label" for="__BVID__12042">
                                        <span class="d-block form-file-text" style="pointer-events: none;">No file
                                            chosen
                                        </span>
                                    </label>
                                </div>
                                <span data-v-746dd3c0="" data-v-88fa91b4=""
                                    class="image-count legacy-typography interface-body2 gray-900 text-align-left">0/15</span>
                            </div>
                        </div>
                        <!-- 글 작성 컨테이너 -->
                        <div data-v-3437dfdd="" data-v-517e3499="" class="editor-body-container is-bottom-margin">
                            <div data-v-3437dfdd="" class="editor-body-wrapper">
                                <!-- 제목 입력 부분 -->
                                <div data-v-067f75d6="" data-v-3437dfdd="" class="editor-title-wrapper">
                                    <div data-v-067f75d6="" class="editor-title-container">
                                        <label data-v-067f75d6="" for="post-title-input" class="editor-title-label">
                                            <input data-v-746dd3c0="" data-v-067f75d6="" id="post-title-input"
                                                type="text" placeholder="제목을 입력해주세요." value=""
                                                class="post-title-input legacy-typography headline-subhead5 gray-900 text-align-left">
                                        </label>
                                    </div>
                                </div>
                                <!-- 구분 선 -->
                                <div data-v-3437dfdd="" class="divider-wrapper">
                                    <hr data-v-3437dfdd="" class="hr-divider">
                                </div>
                                <!-- 카테고리선택 리스트 부분 -->
                                <div data-v-4e6a8560="" data-v-3437dfdd="" class="service-region-wrapper">
                                    <router-link to="/writecate">
                                        <button data-v-4e6a8560="" class="category-select-box">
                                            <span data-v-4e6a8560="" class="text">(선택) 줄 카테고리</span>
                                        </button>
                                    </router-link>
                                    줄 상세종목 : <input type="text" name="btmGiveCategory" id="btmCategory-input">
                                    <router-link to="/writecate">
                                        <button data-v-4e6a8560="" class="category-select-box">
                                            <span data-v-4e6a8560="" class="text">(선택) 받을 카테고리</span>
                                        </button>
                                    </router-link>
                                    받을 상세종목 : <input type="text" name="btmGiveCategory" id="btmCategory-input">
                                    <!-- <button data-v-4e6a8560="" class="category-select-box">
                                        <span data-v-4e6a8560="" class="text">(선택)
                                            지역</span>
                                    </button> -->
                                </div>
                                <!-- 구분 선 -->
                                <div data-v-3437dfdd="" class="divider-wrapper">
                                    <hr data-v-3437dfdd="" class="hr-divider">
                                </div>
                                <!-- 글 상세 설명 작성 부분 -->
                                <div data-v-c7163a48="" data-v-3437dfdd="" class="editor-contents">
                                    <span data-v-746dd3c0="" data-v-c7163a48=""
                                        class="legacy-typography interface-body2 gray-900 text-align-left">
                                        <textarea data-v-c7163a48="" data-v-746dd3c0="" name="post-content"
                                            class="editor-contents-textarea">
                                        </textarea>
                                    </span>
                                    <span style="color:gray" data-v-746dd3c0="" data-v-c7163a48=""
                                        class="editor-contents-textarea-placeholder legacy-typography interface-body2 gray-500 text-align-left">
                                        다른 사람들과 교환할 재능에 대해 소개 해주세요.
                                        <br>
                                        예) 나는 영어! 너는 수학! 교환하자!!!!!!!!!!!!!!!!
                                        문의사항은 채팅으로 해라!!!
                                        <br>
                                        <br>
                                        ※ 주제에 맞지 않는 글이나 커뮤니티 이용정책에 위배되는 글은 신고의 대상이 됩니다.
                                        ※ 일정 수 이상의 신고를 받으면 작성한 글이 숨김 및 삭제될 수 있습니다.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div data-v-c05eb1ae="" class="v-portal" style="display: none;"></div>
            </div>
        </div>
    </div>
    <!-- 모달 창 div html넣는 부분 -->
</div>
</template>

<script>
// import axios from "axios";

export default {
    name: 'ExPostCreateComponent',
    data() {
        return { 
            message: "test",
            giveCate: "",
            takeCate: ""
         }
    }
}
</script>

<style scoped>

/* 포스트작성 css */
.bbodyy {
    --gnb-height: 72px;
    padding-right: 0px;
    padding-top: 72px;
}

.bbodyy, template {
    height: 100%;
}

.bbodyy {
    margin: 0;
    font-family: Noto Sans KR, Malgun Gothic, -apple-system, Segoe UI, Roboto, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #323232;
    text-align: left;
    background-color: #fff;
    /* border:1px solid rgb(75, 83, 242); */
}

template {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

div {
    display: block;
    unicode-bidi: isolate;
}

* {
    word-break: break-word;
}

*,
:after,
:before {
    box-sizing: border-box;
}

/* template[Attributes Style] {
    -webkit-locale: "ko";
} */

:root {
    view-transition-name: root;
}

template {
    display: block;
}

:root {
    --blue: #4785ff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #ff3131;
    --orange: #fd7e14;
    --yellow: #ffce21;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #999;
    --gray-dark: #525252;
    --primary: #00c7ae;
    --secondary: #e1e1e1;
    --success: #00c7ae;
    --info: #17a2b8;
    --warning: #ffce21;
    --danger: #ff3131;
    --light: #fafafa;
    --dark: #525252;
    --breakpoint-xs: 0;
    --breakpoint-sm: 36rem;
    --breakpoint-md: 48rem;
    --breakpoint-lg: 62rem;
    --breakpoint-xl: 75rem;
    --font-family-sans-serif: "Noto Sans KR", "Malgun Gothic", -apple-system, "Segoe UI", Roboto, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

/* <div id="app"> */
/* 
.bbodyy.hide-mobile-global-header #app {
    height: 100%;
} */

/* #app[data-is-loaded=true], 
#app[data-is-loaded=true] #app-body, 
#app[data-is-loaded=true] #app-header, 
#app[data-is-loaded=true] #app-sticky-nav {
    opacity: 1;
}

#app {
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: 0;
    min-height: 100%;
} */

/* <div id="app-sticky-nav" class="vue-portal-target"> */

/* @media (min-width: 992px) {
    #app #app-sticky-nav {
        top: 4.5rem;
    }
}

#app #app-sticky-nav {
    position: sticky;
    top: 3.625rem;
    left: 0;
    right: 0;
    z-index: 2;
    transform: translateY(-100%);
} */

/* <div id="app-body"> */

/* #app #app-body {
    height: 100%;
    position: relative;
    flex-grow: 1;
}

#app #app-body, #app #app-header {
    opacity: 0;
    transition: opacity .3s ease-in;
}

@media (min-width: 768px) {
    .post-edit #app-body, .post-write #app-body {
        height: auto !important;
    }
} */

/* <div data-v-c05eb1ae="" class="community-container container"> */

.community-container[data-v-c05eb1ae] {
    max-width: 100%;
}

@media (min-width: 1200px) {
    .container, .container-lg, .container-md, .container-sm, .container-xl {
        max-width: 62.5rem;
    }
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

@media (min-width: 1200px) {
    .container {
        max-width: 62.5rem;
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

/* <div data-v-0352d1b6="" data-v-c05eb1ae="" class="soomgo-life-container"> */

.soomgo-life-container[data-v-0352d1b6] {
    max-width: 100%;
    height: 100%;
}

/* <section data-v-517e3499="" data-v-0352d1b6="" class="write-post-container"> */

article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
}

/* <div data-v-d87b96c8="" data-v-517e3499="" class="select-subject-header"> */

.select-subject-header[data-v-d87b96c8] {
    height: 3.5rem;
    padding: 1rem 0;
    background-color: #fff;
}

/* <div data-v-d87b96c8="" class="subject-header-wrapper"> */

.select-subject-header .subject-header-wrapper[data-v-d87b96c8] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60.625rem;
    height: 100%;
    margin: auto;
}

/* <img data-v-d87b96c8="" */

.select-subject-header .subject-header-wrapper .back-button[data-v-d87b96c8] {
    display: none;
}

img, svg {
    vertical-align: middle;
}

img {
    border-style: none;
}

img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

/* <select data-v-746dd3c0="" data-v-d87b96c8="" */

@media (min-width: 768px) {
    .select-subject-header .subject-header-wrapper .post-subject-select-box[data-v-d87b96c8] {
        padding-left: 0;
    }
}

.select-subject-header .subject-header-wrapper .post-subject-select-box[data-v-d87b96c8] {
    width: auto;
    font-weight: 500;
    color: #2d2d2d;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUgNy41bDUuNDE3IDYuNjY3TDE1LjgzMyA3LjV6IiBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=);
    background-position: right .875rem top 50%, 0 0;
    background-size: 1.25rem;
    border: 0;
}

.legacy-typography.gray-900[data-v-746dd3c0] {
    color: #2d2d2d;
}

.headline-subhead3[data-v-746dd3c0] {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -.01875rem;
}

.custom-select {
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAxOGgxOFYwSDB6Ii8+PHBhdGggc3Ryb2tlPSIjMDBDN0FFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE0LjQzNCA2Ljc1MWwtNS40IDUuNC01LjQtNS40Ii8+PC9nPjwvc3ZnPg==);
    background-repeat: no-repeat, repeat;
    background-position: right .7em top 50%, 0 0;
    background-size: 1em auto, 100%;
}

.custom-control-label:before, .custom-file-label, .custom-select {
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.custom-select {
    display: inline-block;
    width: 100%;
    height: calc(1.5em + 1.5rem);
    padding: .6875rem 2rem .6875rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #323232;
    vertical-align: middle;
    /* 백그라운드 오류? */
    /* background: #fff url(data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%23525252' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E) no-repeat right 1rem center / .5rem .625rem; */
    border: .0625rem solid #e1e1e1;
    border-radius: .25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

select {
    word-wrap: normal;
}

button, select {
    text-transform: none;
}

button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

/* <option data-v-d87b96c8="" */

option:disabled {
    color: light-dark(rgb(170, 170, 170));
}

option {
    font-weight: normal;
    display: block;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    white-space: nowrap;
}

/* select {
    font-style: ;
    font-variant-ligatures: ;
    font-variant-caps: ;
    font-variant-numeric: ;
    font-variant-east-asian: ;
    font-variant-alternates: ;
    font-variant-position: ;
    font-weight: ;
    font-stretch: ;
    font-size: ;
    font-family: ;
    font-optical-sizing: ;
    font-kerning: ;
    font-feature-settings: ;
    font-variation-settings: ;
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    -webkit-rtl-ordering: logical;
    cursor: default;
    white-space: pre;
} */

/* <button data-v-d87b96c8="" type="button" */

.select-subject-header .subject-header-wrapper .write-post-submit[data-v-d87b96c8] {
    padding: 0 1rem 0 0;
    font-weight: 500;
    color: #c5c5c5;
    text-align: center;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background: #fff;
    border: 0;
}

.btn.btn-outline-secondary, .btn.btn-secondary {
    color: #737373;
}

.btn-secondary.disabled, .btn-secondary:disabled {
    color: #323232;
    background-color: #e1e1e1;
    border-color: #e1e1e1;
}

.btn.disabled, .btn:disabled {
    opacity: 1;
}

.btn {
    font-weight: 500;
    transition: opacity .2s ease-in-out;
}

.btn-secondary {
    color: #323232;
    background-color: #e1e1e1;
    border-color: #e1e1e1;
}

.btn {
    display: inline-block;
    font-weight: 400;
    color: #323232;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: .0625rem solid transparent;
    padding: .6875rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
}

button, select {
    text-transform: none;
}

button, input {
    overflow: visible;
}

button {
    border-radius: 0;
}

/* <div data-v-88fa91b4="" data-v-517e3499="" class="attach-file-wrapper"> */

.attach-file-wrapper[data-v-88fa91b4] {
    display: flex;
    justify-content: center;
    height: 3.5rem;
    padding: 1rem 1.25rem;
    background-color: #fafafa;
    margin: 0 -1rem;
    border-top: .0625rem solid #f4f4f4;
    border-bottom: .0625rem solid #f4f4f4;
}

/* <div data-v-88fa91b4="" class="attach-file-area"> */

@media (min-width: 768px) {
    .attach-file-wrapper .attach-file-area[data-v-88fa91b4] {
        width: 60.625rem;
    }
}

.attach-file-wrapper .attach-file-area[data-v-88fa91b4] {
    display: flex;
    align-items: center;
}

/* <div data-v-88fa91b4="" class="add-image-icon"></div> */

.attach-file-wrapper .attach-file-area .add-image-icon[data-v-88fa91b4] {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: .4375rem;
    -o-object-fit: contain;
    object-fit: contain;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjc1IDIuNWwxLjY3OCAxLjc2aDIuOTA1YzEuMDA5IDAgMS44MzQuNzkgMS44MzQgMS43NTl2MTAuNTU1YzAgLjk2OC0uODI1IDEuNzYtMS44MzQgMS43NkgyLjY2N2MtMS4wMDkgMC0xLjgzNC0uNzkyLTEuODM0LTEuNzZWNi4wMmMwLS45NjguODI1LTEuNzYgMS44MzQtMS43NmgyLjkwNUw3LjI1IDIuNWg1LjV6TTEwIDguMTU1Yy0xLjg5OCAwLTMuNDM4IDEuNTItMy40MzggMy4zOTMgMCAxLjg3MiAxLjU0IDMuMzkyIDMuNDM4IDMuMzkyIDEuODk4IDAgMy40MzgtMS41MiAzLjQzOC0zLjM5MiAwLTEuODczLTEuNTQtMy4zOTMtMy40MzgtMy4zOTN6IiBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=) no-repeat 50%;
    cursor: pointer;
}

/* <div data-v-88fa91b4="" class="custom-file b-form-file file-input" */

.attach-file-wrapper .attach-file-area .file-input[data-v-88fa91b4] {
    display: none;
}

.custom-file, .custom-file-input {
    position: relative;
    width: 100%;
    height: calc(1.5em + 1.5rem);
}

.custom-file {
    display: inline-block;
    margin-bottom: 0;
}

/* <input type="file" name="uploadFile" */

.custom-file-input {
    z-index: 2;
    margin: 0;
    opacity: 0;
}

.custom-file, .custom-file-input {
    position: relative;
    width: 100%;
    height: calc(1.5em + 1.5rem);
}

button, input {
    overflow: visible;
}

/* <label data-browse="Browse" class="custom-file-label" for="__BVID__12042"> */

.custom-file-label {
    white-space: nowrap;
    overflow-x: hidden;
}

/* 있는듯 */
.custom-control-label:before, .custom-file-label, .custom-select {
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

/* 있는듯 */
.custom-file-label, .custom-file-label:after {
    position: absolute;
    top: 0;
    right: 0;
    padding: .6875rem 1rem;
    line-height: 1.5;
    color: #323232;
}

.custom-file-label {
    left: 0;
    z-index: 1;
    height: calc(1.5em + 1.5rem);
    font-weight: 400;
    background-color: #fff;
    border: .0625rem solid #e1e1e1;
    border-radius: .25rem;
}

label {
    display: inline-block;
    margin-bottom: .5rem;
}

/* <span class="d-block form-file-text" */

element.style {
    pointer-events: none;
}

.d-block {
    display: block !important;
}

.custom-file-label {
    white-space: nowrap;
    overflow-x: hidden;
}

label {
    cursor: default;
}

/* <span data-v-746dd3c0="" data-v-88fa91b4="" */

.attach-file-wrapper .attach-file-area .image-count[data-v-88fa91b4] {
    font-weight: 500;
    color: #888;
}

.interface-body2[data-v-746dd3c0] {
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.57143;
    letter-spacing: -.01875rem;
}

/* <div data-v-3437dfdd="" data-v-517e3499="" class="editor-body-container is-bottom-margin"> */

.editor-body-container.is-bottom-margin[data-v-3437dfdd] {
    margin-bottom: 6.1875rem;
}

.editor-body-container[data-v-3437dfdd] {
    display: flex;
    justify-content: center;
}

/* <div data-v-3437dfdd="" class="editor-body-wrapper"> */

.editor-body-container .editor-body-wrapper[data-v-3437dfdd] {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}

/* <div data-v-067f75d6="" data-v-3437dfdd="" class="editor-title-wrapper"> */


.editor-title-wrapper .editor-title-container[data-v-067f75d6], .editor-title-wrapper[data-v-067f75d6] {
    width: 100%;
}

/* <div data-v-067f75d6="" class="editor-title-container"> */

@media (min-width: 768px) {
    .editor-title-wrapper .editor-title-container[data-v-067f75d6] {
        width: 60.625rem;
        margin: auto;
    }
}

/* <label data-v-067f75d6="" for="post-title-input" class="editor-title-label"> */

.editor-title-wrapper .editor-title-container .editor-title-label[data-v-067f75d6] {
    width: 100%;
    padding: 1.25rem 0;
    margin: 0;
}

/* <input data-v-746dd3c0="" data-v-067f75d6="" id="post-title-input" */

.editor-title-wrapper .editor-title-container .post-title-input[data-v-067f75d6] {
    width: 100%;
    border: 0;
    padding: 0;
}

.headline-subhead5[data-v-746dd3c0] {
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.57143;
    letter-spacing: -.01875rem;
}

/* 있었나 */
button, input {
    overflow: visible;
}

/* <div data-v-3437dfdd="" class="divider-wrapper"> */

@media (min-width: 768px) {
    .divider-wrapper[data-v-3437dfdd] {
        width: 60.625rem;
    }
}

.divider-wrapper[data-v-3437dfdd] {
    width: 100%;
    margin: auto;
}

/* <hr data-v-3437dfdd="" class="hr-divider"> */

.divider-wrapper .hr-divider[data-v-3437dfdd] {
    width: 100%;
    height: .0625rem;
    border: 0;
    margin: 0;
    background-color: #f4f4f4;
}

hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: .0625rem solid rgba(0, 0, 0, .1);
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

/* <div data-v-4e6a8560="" data-v-3437dfdd="" class="service-region-wrapper"> */

.service-region-wrapper[data-v-4e6a8560] {
    display: flex;
    align-items: center;
    width: 60.625rem;
    margin: auto;
}

/* <div class="service-info"> */

.service-info {
    display: flex;
    align-items: center;
    width: 60.625rem;
    padding: 20px 0;
    margin: auto;
}

/* <button data-v-4e6a8560="" class="category-select-box"> */

@media (min-width: 768px) {
    .service-region-wrapper .category-select-box[data-v-4e6a8560] { /* :first-child */
        margin-right: 1rem;
    }
}

.service-region-wrapper .category-select-box[data-v-4e6a8560] {
    display: flex;
    align-items: center;
    width: 11.5rem;
    padding: 1.25rem 0;
    border: 0;
    background-color: #fff;
}

[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}

[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
}

/* 있었나? */
button, select {
    text-transform: none;
}

/* 있었나? */
button, input {
    overflow: visible;
}

/* 있었나? */
button {
    border-radius: 0;
}

/* <span data-v-4e6a8560="" class="text"> */

.service-region-wrapper .category-select-box .text[data-v-4e6a8560] {
    width: 100%;
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .875rem;
    line-height: 1.57;
    letter-spacing: -.01875rem;
    color: #888;
    font-weight: 500;
}

/* :after */

.service-region-wrapper .category-select-box[data-v-4e6a8560]:after {
    content: "";
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-left: .5rem;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMCAxNmgxNlYwSDB6Ii8+PHBhdGggc3Ryb2tlPSIjODg4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEyLjgzIDYuMDAxbC00LjggNC44LTQuOC00LjgiLz48L2c+PC9zdmc+);
    background-position: 50%;
    background-repeat: no-repeat;
}

*, :after, :before {
    box-sizing: border-box;
}

/* <div data-v-c7163a48="" data-v-3437dfdd="" class="editor-contents"> */

.editor-contents[data-v-c7163a48] {
    width: 60.625rem;
    min-height: 22.5rem;
    height: 100%;
    position: relative;
    margin: auto;
}

/* <textarea data-v-c7163a48="" data-v-746dd3c0="" name="post-content"
                                            class="editor-contents-textarea"> */

.editor-contents .editor-contents-textarea[data-v-c7163a48] {
    width: 100%;
    height: 100%;
    min-height: 20rem;
    resize: none;
    padding: 1.25rem 0;
    border: 0;
    background-color: transparent;
    z-index: 10;
}

textarea {
    -webkit-appearance: none;
}

textarea {
    overflow: auto;
    resize: vertical;
}

/* <span data-v-746dd3c0="" data-v-c7163a48=""
                                        class="editor-contents-textarea-placeholder */

.editor-contents .editor-contents-textarea-placeholder[data-v-c7163a48] {
    position: absolute;
    top: 1.25rem;
    left: 0;
    white-space: pre-line;
    margin: 0;
    z-index: -1;
    color: #888;
}

.legacy-typography .gray-500[data-v-746dd3c0] {
    color: #888;
}




</style>