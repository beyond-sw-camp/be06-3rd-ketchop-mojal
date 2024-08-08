<template>
  <h1>mainpage</h1>
</template>
<script>
import { mapStores } from "pinia";
import { useMemberStore } from "@/store/useMemberStore";

export default {
  computed: {
    ...mapStores(useMemberStore),
  },
};
</script>
<style scoped>
.my-category {
  display: flex;
  justify-content: auto;
  margin-top: 2rem;
}
.my-category > div:nth-of-type(1) {
  margin-right: auto;
  font-size: 1.5rem;
  font-weight: 600;
  color: #323232;
}
.my-category > div:nth-of-type(2) {
  margin-left: auto;
}
.main-pro-locations .location-item {
  position: relative;
  float: left;
  padding: 0.5625rem 1.125rem;
  margin-right: 0.5rem;
  margin-bottom: 0.625rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #737373;
  letter-spacing: -0.01875rem;
  border: 0.0625rem solid #e1e1e1;
  border-radius: 21px;
}
@media (max-width: 991.98px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
@media (min-width: 576px) {
  .container,
  .container-sm {
    max-width: 33.75rem;
  }
}
.container-md {
  width: 100%;
  padding-top: 4.5rem;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
  margin-right: auto;
  margin-left: auto;
}
.mypage-container .mypage-title[data-v-64335656] {
  line-height: 1.41;
  letter-spacing: -0.0462rem;
  color: #323232;
  margin: 0;
  padding: 1.875rem 0;
}
.underline[data-v-e20527e2] {
  border-bottom: 0.0625rem solid;
  border-color: #f2f2f2;
}

.profile-container[data-v-e20527e2] {
  font-size: 0;
  padding: 1.5rem 0;
  margin-bottom: 1rem;
  position: relative;
  background-color: #fff;
  z-index: 3;
}
.profile-container a[data-v-e20527e2] {
  display: flex;
  align-items: center;
}
a,
a:hover {
  text-decoration: none;
}
a {
  color: #323232;
  background-color: transparent;
}
.thumb[data-v-e20527e2] {
  width: 4.375rem;
  height: 4.375rem;
  min-width: 4.375rem;
  overflow: hidden;
}
.user-profile-picture[data-v-29d5164e] {
  position: relative;
}
.h-100 {
  height: 100% !important;
}
.user-profile-picture div[data-name="image"][data-v-29d5164e] {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #e1e1e1;
  border: 0.0625rem solid #f2f2f2;
  border-radius: 50%;
  background-size: cover;
  background-position: 50% 50%;
}
.user-info[data-v-e20527e2] {
  flex: 1;
  overflow: hidden;
  text-align: left;
  padding-left: 0.75rem;
}
.user-name[data-v-e20527e2] {
  display: flex;
  flex: 1;
  font-size: 1.125rem;
  font-weight: 500;
  color: #323232;
}
.name-length[data-v-e20527e2] {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-right: 0.3125rem;
}
.user-name .user-type[data-v-e20527e2] {
  flex: 0 0 auto;
  padding-right: 1rem;
}
.user-id[data-v-e20527e2] {
  display: flex;
  font-size: 0.75rem;
  color: #b5b5b5;
}
.user-id img[data-v-e20527e2] {
  margin-right: 0.25rem;
}

img,
svg {
  vertical-align: middle;
}
img {
  border-style: none;
}
.account-setting .btn-account-setting[data-v-e20527e2] {
  border: none;
  border-radius: 12px;
  background-color: #f2f2f2;
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  color: #737373;
  font-weight: 500;
}
[type="button"]:not(:disabled) {
  cursor: pointer;
}
.btn {
  font-weight: 500;
  transition: opacity 0.2s ease-in-out;
}
.my-page-menu > ul[data-v-23177e17] {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.underline[data-v-23177e17] {
  border-bottom: 0.0625rem solid;
  border-color: #f2f2f2;
}
.my-page-menu .main-menu[data-v-23177e17] {
  /* display: flex; */
  align-items: center;
  padding: 0.75rem 0;
  font-size: 1.125rem;
  font-weight: 700;
  color: #323232;
  width: 100%;
}
a:not([href]),
a:not([href]):hover {
  color: inherit;
  text-decoration: none;
}

.clickable,
[role="button"] {
  cursor: pointer;
}
.my-page-menu > ul[data-v-23177e17]:last-child {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 2.53125rem;
}
</style>