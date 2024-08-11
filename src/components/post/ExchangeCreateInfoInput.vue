<template>
    <div data-v-4e6a8560="" data-v-3437dfdd="" class="service-region-wrapper">
        <button data-v-4e6a8560="" class="category-select-box" @click="modalOnGive">
            <span data-v-4e6a8560="" class="text">{{selectedGiveCategory}}</span>
        </button>
        <input  v-model="exchangeStore.request.giveBtmCategory" placeholder="하위카테고리 입력"/>
    </div>
    <div data-v-3437dfdd="" class="divider-wrapper" data-v-c05ff7d0=""><hr data-v-3437dfdd="" class="hr-divider" data-v-c05ff7d0=""></div>
    <div data-v-4e6a8560="" data-v-3437dfdd="" class="service-region-wrapper">
        <button data-v-4e6a8560="" class="category-select-box" @click="modalOnTake">
            <span data-v-4e6a8560="" class="text">{{selectedTakeCategory}}</span>
        </button>
        <input v-model="exchangeStore.request.takeBtmCategory" placeholder="하위카테고리 입력"/>
    </div>
    <div class="category-container" :class="{'modal-close':!isModalClick}">
        <div class="modal-background">
            <div class="category-box">
                <div>
                    <button @click="modalOff" ata-testid="search-pro-filter-modal-close" type="button" class="btn close-button btn-none"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTkgNy44NjlMMTYuNDM0LjQzNGwxLjEzMiAxLjEzMkwxMC4xMyA5bDcuNDM1IDcuNDM0LTEuMTMyIDEuMTMyTDkgMTAuMTNsLTcuNDM0IDcuNDM1LTEuMTMyLTEuMTMyTDcuODcgOSAuNDM0IDEuNTY2IDEuNTY2LjQzNCA5IDcuODd6Ii8+CiAgICA8L2RlZnM+CiAgICA8dXNlIGZpbGw9IiMzMjMyMzIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2EiLz4KPC9zdmc+Cg==" alt="모달 닫기"></button></div>
                <div>
                    <ul>
                        <li v-for="category in memberStore.userCategories" :key="category.idx" @click="isGiveCategory ? selectGiveCategory(category) : selectTakeCategory(category)">
                            {{ category.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="category-container" :class="{'modal-close':!isModal2Click}">
        <div class="modal-background">
            <div class="category-box">
                <div>
                    <button @click="modalOff" ata-testid="search-pro-filter-modal-close" type="button" class="btn close-button btn-none"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTkgNy44NjlMMTYuNDM0LjQzNGwxLjEzMiAxLjEzMkwxMC4xMyA5bDcuNDM1IDcuNDM0LTEuMTMyIDEuMTMyTDkgMTAuMTNsLTcuNDM0IDcuNDM1LTEuMTMyLTEuMTMyTDcuODcgOSAuNDM0IDEuNTY2IDEuNTY2LjQzNCA5IDcuODd6Ii8+CiAgICA8L2RlZnM+CiAgICA8dXNlIGZpbGw9IiMzMjMyMzIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2EiLz4KPC9zdmc+Cg==" alt="모달 닫기"></button></div>
                <div>
                    <ul>
                        <li v-for="category in categoryStore.categories" :key="category.idx" @click="selectTakeCategory(category)">
                            {{ category.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useExchangeStore } from '@/store/useExchangeStore';
import { useMemberStore } from '@/store/useMemberStore'; 
import { useCategoryStore } from '@/store/useCategoryStore'; 
import { mapStores } from 'pinia';

export default {
    data() {
        return { 
            isModalClick:false,
            isModal2Click:false,
            selectedGiveCategory:"제공할 상위 카테고리 선택",
            selectedTakeCategory:"제공 받을 상위 카테고리 선택",
            isGiveCategory: true
         }
    },
    computed: {
        ...mapStores(useExchangeStore, useMemberStore, useCategoryStore),
    },
    mounted(){
        this.getMyCategories();
    },
    methods:{
        async getMyCategories(){
            // await this.memberStore.getUserCategories();
        },
        modalOff() {
            this.isModalClick = false;
            this.isModal2Click = false;
        },
        modalOnGive() {
            this.isModalClick = true;
            this.isModal2Click = false;
        },
        modalOnTake() {
            this.isModal2Click = true;
            this.isModalClick = false;
        },
        selectGiveCategory(category) {
            this.selectedGiveCategory = category.name;
            this.exchangeStore.request.giveCategoryIdx = category.idx;
            this.modalOff();
        },
        selectTakeCategory(category) {
            this.selectedTakeCategory = category.name;
            this.exchangeStore.request.takeCategoryIdx = category.idx;
            this.modalOff();
        }
    }
}
</script>
<style scoped>
select{
    border: none;
    padding: 1rem;
    margin-right: 1rem;
}
input{
    border:none;
}
input::placeholder{
    font-size: .875rem;
    line-height: 1.57;
    letter-spacing: -.01875rem;
    color: #888;
    font-weight: 500;
}
.service-region-wrapper[data-v-4e6a8560] {
    display: flex;
    align-items: center;
    width: 100%;
    margin: auto;
}
.service-region-wrapper .category-select-box[data-v-4e6a8560] {
    display: flex;
    align-items: center;
    width: 14rem;
    padding: 1.25rem 2rem 1.25rem 0;
    margin-right: 2rem;
    border: 0;
    background-color: #fff;
    border-right: #f2f2f2 1px solid;
}
.service-region-wrapper .time-select-box[data-v-4e6a8560] {
    display: flex;
    align-items: center;
    width: 11.5rem;
    padding: .4rem 2rem .4rem 0;
    margin-right: 2rem;
    border: 0;
    background-color: #fff;
    border-right: #f2f2f2 1px solid;
}
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

.service-region-wrapper .category-select-box .text[data-v-4e6a8560]{
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
.service-region-wrapper .time-select-box .text[data-v-4e6a8560]{
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


/*  -------  */
.modal-close{
    display: none;
}
.modal-background{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    padding: 2.5rem 0;
    min-height: 100%;
    flex-direction: column;
    justify-content: center;
}
.category-box{
    position: relative;
    background-color: #FFF;
    height: 100%;
    margin: auto;
    max-width: 18rem;
    overflow: auto;
}
.category-box >div:nth-of-type(1){
    width: 100%;
    border-bottom: #f2f2f2 solid 1px;
    text-align: right;
}
.category-box >div:nth-of-type(2){
    padding: 0 .8rem;
}
.category-box ul {
    padding: 0;
    margin: 0;
}
.category-box ul li{
    border-bottom: #f2f2f2 solid 1px;
    user-select: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    width: 100%;
    position: relative;
    padding: .75rem 1rem;
    display: inline-block;
    font-size: .875rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: normal;
    color: #323232;
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
.close-button img {
    width: .875rem;
    height: .875rem;
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
    
</style>
