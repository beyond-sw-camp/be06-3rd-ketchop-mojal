<template>
  <div class="button-container">
    <span>
        <router-link to="login">로그인</router-link>
    </span>
    <span>
        <router-link to="signup">회원가입</router-link>
    </span>
    <!-- <button data-v-26153660="" type="button" class="btn pro-signup-btn right-section-item btn-primary">
      <a data-v-26153660="" href="" class="">로그인</a>
    </button>
    <button data-v-26153660="" type="button" class="btn pro-signup-btn right-section-item btn-primary">
      <a data-v-26153660="" href="" class="">회원가입</a>
    </button> -->
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
span{
    margin-left: 1rem;
}

.pro-signup-btn[data-v-26153660] {
    width: 5rem;
    padding: .40625rem 0;
    font-size: .875rem;
    border-radius: 6px;
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
</style>