<template lang="">
    <div role="dialog" id="nav_searchbar" aria-modal="true" class="SearchBar_SearchBarContainer__dbblD">
        <div class="SearchBar_SearchBar__ZAr_1">
            <div @click="$emit('searchOff', false)" class="SearchBar_CloseIconButtonContainer__9reii">
                <button type="button" aria-label="닫기" class="SearchBar_CloseButton__Wzgcs">
                    <span class="SvgIcon_SvgIcon__root__OHiSO">
                        <svg class="SvgIcon_SvgIcon__root__svg__ohdSc" viewBox="0 0 24 24">
                            <path
                                d="M4.86346 4.86346C5.21493 4.51199 5.78478 4.51199 6.13625 4.86346L11.9999 10.7271L17.8635 4.86346C18.2149 4.51199 18.7848 4.51199 19.1362 4.86346C19.4877 5.21493 19.4877 5.78478 19.1362 6.13625L13.2726 11.9999L19.1362 17.8635C19.4877 18.2149 19.4877 18.7848 19.1362 19.1363C18.7848 19.4877 18.2149 19.4877 17.8635 19.1363L11.9999 13.2727L6.13625 19.1363C5.78478 19.4877 5.21493 19.4877 4.86346 19.1363C4.51199 18.7848 4.51199 18.2149 4.86346 17.8635L10.7271 11.9999L4.86346 6.13625C4.51199 5.78478 4.51199 5.21493 4.86346 4.86346Z">
                            </path>
                        </svg>
                    </span>
                </button>
            </div>
            <div class="SearchBar_SearchInputLine__BbDX9">
                <div class="SearchInput_SearchInputContainer__aqjlA">
                    <form role="presentation" action="."><input class="SearchInput_SearchInput__ssVOa" type="search"
                            placeholder="검색어를 입력해 주세요." autocomplete="off" value=""><span
                            class="SvgIcon_SvgIcon__root__OHiSO SearchInput_SearchIcon__8oqhw"><svg
                                class="SvgIcon_SvgIcon__root__svg__ohdSc" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9.99949 2.1001C5.63644 2.1001 2.09949 5.63705 2.09949 10.0001C2.09949 14.3631 5.63644 17.9001 9.99949 17.9001C11.8568 17.9001 13.5644 17.2592 14.9132 16.1864L19.8632 21.1365C20.2147 21.4879 20.7846 21.4879 21.136 21.1365C21.4875 20.785 21.4875 20.2151 21.136 19.8637L16.186 14.9136C17.2586 13.5648 17.8995 11.8573 17.8995 10.0001C17.8995 5.63705 14.3625 2.1001 9.99949 2.1001ZM3.89949 10.0001C3.89949 6.63116 6.63055 3.9001 9.99949 3.9001C13.3684 3.9001 16.0995 6.63116 16.0995 10.0001C16.0995 13.369 13.3684 16.1001 9.99949 16.1001C6.63055 16.1001 3.89949 13.369 3.89949 10.0001Z">
                                </path>
                            </svg></span><button type="button"
                            class="SearchInput_SearchClear__FZfN_ SearchInput_hidden____zwz" aria-label="닫기"><span
                                class="SvgIcon_SvgIcon__root__OHiSO"><svg class="SvgIcon_SvgIcon__root__svg__ohdSc"
                                    viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.09998 12.0001C2.09998 6.53248 6.53235 2.1001 12 2.1001C17.4676 2.1001 21.9 6.53248 21.9 12.0001C21.9 17.4677 17.4676 21.9001 12 21.9001C6.53235 21.9001 2.09998 17.4677 2.09998 12.0001ZM9.13636 7.86373C8.78489 7.51225 8.21504 7.51225 7.86357 7.86373C7.51209 8.2152 7.51209 8.78505 7.86357 9.13652L10.7272 12.0001L7.86357 14.8637C7.51209 15.2152 7.51209 15.785 7.86357 16.1365C8.21504 16.488 8.78489 16.488 9.13636 16.1365L12 13.2729L14.8636 16.1365C15.215 16.488 15.7849 16.488 16.1364 16.1365C16.4878 15.785 16.4878 15.2152 16.1364 14.8637L13.2728 12.0001L16.1364 9.13652C16.4878 8.78505 16.4878 8.2152 16.1364 7.86373C15.7849 7.51225 15.215 7.51225 14.8636 7.86373L12 10.7273L9.13636 7.86373Z">
                                    </path>
                                </svg></span></button></form>
                </div><button type="button" class="SearchBar_CloseTextButton__xYBJd">취소</button>
            </div>
            <div class="category-title">카테고리 검색</div>
            <div data-v-a9f85b62="" data-v-713cd9e8="" class="main-pro-locations">
                <ul data-v-a9f85b62="" class="location-list" id="category-list">
                    <li class="location-item">IT/Programming</li>
                    <li class="location-item">IT/Programming</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"SearchComponent",
    emits:['searchOff']
    
}
</script>
<style scoped>
.category-title{
    margin-top: 2.5rem;
    margin-left: .5rem;
}
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
    a{
    text-decoration: none;
    }
    li{
        text-decoration: none;
        list-style: none;
    }
    button{
        background: none;
        border: none;
    }
    .SearchBar_SearchBarContainer__dbblD {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        background: #fff;
        z-index: 200;
    }
    .SearchBar_SearchBar__ZAr_1 {
        max-width: 700px;
        margin: 5rem auto;
        padding: 24px 20px;
        background: #fff;
        min-height: 100vh;
        z-index: 100;
        background-color: #fff;
    }

    @media(max-width: 767px) {
        .SearchBar_SearchBar__ZAr_1 {
            padding-top:16px
        }
    }
    .SearchBar_CloseIconButtonContainer__9reii {
        text-align: right
    }

    @media(max-width: 767px) {
        .SearchBar_CloseIconButtonContainer__9reii {
            display:none
        }
    }
    .SearchBar_CloseButton__Wzgcs {
        position: relative
    }

    .SearchBar_CloseButton__Wzgcs svg {
        width: 28px;
        height: 28px
    }

    .SearchBar_CloseButton__Wzgcs svg path {
        fill: rgba(55,56,60,.28)
    }

    .SearchBar_CloseButton__Wzgcs:hover:after {
        content: "";
        position: absolute;
        width: 44px;
        height: 44px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        border-radius: 50%;
        background: rgba(23,23,25,.038)
    }
    .SvgIcon_SvgIcon__root__OHiSO {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: inherit;
        align-items: inherit;
        -ms-flex-pack: inherit;
        justify-content: inherit
    }
    .SvgIcon_SvgIcon__root__svg__ohdSc {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        font-size: inherit
    }
    .SearchBar_SearchInputLine__BbDX9 {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        margin-top: 24px;
    }

    @media(max-width: 767px) {
        .SearchBar_SearchInputLine__BbDX9 {
            margin-top:0
        }
    }
    .SearchInput_SearchInputContainer__aqjlA {
        position: relative;
        -ms-flex-positive: 1;
        flex-grow: 1
    }

    .SearchInput_SearchInput__ssVOa {
        height: 52px;
        width: 100%;
        margin: 0;
        padding: 0 55px 0 52px;
        border: 1px solid hsla(225,5%,46%,.22);
        border-radius: 12px;
        font-size: 18px;
        font-weight: 500;
        color: #171719;
        background: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none
    }

    .SearchInput_SearchInput__ssVOa::-webkit-input-placeholder {
        color: rgba(55,56,60,.28)
    }

    .SearchInput_SearchInput__ssVOa::-moz-placeholder {
        color: rgba(55,56,60,.28)
    }

    .SearchInput_SearchInput__ssVOa:-ms-input-placeholder {
        color: rgba(55,56,60,.28)
    }

    .SearchInput_SearchInput__ssVOa::-ms-input-placeholder {
        color: rgba(55,56,60,.28)
    }

    .SearchInput_SearchInput__ssVOa::placeholder {
        color: rgba(55,56,60,.28)
    }

    .SearchInput_SearchInput__ssVOa::-webkit-search-cancel-button,.SearchInput_SearchInput__ssVOa::-webkit-search-decoration,.SearchInput_SearchInput__ssVOa::-webkit-search-results-button,.SearchInput_SearchInput__ssVOa::-webkit-search-results-decoration {
        display: none
    }

    .SearchInput_SearchInput__ssVOa:focus {
        border: 1px solid #06f;
        outline: none
    }

    @media(max-width: 767px) {
        .SearchInput_SearchInput__ssVOa {
            height:40px;
            font-size: 16px;
            padding: 0 38px 0 40px;
            border-radius: 8px
        }
    }
    .SvgIcon_SvgIcon__root__OHiSO {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: inherit;
        align-items: inherit;
        -ms-flex-pack: inherit;
        justify-content: inherit
    }
    .SearchInput_SearchIcon__8oqhw {
        position: absolute;
        top: 50%;
        left: 20px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        pointer-events: none
    }

    .SearchInput_SearchIcon__8oqhw svg {
        width: 20px;
        height: 20px
    }

    .SearchInput_SearchIcon__8oqhw svg path {
        fill: #171719
    }

    @media(max-width: 767px) {
        .SearchInput_SearchIcon__8oqhw svg {
            width:16px;
            height: 16px
        }

        .SearchInput_SearchIcon__8oqhw {
            left: 16px
        }
    }

    .SearchInput_SearchClear__FZfN_ {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: absolute;
        right: 24px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        border-radius: 999px
    }

    .SearchInput_SearchClear__FZfN_ svg {
        width: 24px;
        height: 24px
    }

    .SearchInput_SearchClear__FZfN_ svg path {
        fill: rgba(55,56,60,.28)
    }

    @media(max-width: 767px) {
        .SearchInput_SearchClear__FZfN_ svg {
            width:20px;
            height: 20px
        }
    }

    .SearchInput_SearchClear__FZfN_.SearchInput_hidden____zwz {
        display: none
    }

    @media(max-width: 767px) {
        .SearchInput_SearchClear__FZfN_ {
            right:13px
        }
    }
    .SvgIcon_SvgIcon__root__OHiSO {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: inherit;
        align-items: inherit;
        -ms-flex-pack: inherit;
        justify-content: inherit
    }
    .SvgIcon_SvgIcon__root__svg__ohdSc {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        font-size: inherit
    }
    .SearchBar_CloseTextButton__xYBJd {
        display: none;
        font-weight: 500;
        font-size: 14px;
        line-height: 142.9%;
        color: #171719;
        margin-left: 12px;
        -ms-flex-negative: 0;
        flex-shrink: 0
    }

    @media(max-width: 767px) {
        .SearchBar_CloseTextButton__xYBJd {
            display:block
        }
    }

</style>