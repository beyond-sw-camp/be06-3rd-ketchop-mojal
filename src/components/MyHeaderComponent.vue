<template>
    <div class="header-container">
        <header>
            <div class="logo-container">
                <a data-v-26153660="" href="/?from=logo" class="left-logo">
                    <img data-v-26153660="" src="https://assets.cdn.soomgo.com/icons/logo/navigation_logo.svg" alt="숨고 로고" data-testid="main-logo"/>
                </a>
            </div>
            <nav class="nav-container">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#">교환글</a></li>
                    <li class="nav-item"><a href="#">나눔글</a></li>
                    <li class="nav-item"><a href="#">나의글</a></li>
                </ul>
            </nav>
            <div class="search-container">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#323232">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.509 17.018a8.512 8.512 0 1 1 1.057-1.064l4.455 4.455a.75.75 0 1 1-1.06 1.06l-4.452-4.45Zm1.523-6.506a7.012 7.012 0 1 1-14.023 0 7.012 7.012 0 0 1 14.023 0Z" fill="currentColor"></path>
                </svg>
            </div>
            <HeaderRightComponent/>
        </header>
    </div>
</template>

<script>
import HeaderRightComponent from './HeaderRightBeforeLogin.vue'

export default {
    components: {
        HeaderRightComponent
    }
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: black;
}
.header-container{
    display: flex;
    justify-content: center;
    width: 100%;
}
.header-container header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #fff;
    width: 60.625rem;
}

.logo-container {
    display: inline;
    flex: 0;
    margin-right: 2rem;
}
.logo-container img{
    height: 1.6875rem;
}

.nav-container {
    flex: 2;
}

.nav-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav-item {
    margin: 0 1rem;
}

.search-container {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

svg {
    cursor: pointer;
}
</style>
