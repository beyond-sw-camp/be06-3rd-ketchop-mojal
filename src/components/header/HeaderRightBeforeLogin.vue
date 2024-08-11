<template>
  <div class="button-container">
    <span>
        <router-link to="login">로그인</router-link>
    </span>
    <span>
        <router-link to="signup">회원가입</router-link>
    </span>
  </div>
</template>
<script>
import { mapStores } from "pinia";
import { useMemberStore } from "@/store/useMemberStore";

export default {
    computed:{
      ...mapStores(useMemberStore)
  },
};
</script>
<style scoped>
span{
    margin-left: 1rem;
}

.right-section-item[data-v-26153660] {
    margin-left: 1rem;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.btn {
    font-weight: 500;
    transition: opacity .2s ease-in-out;
}
.btn-primary {
    color: #fff;
    background-color: #00c7ae;
    border-color: #00c7ae;
}
.btn-primary a{
    color: #fff;
}
.btn {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: .0625rem solid transparent;
    line-height: 1.5;
}
.before-login-color{
    color: #FFF;
}
.button-container{
    /* font-size: 22px; */
    font-size: 1rem;
}
</style>