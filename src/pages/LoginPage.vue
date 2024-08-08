<template lang="">
    <div id="app-body">
        <div data-v-ac2db00e="" data-testid="login-page" class="login-page">
            <h2>로그인</h2>
            <div data-v-ac2db00e="" class="card">
                <form @submit.prevent="validateForm" data-v-5467bada="" data-v-ac2db00e="" autocomplete="off" class="">
                    <div data-v-5467bada="" class="form-row login-form">
                        <div data-v-5467bada="" class="col-12">
                            <fieldset data-v-5467bada="" class="form-group" :class="{'is-invalid': !emailValid}" id="__BVID__361">
                                <legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0 left-align" id="__BVID__361__BV_label_">이메일</legend>
                                <div>
                                    <input v-model="member.email" @blur="validateEmail" data-v-5467bada="" name="email" type="email" placeholder="mojal@email.com" autocomplete="off" class="text-input form-control is-invalid invalid" data-testid="login-email" x-autocompletetype="off" autocorrect="off" spellcheck="false" autocapitalize="off" data-vv-validate-on="blur" aria-invalid="true" id="__BVID__362">
                                    <div v-if="!emailValid" data-v-5467bada="" class="invalid-feedback">이메일 주소를 입력해주세요.</div>
                                </div>
                            </fieldset>
                        </div>
                        <div data-v-5467bada="" class="col-12">
                            <fieldset :class="{'is-invalid': !passwordValid}" data-v-5467bada="" class="form-group password" id="__BVID__363">
                                <legend tabindex="-1" class="bv-no-focus-ring col-form-label pt-0 left-align" id="__BVID__363__BV_label_">비밀번호</legend>
                                <div>
                                    <input v-model="member.password" @blur="validatePassword" data-v-5467bada="" name="password" type="password" placeholder="대문자,특수문자 포함 최소 8글자를 포함" autocomplete="off" class="text-input form-control is-valid" data-testid="login-password" x-autocompletetype="off" autocorrect="off" spellcheck="false" autocapitalize="off" data-vv-validate-on="blur" aria-invalid="true" id="__BVID__364" aria-required="true">
                                    <div v-if="!passwordValid" data-v-5467bada="" class="invalid-feedback">비밀번호는 대문자, 특수문자 포함 최소 8글자 이상이어야 합니다.</div>
                                    <div v-if="!passwordEmpty" data-v-5467bada="" class="invalid-feedback">비밀번호를 입력해주세요.</div>
                                </div>
                            </fieldset>
                        </div>
                        <div data-v-5467bada="" class="col-12">
                            <button data-v-5467bada="" data-testid="btn-login" type="submit" class="btn-login btn-primary">
                                <span data-v-5467bada="">이메일 로그인</span>
                            </button>
                        </div>
                        <div data-v-5467bada="" class="reset-password-or-signup-wrapper col-12">
                            <div data-v-5467bada="">
                                <a data-v-5467bada="" href="/find-email?from=start_sign-in" class="">이메일 찾기</a>
                                <div data-v-5467bada="" class="line"></div>
                                <a data-v-5467bada="" href="/find-password/" class="">비밀번호 찾기</a>
                                <div data-v-5467bada="" class="line"></div>
                                <a data-v-5467bada="" href="/sign-up?from=loginpage" class="">회원가입</a>
                            </div>
                        </div>
                        <div data-v-5467bada="" class="col-12">
                            <!-- <button data-v-3998184b="" data-v-5467bada="" @click="kakaoLogin" type="button" class="btn kakao-login-btn btn-secondary"> -->
                                <a id="kakao-login-btn" href="http://localhost:8080/oauth2/authorization/kakao">
                                    <img data-v-3998184b="" src="https://assets.cdn.soomgo.com/icons/icon-login-kakaotalk-btn.svg" alt="카카오 로그인">
                                    <span data-v-3998184b="">카카오로 시작</span>
                                </a>
                            <!-- </button> -->
                            <p id="token-result"></p>
                        </div>
                        <!-- <div data-v-5467bada="" class="col-12">
                            <button data-v-d2f0a4f0="" data-v-5467bada="" type="button" class="btn naver-id-login btn-secondary">
                                <img data-v-d2f0a4f0="" src="https://assets.cdn.soomgo.com/icons/icon-login-naver-btn.svg">
                                <span data-v-d2f0a4f0=""> 네이버로 시작 </span>
                            </button>
                        </div>                       -->
                    </div>
                </form>
            </div> 
        </div>
    </div>
</template>

<script>
import { mapStores } from 'pinia';
import {useMemberStore} from '@/store/useMemberStore';

export default {
    name:"LoginComponent",
    data() {
        return {
            emailValid: true,
            passwordValid: true,
            passwordEmpty:true,
            member : {
                email : '',
                password : ''
            }
        };
    },
    computed:{
        ...mapStores(useMemberStore)
    },
    methods:{
        validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.emailValid = emailPattern.test(this.member.email);
        },
        validatePassword() {
            const passwordPattern = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
            this.passwordValid = passwordPattern.test(this.member.password);
        },
        emptyPassword(){
            this.passwordValid = this.member.password !== '';
        },
        validateForm() {
            this.validateEmail();
            this.validatePassword();
            this.emptyPassword();
            if (this.emailValid && this.passwordValid && this.passwordEmpty) {
                this.login();
            }
        },
        login() {
            const result = this.memberStore.login(this.member);
            if (result) {
                // window.location.href = "/";
                this.$router.push("/");
            }
        }
    }
    
}
</script>

<style scoped>
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
#app #app-body, #app #app-header {
    opacity: 1;
    transition: opacity .3s ease-in;
    text-align: center;
    min-height: 100%;
}
.login-page[data-v-ac2db00e] {
    padding: 10rem 0;
    background-color: #fafafa;
    height: 100%;
}
.card[data-v-ac2db00e] {
    width: 100%;
    max-width: 26.5rem;
    padding: 2.5rem;
    margin: 0 auto;
    border: .0625rem solid #f2f2f2;
    border-radius: 8px;
    box-shadow: none;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 4px;
    box-shadow: 0 .0625rem .3125rem 0 rgba(0, 0, 0, .2);
}
.form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -.3125rem;
    margin-left: -.3125rem;
}
.form-row>.btn {
    padding-right: .3125rem;
    padding-left: .3125rem;
}
.col-12 {
    flex: 0 0 100%;
    max-width: 100%;
}
.col, .col-12, .btn {
    position: relative;
    width: 100%;
    padding-right: .9375rem;
    padding-left: .9375rem;
}
.login-form .form-group[data-v-5467bada] {
    margin-bottom: 0.5rem;
}
.login-form[data-v-5467bada] .col-form-label {
    padding-bottom: .375rem;
    font-size: 1rem;
    font-weight: 500;
    text-align: left; /* 왼쪽 정렬 */
}
.col-form-label {
    padding-top: .75rem;
    padding-bottom: .75rem;
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
}
.login-form .text-input .invalid[data-v-5467bada] {
    border: .0625rem solid #fa5963;
}
.login-form .text-input[data-v-5467bada] {
    padding: .75rem;
    border: .0625rem solid #e1e1e1;
    border-radius: 4px;
}
.login-form .btn[data-v-5467bada] {
    width: 100%;
    margin-bottom: .75rem;
    font-weight: 400;
}
.login-form .btn span[data-v-5467bada] {
    color: #fff;
}
.login-form .btn[data-v-5467bada] .indicator-body {
    margin: 0 auto;
}
.login-form .reset-password-or-signup-wrapper[data-v-5467bada] {
    display: flex;
    font-size: .875rem;
}
.login-form .reset-password-or-signup-wrapper>div[data-v-5467bada] {
    display: flex;
    margin: 0 auto 2rem;
    font-size: .875rem;
}
.login-form .reset-password-or-signup-wrapper>div>a[data-v-5467bada] {
    padding: .375rem .5rem;
    font-weight: 400;
    color: #737373;
}
.login-form .reset-password-or-signup-wrapper>div>.line[data-v-5467bada] {
    width: .0625rem;
    height: .75rem;
    margin: auto .75rem;
    background-color: #e1e1e1;
}
.login-form .recent-login[data-v-5467bada] {
    font-size: .75rem;
    font-weight: 400;
}
.login-form .btn.kakao-login-btn[data-v-5467bada] {
    margin-top: 1rem;
}
.login-form .btn.fb-login-btn[data-v-5467bada] {
    margin-bottom: 0;
}
.form-group {
    margin-bottom: 1rem;
}
fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
}
fieldset {
    display: block;
    margin-inline-start: 2px;
    margin-inline-end: 2px;
    padding-block-start: 0.35em;
    padding-inline-start: 0.75em;
    padding-inline-end: 0.75em;
    padding-block-end: 0.625em;
    min-inline-size: min-content;
}
.pt-0, .py-0 {
    padding-top: 0 !important;
}
legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
    text-align: left; /* 왼쪽 정렬 */
}
legend {
    padding-inline-start: 2px;
    padding-inline-end: 2px;
    unicode-bidi: isolate;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
}
.form-control.is-invalid, .was-validated .form-control:invalid {
    border-color: #fa5963;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 1.5rem);
    padding: .6875rem 1rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #323232;
    background-color: #fff;
    background-clip: padding-box;
    border: .0625rem solid #e1e1e1;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
button, input {
    overflow: visible;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
input[type="email" i] {
    padding-block: 1px;
    padding-inline: 2px;
}
input {
    text-rendering: auto;
    color: fieldtext;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: field;
    border-width: 2px;
    border-style: inset;
    border-color: light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}
.invalid-feedback {
    display: block;
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #fa5963;
}
* {
    word-break: break-word;
}
*, :after, :before {
    box-sizing: border-box;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
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
.btn-primary {
    color: #fff;
    background-color: #00c7ae;
    border-color: #00c7ae;
    width: 100%;
    text-align: center;
    vertical-align: middle;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    border: .0625rem solid transparent;
    padding: .6875rem .75rem;
    margin-bottom: .75rem;
    margin-top: 1.5rem;
}
a, a:hover {
    text-decoration: none;
}
a {
    color: #323232;
    background-color: transparent;
}
.text-primary {
    color: #00c7ae !important;
}
.btn-outline-secondary, .btn-secondary {
    color: #737373;
}
button[data-v-3998184b] {
    display: flex;
    align-items: center;
    justify-content: center;
}
.btn-secondary {
    color: #323232;
    background-color: #e1e1e1;
    border-color: #e1e1e1;
}
img, svg {
    vertical-align: middle;
}
button.btn[data-v-3998184b] {
    color: #323232;
    background-color: #fee500;
    border-color: #fee500;
    color: rgba(0, 0, 0, .85);
    width: 100%;
}
.naver-id-login.btn[data-v-d2f0a4f0] {
    background-color: #03c75a;
    border-color: #03c75a;
    color: #fff;
    width: 100%;
}
.naver-id-login[data-v-d2f0a4f0] {
    display: flex;
    align-items: center;
    justify-content: center;
}
button.btn[data-v-27635330] {
    background-color: #1876f1;
    border-color: #1876f1;
    color: #fff;
    width: 100%;
}
button[data-v-27635330] {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-group.is-invalid .text-input {
    border: .0625rem solid #fa5963;
}

.left-align {
    text-align: left;
}
</style>