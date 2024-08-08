<template lang="">
    <div data-v-84c28776="" data-v-31ad20b6="" class="chat-item">
        <div data-v-84c28776="" class="chat-item-wrapper">
            <div data-v-84c28776="" class="chat-info">
                <div data-v-84c28776="" class="chat-main-info">
                    <div data-v-84c28776="" class="user-info-wrapper">
                        <div data-v-29d5164e="" data-v-84c28776="" class="user-profile-picture user-profile-picture">
                            <div data-v-29d5164e="" data-name="image" class="" 
                            data-src="https://dmmj3ljielax6.cloudfront.net/upload/profile/7b44c9a3-537b-402c-a2e6-27db8b3dee53.png?h=320&amp;w=320&amp;webp=1" 
                            lazy="loaded" style="background-image: url(&quot;https://dmmj3ljielax6.cloudfront.net/upload/profile/7b44c9a3-537b-402c-a2e6-27db8b3dee53.png?h=320&amp;w=320&amp;webp=1&quot;);">
                            </div>
                        </div>
                        <div data-v-84c28776="" class="user-info">
                            <div data-v-84c28776="" class="user-status-wrapper">
                                <div data-v-84c28776="" class="user-status">
                                    <h5 data-v-ac555544="" data-v-84c28776="" title="이효진" class="prisma-typography body2:semibold primary"> {{nickname}} </h5>
                                </div>
                            </div>
                            <div data-v-84c28776="" class="service-info">
                                <span data-v-ac555544="" data-v-84c28776="" title="웹 개발 ∙ 전국" class="prisma-typography body4:regular primary"> 웹 개발 ∙ 전국 </span>
                            </div>
                        </div>
                    </div>
                    <div data-v-84c28776="" class="chat-msg-wrapper">
                        <div data-v-5fd8df5a="" data-v-84c28776="" class="notice">
                            <span data-v-ac555544="" data-v-5fd8df5a="" title="상대방이 채팅방을 나갔습니다." class="prisma-typography body3:regular primary"> {{title}} </span>
                        </div>
                        <div data-v-84c28776="" class="chat-msg-info">
                            <div data-v-84c28776="" class="dot"></div>
                            <span data-v-ac555544="" data-v-84c28776="" title="2024. 01. 22" class="prisma-typography body4:regular tertiary"> 2024. 01. 22 </span>
                        </div>
                    </div>
                </div>
                <hr data-v-84c28776="" class="divider">
                <div data-v-84c28776="" class="chat-sub-info">
                    <p data-v-ac555544="" data-v-84c28776="" title="총 200,000원 부터~" class="prisma-typography body3:semibold primary"> 총 200,000원 부터~</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ChatElement',
    props: {
        idx:{
            type: Number,
            required : true
        },
        title: {
            type: String,
            required: true
        },
        nickname: {
            type: String,
            required: true
        }
    }
};
</script>
<style scoped>
.chat-item[data-v-84c28776] {
    padding: 1rem;
    cursor: pointer;
    background-color: #fff;
    border: .0625rem solid #eff1f5;
    border-radius: 8px;
}
.chat-item .chat-item-wrapper[data-v-84c28776] {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}
.chat-item .chat-info[data-v-84c28776] {
    flex: 1;
    min-width: 0;
}
.chat-item .chat-info .chat-main-info[data-v-84c28776] {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.chat-item .chat-info .chat-sub-info[data-v-84c28776] {
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: space-between;
}
.chat-item .chat-info .chat-main-info .user-info-wrapper[data-v-84c28776] {
    display: flex;
    gap: .75rem;
    align-items: center;
}
.chat-item .chat-info .chat-main-info .chat-msg-wrapper[data-v-84c28776] {
    display: flex;
    gap: .5rem;
    align-items: center;
}
.chat-item .chat-info .divider[data-v-84c28776] {
    margin: .75rem 0;
    border-top: .0625rem solid #eff1f5;
}
.chat-item .chat-info .chat-main-info .user-info-wrapper .user-profile-picture[data-v-84c28776] {
    flex-shrink: 0;
    width: 3rem;
    height: 3rem;
}
.user-profile-picture[data-v-29d5164e] {
    position: relative;
}
.chat-item .chat-info .chat-main-info .user-info-wrapper .user-info[data-v-84c28776] {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: .125rem;
    min-width: 0;
}
.chat-item .chat-info .chat-main-info .user-info-wrapper .user-profile-picture[data-v-84c28776] div {
    border: .0625rem solid #eff1f5;
}
.user-profile-picture div[data-name=image][data-v-29d5164e] {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #e1e1e1;
    border: .0625rem solid #f2f2f2;
    border-radius: 50%;
    background-size: cover;
    background-position: 50% 50%;
}
.chat-item .chat-info .chat-main-info .user-info-wrapper .user-info .user-status-wrapper[data-v-84c28776] {
    display: flex;
    gap: 2rem;
    align-items: center;
}
.chat-item .chat-info .chat-main-info .user-info-wrapper .user-info .service-info[data-v-84c28776] {
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.chat-item .chat-info .chat-main-info .user-info-wrapper .user-info .user-status-wrapper .user-status[data-v-84c28776] {
    display: flex;
    flex: 1;
    gap: .25rem;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.chat-item .chat-info .chat-main-info .user-info-wrapper .user-info .user-status-wrapper .user-status h5[data-v-84c28776] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.prisma-typography.primary[data-v-ac555544] {
    color: #1c242f;
}
.prisma-typography.body2\:semibold[data-v-ac555544] {
    font-size: 1rem !important;
    line-height: 1.5rem !important;
    font-weight: 600 !important;
}
.prisma-typography[data-v-ac555544] {
    padding: 0;
    margin: 0;
    letter-spacing: normal !important;
    font-family: Pretendard, Noto Sans KR, Malgun Gothic, -apple-system, Segoe UI, Roboto, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    word-break: break-word;
    text-decoration: none;
}
.chat-item .chat-info .chat-main-info .user-info-wrapper .user-info .service-info span[data-v-84c28776] {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.prisma-typography.primary[data-v-ac555544] {
    color: #1c242f;
}
.prisma-typography.body4\:regular[data-v-ac555544] {
    font-size: .75rem !important;
    line-height: 1.25rem !important;
    font-weight: 400 !important;
}
.prisma-typography[data-v-ac555544] {
    padding: 0;
    margin: 0;
    letter-spacing: normal !important;
    font-family: Pretendard, Noto Sans KR, Malgun Gothic, -apple-system, Segoe UI, Roboto, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    word-break: break-word;
    text-decoration: none;
}
.chat-item .chat-info .chat-main-info .chat-msg-wrapper .chat-msg-info[data-v-84c28776] {
    display: flex;
    flex-shrink: 0;
    gap: .5rem;
    align-items: center;
}
.prisma-typography.primary[data-v-ac555544] {
    color: #1c242f;
}
.prisma-typography.body3\:regular[data-v-ac555544] {
    font-size: .875rem !important;
    line-height: 1.375rem !important;
    font-weight: 400 !important;
}
.prisma-typography[data-v-ac555544] {
    padding: 0;
    margin: 0;
    letter-spacing: normal !important;
    font-family: Pretendard, Noto Sans KR, Malgun Gothic, -apple-system, Segoe UI, Roboto, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    word-break: break-word;
    text-decoration: none;
}
.chat-item .chat-info .chat-main-info .chat-msg-wrapper .chat-msg-info .dot[data-v-84c28776] {
    width: .125rem;
    height: .125rem;
    background-color: #aab4bf;
    border-radius: 50%;
}
.prisma-typography.tertiary[data-v-ac555544] {
    color: #aab4bf;
}
.prisma-typography.body4\:regular[data-v-ac555544] {
    font-size: .75rem !important;
    line-height: 1.25rem !important;
    font-weight: 400 !important;
}
.prisma-typography[data-v-ac555544] {
    padding: 0;
    margin: 0;
    letter-spacing: normal !important;
    font-family: Pretendard, Noto Sans KR, Malgun Gothic, -apple-system, Segoe UI, Roboto, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    word-break: break-word;
    text-decoration: none;
}
.prisma-typography.primary[data-v-ac555544] {
    color: #1c242f;
}

.prisma-typography.body3\:semibold[data-v-ac555544] {
    font-size: .875rem !important;
    line-height: 1.375rem !important;
    font-weight: 600 !important;
}
.prisma-typography[data-v-ac555544] {
    padding: 0;
    margin: 0;
    letter-spacing: normal !important;
    font-family: Pretendard, Noto Sans KR, Malgun Gothic, -apple-system, Segoe UI, Roboto, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    word-break: break-word;
    text-decoration: none;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
</style>

