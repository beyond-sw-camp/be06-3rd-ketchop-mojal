<template>
  <div data-v-1d4713bd="" data-v-4b40be3a="" class="soomgo-life-topic-layout">
    <div
      data-v-71844fb9=""
      data-v-1d4713bd=""
      class="observer-container d-md-none"
    >
      <div
        data-v-71844fb9=""
        id="observer-a86212f5-3b56-459d-b752-ee0cad4cc817"
      ></div>
    </div>
    <!--------------레이아웃 왼쪽 카테고리 섹션3개 ---------------->
    <!-- 반응형떄문에 section이 3개 -->
    <section
      data-v-4763e57b=""
      data-v-1d4713bd=""
      class="topic-list-chip d-md-none right-hidden is-fixed scroll-up"
      style="display: none"
    >
      <ul data-v-4763e57b="">
        <div
          data-v-71844fb9=""
          data-v-4763e57b=""
          class="observer-container topic-chip-observer"
        >
          <li
            v-for="items in this.list"
            :key="items.id"
            data-v-4763e57b=""
            data-v-71844fb9=""
            data-observe="topic-all"
            id="topic-all"
            @click="selectCategory(items.idx)"
            :class="{ selected: selectedId === items.idx }"
          >
            <a data-v-4763e57b="" class="" data-v-71844fb9="">
              {{ items.name }}
            </a>
          </li>
        </div>
      </ul>
    </section>
    <section
      data-v-f7ed0496=""
      data-v-1d4713bd=""
      class="topic-list-tab d-md-none right-hidden scroll-up"
    >
      <ul data-v-f7ed0496="">
        <div
          data-v-71844fb9=""
          data-v-f7ed0496=""
          class="observer-container topic-tab-observer"
        >
          <li
            v-for="items in this.list"
            :key="items.id"
            data-v-f7ed0496=""
            data-v-71844fb9=""
            data-observe="topic-soomgo-story"
            class=""
            id="topic-soomgo-story"
            @click="selectCategory(items.idx)"
            :class="{ selected: selectedId === items.idx }"
          >
            <a data-v-f7ed0496="" class="" data-v-71844fb9="">
              {{ items.name }}
            </a>
          </li>
        </div>
      </ul>
    </section>
    <section
      data-v-8aaac69a=""
      data-v-1d4713bd=""
      class="topic-list-menu d-none d-sm-block"
    >
      <ul data-v-8aaac69a="">
        <li
          v-for="items in this.list"
          :key="items.id"
          data-v-8aaac69a=""
          @click="selectCategory(items.id)"
          :class="{ selected: selectedId === items.id }"
        >
          <a data-v-8aaac69a="" class="topic-link-item">{{ items.name }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useMyPostStore } from "@/store/useMyPostStore";

export default {
  name: "SidebarComponent",
  components: {},
  data() {
    return {
      selectedId: null,
      list: [
        {
          id: 0,
          name: "내가 작성한 글",
        },
        {
          id: 1,
          name: "나눔",
        },
        {
          id: 2,
          name: "교환",
        },
        {
          id: 3,
          name: "내가 참여한 글",
        },
        {
          id: 4,
          name: "나눔",
        },
        {
          id: 5,
          name: "교환",
        },
      ],
    };
  },
  computed: {
    ...mapStores(useMyPostStore),
  },
  methods: {
    selectCategory(idx) {
      this.myPostStore.selectCategory(idx);
    },
  },
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
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}

ul {
  padding: 0;
}
dl,
ol,
ul {
  margin-top: 0;
}
address,
dl,
ol,
ul {
  margin-bottom: 1rem;
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

@media (min-width: 768px) {
  .soomgo-life-topic-layout[data-v-1d4713bd] {
    position: sticky;
    top: 6rem;
    z-index: 10;
    align-self: flex-start;
    width: 12.5rem;
    height: 100%;
    background: #fff;
  }
}

/*************************Desktop 일때 3번째 section**********************************/
@media (max-width: 576px) {
  .soomgo-life-topic-layout[data-v-1d4713bd] {
    height: 3.125rem;
  }
  .d-sm-block {
    display: block !important;
  }
}

@media (max-width: 768px) {
  .d-none {
    display: none !important;
  }
}

.selected {
  border-radius: 8px;
  background-color: #eafaf9;
  font-weight: 700;
}

.topic-list-menu ul[data-v-8aaac69a] {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 0;
}

.topic-list-menu ul li.selected[data-v-8aaac69a] {
  border-radius: 8px;
  background: #eafaf9;
  font-weight: 700;
}

.topic-list-menu ul li .topic-link-item[data-v-8aaac69a] {
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  height: 3.5rem;
  color: #2d2d2d;
  font-size: 0.875rem;
}

.topic-list-menu ul li .topic-link-item[data-v-8aaac69a] {
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  height: 3.5rem;
  color: #2d2d2d;
  font-size: 0.875rem;
}

/*******************************중간사이즈랑 모바일 사이즈 2번째 section***************************************/
@media (min-width: 768px) {
  .d-md-none {
    display: none !important;
  }
}
.topic-list-tab[data-v-f7ed0496] {
  position: relative;
  margin: 0 -1rem;
  background: #fff;
  padding-right: 1rem;
  border-bottom: 0.0625rem solid #f2f2f2;
}

.topic-list-tab ul[data-v-f7ed0496] {
  margin: 0;
}
.topic-list-tab ul .topic-tab-observer[data-v-f7ed0496] {
  padding-left: 1rem;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.topic-list-tab ul .topic-tab-observer li.selected[data-v-f7ed0496] {
  padding-bottom: 0.75rem;
  border-bottom: 0.125rem solid #323232;
  font-weight: 500;
}

.topic-list-tab ul .topic-tab-observer li[data-v-f7ed0496] {
  padding: 0.875rem 0.25rem;
  color: #737373;
  font-size: 0.875rem;
}
.topic-list-tab ul .topic-tab-observer > li[data-v-f7ed0496] {
  flex: 0 0 auto;
}

.topic-list-chip ul .topic-chip-observer li[data-v-4763e57b] {
  height: 2rem;
  border-radius: 20px;
  border: 0.0625rem solid #e1e1e1;
  font-size: 0.875rem;
}
</style>
