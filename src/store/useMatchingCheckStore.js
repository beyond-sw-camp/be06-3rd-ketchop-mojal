import axios from "axios";
import { defineStore } from "pinia";
import { useChatMessageStore } from '@/store/useChatMessageStore';


export const useMatchingCheckStore = defineStore('matchingCheck', {
    state: () => ({
        currentRoomIdx: null,
        userIdx: null,

        data: [],
    }),
    actions: {

        async ExchangeCheck() {
            console.log("exchange post matching confirmed");

            const chatMessageStor = useChatMessageStore();
            this.currentRoomIdx = chatMessageStor.currentRoomIdx;
            this.userIdx = chatMessageStor.userIdx;

            let confirmedReq = {
                chatRoomIdx: this.currentRoomIdx, //현재 채팅방 idx
                loginUserIdx: this.userIdx // 현재 로그인한 사용자의 idx
            };

            if (this.currentRoomIdx) {
                try {
                    const response = await axios.post(`/proxy/matching/check/exchange`, confirmedReq, {
                        headers: {
                            "Content-Type": "application/json",
                        }
                    });
                    console.log(response.data);
                    this.data=response.data;

                } catch (error) {
                    console.error('교환 확정 중 오류 발생:', error);
                }
            }

        }

    },

})