import { defineStore } from "pinia";
import axios from "axios";
import { useChatRoomStore } from '@/store/useChatRoomStore';


export const useChatMessageStore = defineStore('chatMessage', {
    state: () => ({

        stompClient : null, //설명은 useChatRoomStore에서 봐
        currentRoomIdx : null,
        userIdx : null,
        subscription : null,

        reconnectAttempts : 0,
        maxReconnectAttempts : 5,
        reconnectDelay : 5000,

        messages: [
        ],

    }),
    // persist:{
    //     storage: sessionStorage,
    // },
    actions: {
        async getChatMessages(roomIdx) { //채팅방 입장 후, 채팅방의 과거 메시지 출력 메소드
            
            this.currentRoomIdx = roomIdx;

            // useChatRoomStore에서 가져옴..?
            const chatRoomStore = useChatRoomStore();
            this.stompClient = chatRoomStore.stompClient;
            this.userIdx = chatRoomStore.userIdx;
            this.reconnectAttempts = chatRoomStore.reconnectAttempts;
            this.maxReconnectAttempts = chatRoomStore.maxReconnectAttempts;
            this.reconnectDelay = chatRoomStore.reconnectDelay;

            if (this.stompClient) { //선택한 방의 WebSocket 주제에 구독하여 메시지를 수신

                //WebSocket 클라이언트(stompClient)가 존재하면, 현재 채팅방의 주제(/topic/${roomId})에 구독
                this.subscription = this.stompClient.subscribe(`/topic/${roomIdx}`, this.onMessageReceived); //메시지를 수신할 때 onMessageReceived 콜백 함수가 호출되도록 설정
                
            }

            try {
                const response = await axios.get(`/proxy/api/chat/rooms/${roomIdx}/messages`);
                // console.log('Response data:', response.data);
                this.messages = response.data; // 서버에서 받은 메시지를 상태에 저장
                // console.log(this.messages);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }

        },
        
        onMessageReceived(payload) { //메세지 수신할때 호출, 실시간으로 사용자 화면에 출력
            let message = JSON.parse(payload.body);
            console.log('Received message:', message); // 디버깅 정보 출력
            this.messages.push(message); // 수신된 메시지를 messages 배열에 추가
        },

        sendChatMessage(messageContent) {
            if (this.stompClient && this.currentRoomIdx) {
                let currentTime = new Date();
                let year = currentTime.getFullYear();
                let month = String(currentTime.getMonth() + 1).padStart(2, '0');
                let day = String(currentTime.getDate()).padStart(2, '0');
                let hours = String(currentTime.getHours()).padStart(2, '0');
                let minutes = String(currentTime.getMinutes()).padStart(2, '0');
                let seconds = String(currentTime.getSeconds()).padStart(2, '0');
                let formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

                let chatMessage = {
                    senderIdx: this.userIdx,
                    message: messageContent,
                    timeStamp: formattedTime,
                    MessageType: "CHAT",
                };

                this.stompClient.send(
                    `/app/chat.sendMessage/${this.currentRoomIdx}`,
                    {},
                    JSON.stringify(chatMessage)
                );
                console.log('Sending message:', chatMessage);
            }
        }
    }
})