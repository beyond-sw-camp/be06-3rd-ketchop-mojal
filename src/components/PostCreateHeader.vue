<template lang="">
    <div data-v-d87b96c8="" data-v-517e3499="" class="select-subject-header">
        <div data-v-d87b96c8="" class="subject-header-wrapper">
            <img data-v-d87b96c8="" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzMyMzIzMiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8Zz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuNDMuNDNsMS4xMzEgMS4xMzEtNy40MzQgNy40MzUgNy40MzQgNy40MzQtMS4xMzEgMS4xMzEtNy40MzUtNy40MzQtNy40MzQgNy40MzRMLjQzIDE2LjQzbDcuNDM0LTcuNDM0TC40MyAxLjU2MSAxLjU2MS40M2w3LjQzNCA3LjQzNEwxNi40My40M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMzcgLTExNCkgdHJhbnNsYXRlKDAgOTQpIHRyYW5zbGF0ZSgzMzcgMjApIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" alt="뒤로 가기" class="back-button">
            <select data-v-746dd3c0="" data-v-d87b96c8="" class="post-subject-select-box custom-select legacy-typography headline-subhead3 gray-900 text-align-left" value="together" id="__BVID__1402">
                <option data-v-d87b96c8="" disabled="disabled" value=""> 글 선택 </option>
                <option data-v-d87b96c8="" value="ask-provider"> 나눔글 </option>
                <option data-v-d87b96c8="" value="together"> 교환글 </option>
            </select>
            <button data-v-d87b96c8="" type="button" disabled="disabled" class="btn btn-secondary disabled write-post-submit">등록</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.select-subject-header[data-v-d87b96c8] {
    height: 3.5rem;
    padding: 1rem 4rem;
    background-color: #fff;
}
.select-subject-header .subject-header-wrapper[data-v-d87b96c8] {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin: auto;
}
.select-subject-header .subject-header-wrapper .back-button[data-v-d87b96c8] {
    display: none;
}
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
.custom-control-label:before, .custom-file-label, .custom-select {
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}
.legacy-typography.gray-900[data-v-746dd3c0] {
    color: #2d2d2d;
}
.legacy-typography .gray-500[data-v-746dd3c0] {
    color: #888;
}
.headline-subhead3[data-v-746dd3c0] {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: -.01875rem;
}
    
</style>