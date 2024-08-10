<template>
  <h3 v-if="!item">작성한 글이 존재하지 않습니다.</h3>
  <li v-else data-v-0f448764="" data-v-fbeed1e4="" class="feed-item">
    <router-link
      :to="{ name: 'sharedetail', params: { id: item.postIdx } }"
      data-v-0f448764=""
      class=""
      data-testid="soomgo-life-feed-item"
    >
      <div data-v-0f448764="" class="feed-content">
        <div data-v-0f448764="">
          <section data-v-0f448764="" class="item-wrapper">
            <p
              data-v-746dd3c0=""
              data-v-0f448764=""
              data-testid="soomgo-life-topic-name"
              class="topic-name legacy-typography interface-description gray-500 text-align-left"
            >
              <span>{{ item.category }}</span> >
              <span>{{ item.btmCategory }}</span>
            </p>
            <h3
              data-v-746dd3c0=""
              data-v-0f448764=""
              class="legacy-typography headline-subhead5 gray-900 text-align-left"
            >
              {{ item.title }}
            </h3>
            <div
              data-v-746dd3c0=""
              data-v-0f448764=""
              class="content legacy-typography interface-body2 gray-500 text-align-left"
            >
              {{
                item.contents
              }}글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용글내용
            </div>
          </section>
          <div>
            <div v-if="item.status === true">
              <p
                data-v-746dd3c0=""
                data-v-0f448764=""
                class="sub-information legacy-typography interface-description gray-500 text-align-left"
              >
                나눔진행중
              </p>
            </div>
            <div v-else>
              <p
                data-v-746dd3c0=""
                data-v-0f448764=""
                class="sub-information legacy-typography interface-description gray-500 text-align-left"
              >
                나눔마감
              </p>
            </div>
          </div>
        </div>
        <img
          data-v-0f448764=""
          alt="1C2A916B-732B-425A-BBAD-EF4FD43ABB0C.jpg"
          data-src="https://static.cdn.soomgo.com/upload/media/4415e3fa-f423-48e4-ad34-7b3c3a7eaae5.jpg?h=80&amp;w=80&amp;webp=1"
          src="https://static.cdn.soomgo.com/upload/media/4415e3fa-f423-48e4-ad34-7b3c3a7eaae5.jpg?h=80&amp;w=80&amp;webp=1"
          lazy="loaded"
        />
      </div>
      <!---->
      <div data-v-0f448764="" class="feed-footer">
        <div data-v-0f448764="" class="user-interaction">
          <span
            data-v-746dd3c0=""
            class="like legacy-typography interface-description gray-300 text-align-left"
          >
            {{ item.capacity }}
          </span>
          <span
            data-v-746dd3c0=""
            class="like legacy-typography interface-description gray-300 text-align-left"
          >
            /
          </span>
          <span
            data-v-746dd3c0=""
            class="comment legacy-typography interface-description gray-300 text-align-left"
          >
            {{ item.currentEnrollment }}
          </span>
        </div>
        <span
          data-v-746dd3c0=""
          data-v-0f448764=""
          class="legacy-typography interface-description gray-300 text-align-left"
          >{{ item.timeStamp.slice(0, 10) }}</span
        >
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "MyPostShareItemComponent",
  data() {},
  props: ["item"],
  methods: {},
};
</script>

<style scoped>
* {
  word-break: break-word;
}
*,
:after,
:before {
  box-sizing: border-box;
}
ul li {
  list-style: none;
}
a,
a:hover {
  text-decoration: none;
}

a {
  color: #323232;
  background-color: transparent;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

img,
svg {
  vertical-align: middle;
}
img {
  border-style: none;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
.h3,
h3 {
  font-size: 1.75rem;
  line-height: 2.625rem;
  font-weight: 400;
  letter-spacing: -0.03125rem;
}

.feed-item[data-v-0f448764] {
  padding: 1.25rem 0.5rem;
  cursor: pointer;
  border-bottom: 0.0625rem solid #f4f4f4;
}
.feed-item .topic-name[data-v-0f448764] {
  margin-bottom: 0.5rem;
}

.legacy-typography.gray-500[data-v-746dd3c0] {
  color: #888;
}
.interface-description[data-v-746dd3c0] {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.0125rem;
}
.feed-item .feed-content[data-v-0f448764] {
  display: flex;
  margin-bottom: 0.75rem;
}
.feed-item .feed-content > div[data-v-0f448764] {
  flex: 1;
  padding-right: 1rem;
}
.feed-item .feed-content > img[data-v-0f448764] {
  width: 5rem;
  height: 5rem;
  border: 0.0625rem solid #f4f4f4;
  border-radius: 8px;
}
.feed-item .sub-information[data-v-0f448764] {
  margin-bottom: 0;
  font-size: 0.875rem;
}

.legacy-typography.gray-500[data-v-746dd3c0] {
  color: #888;
}
.interface-description[data-v-746dd3c0] {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.0125rem;
}

.legacy-typography.gray-900[data-v-746dd3c0] {
  color: #2d2d2d;
}
.feed-item h3[data-v-0f448764] {
  display: -webkit-box;
  max-height: 1.57em;
  line-height: 1.57;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0.25rem;
  font-weight: 500;
}
.headline-subhead5[data-v-746dd3c0] {
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.57143;
  letter-spacing: -0.01875rem;
}
.feed-item .content[data-v-0f448764] {
  display: -webkit-box;
  max-height: 3.14em;
  line-height: 1.57;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0.625rem;
}

.legacy-typography.gray-500[data-v-746dd3c0] {
  color: #888;
}
.interface-body2[data-v-746dd3c0] {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.57143;
  letter-spacing: -0.01875rem;
}

.feed-footer[data-v-0f448764] {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>