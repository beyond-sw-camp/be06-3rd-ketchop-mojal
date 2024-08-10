import axios from "axios";
import { defineStore } from "pinia";

export const useExchangePostStore = defineStore("exchangePost", {
    state: () => (
        {
            isShow: false,
            selectedIdx: null,
            exchangeListAll: [],

            exchangePost: [],
            postIdx: 0,
        }
    ),
    actions: {

        // 상세글 조회
        async getExchangeRead(postIdx) {
            try {
                // console.log("in");
                
                this.postIdx = postIdx;

                let url = `/proxy/exchange/read?idx=${this.postIdx}`;
                const response = await axios.get(url);

                this.exchangePost = response.data.result;
                // console.log(response.data.result);

            } catch (error) {
                console.log(error);
            }
        },


        // 교환글전체리스트
        async getExchangeListAll() {
            try {
                let url = `http://localhost:8080/exchange/list`;
                let response = await axios.get(url);
                this.exchangeListAll = response.data.result;
                // console.log("리스트:", this.exchangeListAll);
                // console.log("응답왔다");
            } catch (error) {
                console.log(error);
            }
        },


        // 선택한 나눔글,교환글 카테고리만 픽미픽미해서 가져오기
        async getExchangePostByCategory(selectedCategoryIdx) {
            let url = `http://localhost:8080/search/category?idx=${selectedCategoryIdx}`;
            this.selectedCategoryIdx = selectedCategoryIdx;
            let response = await axios.get(url); //응답 받아서 저장
            this.exchangeListAll = response.data.result.exchangePosts;
            this.category = response.data.result
            // console.log("스토어 해당카테고리 픽미픽미", this.category)
            // console.log("스토어 해당카테고리", this.exchangeListAll)
        },

    },
});