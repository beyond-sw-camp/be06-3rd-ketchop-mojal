<template>
  <!-- body -> div, +class=bbodyy, html -> template -->
  <div
    class="bbodyy post-write hide-mobile-global-header"
    style="padding-right: 0px"
  >
    <div id="app" data-browser="Chrome" data-is-loaded="true" class="">
      <div
        class="__cov-progress"
        style="
          background-color: rgb(0, 199, 174);
          opacity: 1;
          position: fixed;
          top: 0px;
          left: 0px;
          width: 0%;
          height: 2px;
          transition: opacity 0.6s ease 0s;
        "
      ></div>
      <header
        id="app-header"
        class="global-header hide-border-bottom"
        data-v-8cc44300=""
      >
        <div
          data-v-26153660=""
          data-v-8cc44300=""
          class="global-navigation-bar"
        >
          <section data-v-26153660="" class="mobile-header d-lg-none d-xl-none">
            <div
              data-v-26153660=""
              class="col-4 mobile-header-col left vue-portal-target"
            >
              <img
                data-v-26153660=""
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik00LjUgNmgxNW0tMTUgNmgxNW0tMTUgNmgxNSIgc3Ryb2tlPSIjMkQyRDJEIiBzdHJva2Utd2lkdGg9IjEuNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                data-testid="side-nav-menu-icon"
                alt="네비게이션 메뉴 아이콘"
              /><a data-v-26153660="" href="/?from=logo" class="left-logo"
                ><img
                  data-v-26153660=""
                  src="https://assets.cdn.soomgo.com/icons/logo/navigation_logo.svg"
                  alt="숨고 로고"
                  data-testid="main-logo"
              /></a>
            </div>
            <div
              data-v-26153660=""
              class="col-4 mobile-header-col center vue-portal-target"
            ></div>
            <div
              data-v-26153660=""
              class="col-4 mobile-header-col right vue-portal-target"
            >
              <img
                data-v-26153660=""
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiIHN0cm9rZT0iIzJEMkQyRCIgc3Ryb2tlLXdpZHRoPSIxLjUiPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGN4PSI2LjUiIGN5PSI2LjUiIHI9IjYuNSIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Im0xMS41IDExLjUgNSA1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                alt="검색 아이콘"
              /><!---->
              <div
                data-v-4c66cf88=""
                data-v-26153660=""
                class="notification-counter notification has-badge"
              >
                <button
                  data-v-4c66cf88=""
                  type="button"
                  class="btn btn-clear btn-none"
                >
                  <span
                    data-v-0d243f1a=""
                    data-v-4c66cf88=""
                    class="sg-icon-v1 alarm fill"
                    style="width: 1.5rem; height: 1.5rem; --svg-color: #323232"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.001 2.06079L11.999 2.06079C9.97499 2.06349 8.05941 2.98877 6.66424 4.5908C5.27192 6.18956 4.50296 8.33834 4.50071 10.5608V14.4899C4.50071 14.5503 4.47888 14.6086 4.43924 14.6541L3.4303 15.8127C3.15284 16.1313 3 16.5395 3 16.962V17.3108C3 18.2773 3.7835 19.0608 4.75 19.0608H8.32868C8.47595 19.7683 8.82956 20.423 9.35253 20.9399C10.0562 21.6354 11.0087 22.0245 12.0001 22.0245C12.9915 22.0245 13.944 21.6354 14.6477 20.9399C15.1707 20.423 15.5243 19.7683 15.6715 19.0608H19.25C20.2165 19.0608 21 18.2773 21 17.3108V16.962C21 16.5395 20.8472 16.1313 20.5697 15.8127L19.5608 14.6541C19.5211 14.6086 19.4993 14.5503 19.4993 14.4899V10.56C19.497 8.33758 18.7281 6.18956 17.3358 4.5908C15.9406 2.98877 14.025 2.06349 12.001 2.06079ZM14.1158 19.0608H9.88446C9.99491 19.3628 10.1719 19.6407 10.407 19.873C10.828 20.2892 11.4009 20.5245 12.0001 20.5245C12.5993 20.5245 13.1722 20.2892 13.5933 19.873C13.8283 19.6407 14.0053 19.3628 14.1158 19.0608ZM7.79542 5.57591C8.93058 4.27244 10.4456 3.56317 12 3.56079C13.5544 3.56317 15.0694 4.27244 16.2046 5.57591C17.3428 6.88293 17.9974 8.67461 17.9993 10.5616V14.4899C17.9993 14.9124 18.1521 15.3206 18.4296 15.6392L19.4385 16.7978C19.4782 16.8433 19.5 16.9016 19.5 16.962V17.3108C19.5 17.4489 19.3881 17.5608 19.25 17.5608H4.75C4.61193 17.5608 4.5 17.4489 4.5 17.3108V16.962C4.5 16.9016 4.52183 16.8433 4.56147 16.7978L5.57042 15.6392C5.84788 15.3206 6.00071 14.9124 6.00071 14.4899V10.5611C6.00273 8.67432 6.65726 6.88282 7.79542 5.57591Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span></button
                ><!---->
              </div>
            </div>
            <!---->
            <div data-v-4c0deb88="" data-v-26153660="">
              <div
                data-v-4c0deb88=""
                data-testid="mobile-usermenu"
                status="CUSTOMER"
                class="mobile-usermenu"
              >
                <div data-v-4c0deb88="" class="header">
                  <button data-v-4c0deb88="" class="close-button">
                    <img
                      data-v-4c0deb88=""
                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTkgNy44NjlMMTYuNDM0LjQzNGwxLjEzMiAxLjEzMkwxMC4xMyA5bDcuNDM1IDcuNDM0LTEuMTMyIDEuMTMyTDkgMTAuMTNsLTcuNDM0IDcuNDM1LTEuMTMyLTEuMTMyTDcuODcgOSAuNDM0IDEuNTY2IDEuNTY2LjQzNCA5IDcuODd6Ii8+CiAgICA8L2RlZnM+CiAgICA8dXNlIGZpbGw9IiMzMjMyMzIiIGZpbGwtcnVsZT0ibm9uemVybyIgeGxpbms6aHJlZj0iI2EiLz4KPC9zdmc+Cg=="
                    />
                  </button>
                </div>
                <div data-v-4c0deb88="" class="body">
                  <div data-v-4c0deb88="" data-name="user" class="row">
                    <div
                      data-v-4c0deb88=""
                      data-name="user-info"
                      role="button"
                      class="col"
                    >
                      <h4 data-v-4c0deb88="">구은주 고객님</h4>
                      <p data-v-4c0deb88="" data-testid="login-btn">
                        안녕하세요
                        <!---->
                      </p>
                    </div>
                    <div
                      data-v-4c0deb88=""
                      data-name="user-profile"
                      class="col-auto"
                    >
                      <div
                        data-v-29d5164e=""
                        data-v-4c0deb88=""
                        class="user-profile-picture"
                      >
                        <div
                          data-v-29d5164e=""
                          data-name="image"
                          class=""
                          data-src="https://static.cdn.soomgo.com/upload/profile/4b886eed-cacc-4667-9cab-a3fe44fd6f4a.jpg?h=320&amp;w=320&amp;webp=1"
                          lazy="loading"
                          style="
                            background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K');
                          "
                        ></div>
                      </div>
                    </div>
                    <!---->
                    <div data-v-4c0deb88="" class="user-controll col-12">
                      <div data-v-4c0deb88="" class="row">
                        <div data-v-4c0deb88="" class="logout col">
                          <button
                            data-v-4c0deb88=""
                            data-testid="btn-logout"
                            class="btn btn-border"
                          >
                            로그아웃
                          </button>
                        </div>
                        <div
                          data-v-4c0deb88=""
                          data-name="change-user-type"
                          class="col"
                        >
                          <button
                            data-v-4c0deb88=""
                            class="btn btn-border change-user-type"
                          >
                            고수전환
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav data-v-4c0deb88="" class="gnb-list">
                    <ul data-v-4c0deb88="" class="user-menu">
                      <li data-v-4c0deb88="" class="nav-item">
                        <a data-v-4c0deb88="" href="/requests/sent"
                          ><span data-v-4c0deb88="" class="menu-title show-dot"
                            >받은견적</span
                          ></a
                        ><!---->
                      </li>
                      <li data-v-4c0deb88="" class="nav-item">
                        <a data-v-4c0deb88="" href="/chats"
                          ><span data-v-4c0deb88="" class="menu-title"
                            >채팅</span
                          ></a
                        ><span data-v-4c0deb88="">9</span>
                      </li>
                      <li data-v-4c0deb88="" class="nav-item">
                        <a data-v-4c0deb88="" href="/mypage/"
                          ><span data-v-4c0deb88="" class="menu-title"
                            >마이페이지</span
                          ></a
                        ><!---->
                      </li>
                    </ul>
                    <ul data-v-4c0deb88="" class="service-menu">
                      <li data-v-4c0deb88="" class="nav-item">
                        <a
                          data-v-4c0deb88=""
                          href="/category-home?from=mobile_web_hamburger"
                          class="lnb-link"
                          ><span data-v-4c0deb88="" class="menu-title"
                            >교환글</span
                          ></a
                        ><!---->
                      </li>
                      <li data-v-4c0deb88="" class="nav-item">
                        <a
                          data-v-4c0deb88=""
                          href="/search/pro?from=mobile_web_hamburger"
                          class="lnb-link"
                          ><span data-v-4c0deb88="" class="menu-title"
                            >나눔글</span
                          ></a
                        ><!---->
                      </li>
                      <li data-v-4c0deb88="" class="nav-item">
                        <a
                          data-v-4c0deb88=""
                          href="/market/?location=mobile_web_hamburger"
                          class="lnb-link"
                          ><span data-v-4c0deb88="" class="menu-title"
                            >나의글</span
                          ></a
                        ><!---->
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <!---->
            </div>
          </section>
          <section data-v-26153660="" class="d-none d-lg-block d-xl-block">
            <div data-v-26153660="" class="desktop-header">
              <div data-v-26153660="" class="left-section">
                <div data-v-26153660="" class="logo">
                  <a data-v-26153660="" href="/?from=logo" class=""
                    ><img
                      data-v-26153660=""
                      src="https://assets.cdn.soomgo.com/icons/logo/navigation_logo.svg"
                      alt="숨고, 숨은고수"
                  /></a>
                </div>
                <nav data-v-26153660="">
                  <ul data-v-26153660="" class="nav-list">
                    <li data-v-26153660="" class="nav-item left-section-item">
                      <a data-v-26153660="" href="/category-home?from=web_gnb"
                        ><span data-v-26153660=""><router-link to="expostlist">교환글</router-link></span></a
                      >
                    </li>
                    <li data-v-26153660="" class="nav-item left-section-item">
                      <a data-v-26153660="" href="/search/pro?from=web_gnb"
                        ><span data-v-26153660=""><router-link to="shpostlist">나눔글</router-link></span></a
                      >
                    </li>
                    <li data-v-26153660="" class="nav-item left-section-item">
                      <a data-v-26153660="" href="/market/"
                        ><span data-v-26153660=""><router-link to="emsimypage">나의글</router-link></span></a
                      >
                    </li>
                  </ul>
                </nav>
              </div>
              <div data-v-26153660="" class="center-section">
                <div data-v-deb28fc4="" data-v-26153660="" @click="searchClick" class="service-searcher-desktop service-search-container is-located-gnb">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#323232" class="css-14be4in e4jlfpt1">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.509 17.018a8.512 8.512 0 1 1 1.057-1.064l4.455 4.455a.75.75 0 1 1-1.06 1.06l-4.452-4.45Zm1.523-6.506a7.012 7.012 0 1 1-14.023 0 7.012 7.012 0 0 1 14.023 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  <!-- <form data-v-215f2a28="" data-v-deb28fc4="" class="global-search-bar">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#B5B5B5" class="css-14be4in e4jlfpt1">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.509 17.018a8.512 8.512 0 1 1 1.057-1.064l4.455 4.455a.75.75 0 1 1-1.06 1.06l-4.452-4.45Zm1.523-6.506a7.012 7.012 0 1 1-14.023 0 7.012 7.012 0 0 1 14.023 0Z" fill="currentColor">
                                                    </path>
                                                </svg>
                                        <div data-v-215f2a28="" role="group" class="input-group">
                                            <div data-v-215f2a28="" class="input-group-prepend">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#B5B5B5" class="css-14be4in e4jlfpt1">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.509 17.018a8.512 8.512 0 1 1 1.057-1.064l4.455 4.455a.75.75 0 1 1-1.06 1.06l-4.452-4.45Zm1.523-6.506a7.012 7.012 0 1 1-14.023 0 7.012 7.012 0 0 1 14.023 0Z" fill="currentColor">
                                                    </path>
                                                </svg>
                                                <img data-v-215f2a28=""
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgNCkiIHN0cm9rZT0iI0I1QjVCNSIgc3Ryb2tlLXdpZHRoPSIxLjYiPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGN4PSI2LjUiIGN5PSI2LjUiIHI9IjYuNSIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Im0xMS41IDExLjUgNSA1Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
                                                    alt="검색 아이콘">
                                            </div>
                                            <input data-v-215f2a28="" type="text"
                                                    placeholder="어떤 서비스가 필요하세요?" autocomplete="off" class="form-control"
                                                    id="__BVID__2625">
                                            <div data-v-215f2a28="" class="input-group-append">
                                                <img data-v-215f2a28=""
                                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiPgogICAgICAgICAgICA8Y2lyY2xlIGZpbGw9IiNDNUM1QzUiIGN4PSI5IiBjeT0iOSIgcj0iOSIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im02IDYgNi4wMDUgNi4wMDZNMTIuMDA1IDYgNiAxMi4wMDYiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="
                                                    alt="검색어 삭제 아이콘" style="display: none;">
                                            </div>
                                        </div>
                                    </form> -->
                </div>
                <div data-v-26153660="" class="right-section">
                    <div v-if="!memberStore.isLogined"><HeaderRightBeforeLogin/></div>
                    <div v-else><HeaderRightAfterLogin/></div>
                    <!-- <nav data-v-26153660="">
                  <ul data-v-26153660="" class="nav-list">
                    <li
                      data-v-26153660=""
                      class="nav-item right-section-item show-dot"
                    >
                      <a
                        data-v-26153660=""
                        href="/requests/sent"
                        class="gnb-link"
                        ><span data-v-26153660="">받은견적</span></a
                      >
                    </li>
                    <li data-v-26153660="" class="nav-item right-section-item">
                      <a data-v-26153660="" href="/chats" class="gnb-link"
                        ><span data-v-26153660="">채팅</span></a
                      ><span
                        data-v-26153660=""
                        class="badge badge-count badge-danger"
                      >
                        9
                      </span>
                    </li>
                  </ul>
                </nav> -->
                    <!-- <div data-v-4c66cf88="" data-v-26153660="" class="notification-counter notification-counter right-section-item has-badge">
                    <button data-v-4c66cf88="" type="button" class="btn btn-clear btn-none">
                        <span data-v-0d243f1a="" data-v-4c66cf88="" class="sg-icon-v1 alarm fill"
                            style="
                            width: 1.5rem;
                            height: 1.5rem;
                            --svg-color: #323232;
                            "
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.001 2.06079L11.999 2.06079C9.97499 2.06349 8.05941 2.98877 6.66424 4.5908C5.27192 6.18956 4.50296 8.33834 4.50071 10.5608V14.4899C4.50071 14.5503 4.47888 14.6086 4.43924 14.6541L3.4303 15.8127C3.15284 16.1313 3 16.5395 3 16.962V17.3108C3 18.2773 3.7835 19.0608 4.75 19.0608H8.32868C8.47595 19.7683 8.82956 20.423 9.35253 20.9399C10.0562 21.6354 11.0087 22.0245 12.0001 22.0245C12.9915 22.0245 13.944 21.6354 14.6477 20.9399C15.1707 20.423 15.5243 19.7683 15.6715 19.0608H19.25C20.2165 19.0608 21 18.2773 21 17.3108V16.962C21 16.5395 20.8472 16.1313 20.5697 15.8127L19.5608 14.6541C19.5211 14.6086 19.4993 14.5503 19.4993 14.4899V10.56C19.497 8.33758 18.7281 6.18956 17.3358 4.5908C15.9406 2.98877 14.025 2.06349 12.001 2.06079ZM14.1158 19.0608H9.88446C9.99491 19.3628 10.1719 19.6407 10.407 19.873C10.828 20.2892 11.4009 20.5245 12.0001 20.5245C12.5993 20.5245 13.1722 20.2892 13.5933 19.873C13.8283 19.6407 14.0053 19.3628 14.1158 19.0608ZM7.79542 5.57591C8.93058 4.27244 10.4456 3.56317 12 3.56079C13.5544 3.56317 15.0694 4.27244 16.2046 5.57591C17.3428 6.88293 17.9974 8.67461 17.9993 10.5616V14.4899C17.9993 14.9124 18.1521 15.3206 18.4296 15.6392L19.4385 16.7978C19.4782 16.8433 19.5 16.9016 19.5 16.962V17.3108C19.5 17.4489 19.3881 17.5608 19.25 17.5608H4.75C4.61193 17.5608 4.5 17.4489 4.5 17.3108V16.962C4.5 16.9016 4.52183 16.8433 4.56147 16.7978L5.57042 15.6392C5.84788 15.3206 6.00071 14.9124 6.00071 14.4899V10.5611C6.00273 8.67432 6.65726 6.88282 7.79542 5.57591Z"
                                fill="black"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div> -->
                    <!-- <div data-v-35a09b99="" data-v-26153660="" class="usermenu user-menu right-section-item">
                    <div data-v-35a09b99="" class="usermenu-button">
                        <div data-v-29d5164e="" data-v-35a09b99="" class="user-profile-picture" >
                            <div data-v-29d5164e="" data-name="image" class=""
                                data-src="https://static.cdn.soomgo.com/upload/profile/4b886eed-cacc-4667-9cab-a3fe44fd6f4a.jpg?h=320&amp;w=320&amp;webp=1"
                                lazy="loaded"
                                style="
                                background-image: url('https://static.cdn.soomgo.com/upload/profile/4b886eed-cacc-4667-9cab-a3fe44fd6f4a.jpg?h=320&amp;w=320&amp;webp=1');
                                "
                            ></div>
                        </div>
                        <img
                        data-v-35a09b99=""
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgxMnYxMkgweiIvPgogICAgICAgIDxwYXRoIHN0cm9rZT0iIzg4OCIgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEwIDQgNiA4IDIgNCIvPgogICAgPC9nPgo8L3N2Zz4K"
                        />
                    </div>
                    <div data-v-35a09b99="" class="usermenu-dropdown" style="display: none" >
                        <div data-v-35a09b99="" data-name="user-info">
                            <h4 data-v-35a09b99="" data-name="name">구은주 고객님</h4>
                        </div>
                        <ul data-v-35a09b99="" data-name="usermenu-control">
                            <li data-v-35a09b99="" class="row" style="display: none">
                                <div data-v-35a09b99="" class="col">프로필 관리</div>
                            </li>
                            <li data-v-35a09b99="" class="row">
                                <div data-v-35a09b99="" class="col">받은 견적</div>
                            </li>
                            <li data-v-35a09b99="" class="row">
                                <div data-v-35a09b99="" class="col">마이페이지</div>
                            </li>
                        </ul>
                        <div data-v-35a09b99="" data-name="user-type-control">
                            <button data-v-35a09b99="" type="button" class="btn btn-secondary btn-sm">
                                <img
                                data-v-35a09b99=""
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMSI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMzMjMyMzIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjIiPjxwYXRoIGQ9Ik0xMiAxLjV2M0g5bS04IDV2LTNoMyIvPjxwYXRoIGQ9Ik0yLjI1NSA0QTQuNSA0LjUgMCAwIDEgOS42OCAyLjMyTDEyIDQuNW0tMTEgMmwyLjMyIDIuMThBNC41IDQuNSAwIDAgMCAxMC43NDUgNyIvPjwvZz48L3N2Zz4="
                                />고수전환
                            </button>
                        </div>
                        <div data-v-35a09b99="" class="logout">
                            <button data-v-35a09b99="" type="button" class="btn btn-secondary btn-sm" >
                                로그아웃
                            </button>
                        </div>
                    </div>
                </div> -->
                  </div>
              </div>
            </div>
          </section>
        </div>
        <!----><!---->
      </header>
    </div>
  </div>
  <div :class="{'search-off': !isSearchOn}"><SearchComponent @searchOff="searchOff"/></div>
</template>

<script>
import HeaderRightAfterLogin from './HeaderRightAfterLogin.vue';
import HeaderRightBeforeLogin from "./HeaderRightBeforeLogin.vue";
import SearchComponent from './SearchComponent.vue';
import { mapStores } from 'pinia';
import {useMemberStore} from '@/store/useMemberStore';

export default {
  name: "HeaderComponent",
  data() {
    return { 
      message: "test",
      isSearchOn : false,
      isLogined : false,
    };
  },
  computed:{
      ...mapStores(useMemberStore)
  },
  components: {
    HeaderRightBeforeLogin,
    HeaderRightAfterLogin,
    SearchComponent
  },
  methods:{
    searchClick(){
      this.isSearchOn=true;
    },
    searchOff(){
      this.isSearchOn = false;
    },
    isLogin(){

    }
  }
};
</script>

<style scoped>
/* 필수 css? */
.before-login{
  display: none;
}
.search-off{
  display: none;
}
element.style {
  --gnb-height: 72px;
  padding-right: 0px;
}

.bbodyy,
template {
  height: 100%;
  position: fixed;
}

.bbodyy {
  margin: 0;
  font-family: Noto Sans KR, Malgun Gothic, -apple-system, Segoe UI, Roboto,
    Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #323232;
  text-align: left;
  background-color: #fff;
  width: 100%;
  z-index: 100;
  height: 4.5rem;
  align-items: center;
}

template {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

div {
  display: block;
  unicode-bidi: isolate;
}

* {
  word-break: break-word;
}

*,
:after,
:before {
  box-sizing: border-box;
}

/* template[Attributes Style] {
    -webkit-locale: "ko";
} */

:root {
  view-transition-name: root;
}

template {
  display: block;
}

:root {
  --blue: #4785ff;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #ff3131;
  --orange: #fd7e14;
  --yellow: #ffce21;
  --green: #28a745;
  --teal: #20c997;
  --cyan: #17a2b8;
  --white: #fff;
  --gray: #999;
  --gray-dark: #525252;
  --primary: #00c7ae;
  --secondary: #e1e1e1;
  --success: #00c7ae;
  --info: #17a2b8;
  --warning: #ffce21;
  --danger: #ff3131;
  --light: #fafafa;
  --dark: #525252;
  --breakpoint-xs: 0;
  --breakpoint-sm: 36rem;
  --breakpoint-md: 48rem;
  --breakpoint-lg: 62rem;
  --breakpoint-xl: 75rem;
  --font-family-sans-serif: "Noto Sans KR", "Malgun Gothic", -apple-system,
    "Segoe UI", Roboto, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}

/* <div id="app"> */

.bbodyy.hide-mobile-global-header #app {
  height: 100%;
}

#app[data-is-loaded="true"],
#app[data-is-loaded="true"] #app-body,
#app[data-is-loaded="true"] #app-header,
#app[data-is-loaded="true"] #app-sticky-nav {
  opacity: 1;
}

#app {
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 1;
  min-height: 100%;
}

/* 여기까지 */

/*  */

#app #app-body,
#app #app-header {
  opacity: 1;
  transition: opacity 0.3s ease-in;
}

#app-header.hide-border-bottom[data-v-8cc44300] {
  border-bottom: none;
}

/* @media (min-width: 992px) {
  #app-header[data-v-8cc44300] {
    height: 4.5rem;
    border-bottom: 0.0625rem solid #f2f2f2;
  }
} */

#app-header[data-v-8cc44300] {
  position: sticky;
  top: 0;
  height: 4.5rem;
  background-color: #fff;
}

.global-header[data-v-8cc44300] {
  z-index: 1020;
  display: block;
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

/*  */

.hide-border-bottom .global-navigation-bar[data-v-26153660],
.profile .global-navigation-bar[data-v-26153660],
:not(:has(.home)) .has-lnb .global-navigation-bar[data-v-26153660] {
  border-bottom: none;
}

@media (min-width: 992px) {
  .global-navigation-bar[data-v-26153660] {
    height: 4.5rem;
    padding: 0;
    border-bottom: none;
  }
}

.global-navigation-bar[data-v-26153660] {
  position: relative;
  display: flex;
  justify-content: center;
  height: 4.5rem;
  padding: 1rem;
  margin: 0 auto;
  text-align: center;
  border-bottom: 0.0625rem solid #f2f2f2;
}

/*  */

.mobile-header[data-v-26153660] {
  display: flex;
  align-items: center;
  width: 100%;
}

@media (min-width: 1200px) {
  .d-xl-none {
    display: none !important;
  }
}

@media (min-width: 992px) {
  .d-lg-none {
    display: none !important;
  }
}
@media (min-width: 768px) {
  .d-lg-none {
    display: none !important;
  }
}

.mobile-header .mobile-header-col.left[data-v-26153660] {
  justify-content: flex-start;
}

.mobile-header .mobile-header-col[data-v-26153660] {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-1,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto,
.modal .modal-footer .btn {
  position: relative;
  width: 100%;
  padding-right: 0.9375rem;
  padding-left: 0.9375rem;
}

/*  */

img,
svg {
  vertical-align: middle;
}

img {
  border-style: none;
}

/*  */

.mobile-header .left-logo[data-v-26153660] {
  height: 1.625rem;
  margin-left: 1rem;
}

a,
a:hover {
  text-decoration: none;
}

a {
  color: #323232;
  background-color: transparent;
}

/*  */

.mobile-header .left-logo img[data-v-26153660],
.mobile-header .logo img[data-v-26153660] {
  height: 1.625rem;
}

.mobile-header .mobile-header-col[data-v-26153660] {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.mobile-header .mobile-header-col.right[data-v-26153660] {
  justify-content: flex-end;
}

.mobile-header .mobile-header-col[data-v-26153660] {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

/*  */

.mobile-header .notification[data-v-26153660] {
  margin-left: 1.25rem;
}

.notification-counter[data-v-4c66cf88] {
  position: relative;
  cursor: pointer;
}

/*  */

.btn-clear[data-v-4c66cf88] {
  border: 0;
  background: none;
  padding: 0;
  margin: 0;
  display: flex;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

.btn {
  font-weight: 500;
  transition: opacity 0.2s ease-in-out;
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
  border: 0.0625rem solid transparent;
  padding: 0.6875rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

[type="button"],
[type="reset"],
[type="submit"],
button {
  -webkit-appearance: button;
}

button,
select {
  text-transform: none;
}

button,
input {
  overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button {
  border-radius: 0;
}

/* .sg-icon-v1 alarm fill 이걸로 바꾸기? */
.sg-icon-v1 alarm fill {
  width: 1.5rem;
  height: 1.5rem;
  --svg-color: #323232;
}

.sg-icon-v1[data-v-0d243f1a] {
  display: inline-flex;
}

/*  */

.sg-icon-v1[data-v-0d243f1a] svg {
  width: 100%;
  height: 100%;
  color: var(--svg-color);
}

svg {
  overflow: hidden;
}

/*  */

.sg-icon-v1.fill[data-v-0d243f1a] svg path {
  fill: currentColor;
}

/*  */

.mobile-usermenu[data-v-4c0deb88] {
  position: fixed;
  left: 0;
  top: 0;
  width: 80%;
  height: 100%;
  background-color: #fff;
  padding: 1.25rem;
  z-index: 1050;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
}

/*  */

.mobile-usermenu .header[data-v-4c0deb88] {
  text-align: right;
  padding-bottom: 1.25rem;
}

/*  */

.mobile-usermenu .header button[data-v-4c0deb88] {
  border: none;
  box-shadow: none;
  padding: 0;
  background-color: transparent;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

button,
select {
  text-transform: none;
}

button {
  border-radius: 0;
}

/*  */

.mobile-usermenu .body div[data-name="user"][data-v-4c0deb88] {
  padding-bottom: 1.25rem;
  border-bottom: 0.0625rem solid #f2f2f2;
}

.row[data-v-4c0deb88],
[class*="col"][data-v-4c0deb88] {
  margin: 0;
  padding: 0;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.9375rem;
  margin-left: -0.9375rem;
}

/*  */

.mobile-usermenu
  .body
  div[data-name="user"]
  div[data-name="user-info"][data-v-4c0deb88] {
  text-align: left;
  cursor: pointer;
}

.row[data-v-4c0deb88],
[class*="col"][data-v-4c0deb88] {
  margin: 0;
  padding: 0;
}

.col,
.modal .modal-footer .btn {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.clickable,
[role="button"] {
  cursor: pointer;
}

/*  */

.mobile-usermenu
  .body
  div[data-name="user"]
  div[data-name="user-info"]
  h4[data-v-4c0deb88] {
  margin-bottom: 0.125rem;
  line-height: 1.57;
  font-size: 1rem;
}

.mobile-usermenu
  .body
  div[data-name="user"]
  div[data-name="user-info"]
  h4[data-v-4c0deb88],
.mobile-usermenu
  .body
  div[data-name="user"]
  div[data-name="user-info"]
  p[data-v-4c0deb88] {
  margin: 0;
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

.h4,
.swal2-container.sg-swal .swal2-header .swal2-title,
h4 {
  font-size: 1.375rem;
  line-height: 2.0625rem;
  font-weight: 500;
  letter-spacing: -0.025rem;
}

/*  */

.mobile-usermenu
  .body
  div[data-name="user"]
  div[data-name="user-info"]
  p[data-v-4c0deb88] {
  color: #737373;
  line-height: 1.67;
  font-size: 0.875rem;
}

.mobile-usermenu
  .body
  div[data-name="user"]
  div[data-name="user-info"]
  h4[data-v-4c0deb88],
.mobile-usermenu
  .body
  div[data-name="user"]
  div[data-name="user-info"]
  p[data-v-4c0deb88] {
  margin: 0;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

/*  */

.row[data-v-4c0deb88],
[class*="col"][data-v-4c0deb88] {
  margin: 0;
  padding: 0;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
}

/*  */

.mobile-usermenu
  .body
  div[data-name="user"]
  div[data-name="user-profile"]
  .user-profile-picture[data-v-4c0deb88] {
  width: 2.75rem;
  height: 2.75rem;
}

.user-profile-picture[data-v-29d5164e] {
  position: relative;
}

/*  */

/* data-v-29d5164e 로 바꿀까? */
[data-v-29d5164e] {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K);
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

/*  */

.mobile-usermenu .body div[data-name="user"] .user-controll[data-v-4c0deb88] {
  margin-top: 1.5rem;
}

.row[data-v-4c0deb88],
[class*="col"][data-v-4c0deb88] {
  margin: 0;
  padding: 0;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

/*  */

.mobile-usermenu
  .body
  div[data-name="user"]
  .user-controll
  .row[data-v-4c0deb88] {
  gap: 0 0.5rem;
}

.row[data-v-4c0deb88],
[class*="col"][data-v-4c0deb88] {
  margin: 0;
  padding: 0;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -0.9375rem;
  margin-left: -0.9375rem;
}

/*  */

.row[data-v-4c0deb88],
[class*="col"][data-v-4c0deb88] {
  margin: 0;
  padding: 0;
}

.col,
.modal .modal-footer .btn {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

/*  */

.logout button.btn[data-v-4c0deb88],
[data-name="change-user-type"] button.btn[data-v-4c0deb88] {
  width: 100%;
  height: auto;
  border-color: #f2f2f2;
  color: #737373;
  padding: 0.375rem 0;
  font-size: 0.875rem;
  line-height: 1.63;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

.btn {
  font-weight: 500;
  transition: opacity 0.2s ease-in-out;
}

button,
select {
  text-transform: none;
}

button {
  border-radius: 0;
}

/*  */

.row[data-v-4c0deb88],
[class*="col"][data-v-4c0deb88] {
  margin: 0;
  padding: 0;
}

.col,
.modal .modal-footer .btn {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

/*  */

.logout button.btn[data-v-4c0deb88],
[data-name="change-user-type"] button.btn[data-v-4c0deb88] {
  width: 100%;
  height: auto;
  border-color: #f2f2f2;
  color: #737373;
  padding: 0.375rem 0;
  font-size: 0.875rem;
  line-height: 1.63;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

/*  */

.mobile-usermenu .body nav .user-menu[data-v-4c0deb88] {
  border-bottom: 0.0625rem solid #f2f2f2;
}

.mobile-usermenu .body nav > ul[data-v-4c0deb88] {
  padding: 0.75rem 0;
}

.mobile-usermenu .body ul[data-v-4c0deb88] {
  padding: 0;
  margin: 0;
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

/*  */

.mobile-usermenu .body ul li[data-v-4c0deb88] {
  line-height: 1.57;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  padding: 0.75rem 0;
}

ul li {
  list-style: none;
}

/*  */

.mobile-usermenu a[data-v-4c0deb88] {
  color: #323232;
  font-size: 1rem;
  font-weight: 500;
}

/*  */

.mobile-usermenu .body ul li .menu-title.show-dot[data-v-4c0deb88] {
  position: relative;
}

/*  */

.mobile-usermenu .body nav > ul[data-v-4c0deb88] {
  padding: 0.75rem 0;
}

.mobile-usermenu .body ul[data-v-4c0deb88] {
  padding: 0;
  margin: 0;
}

/*  */
.d-xl-block{
  width: 60%;
}

@media (min-width: 1200px) {
  .d-xl-block {
    display: block !important;
  }
}

@media (min-width: 992px) {
  .d-lg-block {
    display: block !important;
  }
}

@media (max-width: 768px) {
  .d-none {
    display: none !important;
  }
}

/*  */

.desktop-header[data-v-26153660] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 60.625rem; */
  height: 100%;
}

/*  */

.desktop-header .left-section[data-v-26153660],
.desktop-header .right-section[data-v-26153660] {
  display: flex;
  align-items: center;
}
/*  */

.desktop-header .logo[data-v-26153660] {
  margin-right: 1.875rem;
}

/*  */

.desktop-header .logo img[data-v-26153660] {
  height: 1.6875rem;
}

/*  */

.desktop-header .nav-list[data-v-26153660] {
  display: flex;
  margin: 0;
}

/*  */

.desktop-header .left-section-item[data-v-26153660]:first-child {
  margin-left: 0;
}

.desktop-header .nav-item[data-v-26153660] {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.desktop-header .left-section-item[data-v-26153660] {
  margin-left: 1.125rem;
  font-weight: 500;
}

/*  */

.center-section{
  display: flex;
  align-items: center;
}
.service-search-container{
  margin-right: 1rem;
}
.desktop-header .center-section .service-search-container[data-v-26153660] {
  /* width: 17.5rem; */
  height: 2.5rem;
  display: flex;
  justify-content: right;
  align-items: center;
}

@media (min-width: 768px) {
  .service-searcher-desktop[data-v-deb28fc4] {
    padding-top: 0;
  }
}

.service-searcher-desktop[data-v-deb28fc4] {
  position: relative;
}

/*  */

.global-search-bar[data-v-215f2a28] {
  width: 100%;
  height: 100%;
}

/*  */

.input-group[data-v-215f2a28] {
  height: 100%;
  padding: 0 0.75rem;
  margin: 0;
  background: #f2f2f2;
  border-radius: 6px;
}

.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

/*  */

.input-group-prepend[data-v-215f2a28] {
  padding-right: 0.5rem;
}

.input-group-append[data-v-215f2a28],
.input-group-prepend[data-v-215f2a28] {
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.input-group-prepend {
  margin-right: -0.0625rem;
}

.input-group-append,
.input-group-prepend {
  display: flex;
}

/*  */

.input-group-append img[data-v-215f2a28],
.input-group-prepend img[data-v-215f2a28] {
  max-width: 100%;
  margin: auto;
}

/*  */

.input-group > .custom-select:not(:first-child),
.input-group > .form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group > .custom-select:not(:last-child),
.input-group > .form-control:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

input.form-control[data-v-215f2a28] {
  height: auto;
  padding: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #323232;
  caret-color: #00c7ae;
  background: #f2f2f2;
  border: none;
}

.input-group > .custom-file,
.input-group > .custom-select,
.input-group > .form-control,
.input-group > .form-control-plaintext {
  position: relative;
  flex: 1 1 0%;
  min-width: 0;
  margin-bottom: 0;
}

.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 1.5rem);
  padding: 0.6875rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #323232;
  background-color: #fff;
  background-clip: padding-box;
  border: 0.0625rem solid #e1e1e1;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/*  */

.input-group-append[data-v-215f2a28] {
  position: relative;
  z-index: 1;
}

.input-group-append[data-v-215f2a28],
.input-group-prepend[data-v-215f2a28] {
  margin: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
}

.input-group-append {
  margin-left: -0.0625rem;
}

/*  */

/* data-v-215f2a28 로 바꿀까?  */
img[data-v-215f2a28] {
  display: none;
}

/*  */

.desktop-header .right-section[data-v-26153660] {
  justify-content: flex-end;
}

/*  */

.desktop-header .right-section-item[data-v-26153660] {
  margin-left: 1rem;
}

/*  */

/* data-v-0d243f1a data-v-4c66cf88 sg-icon-v1 alarm fill 로 바꾸기? */
.sg-icon-v1 alarm fill {
  width: 1.5rem;
  height: 1.5rem;
  --svg-color: #323232;
}

/*  */

.notification-counter.has-badge[data-v-4c66cf88]:after {
  content: "";
  position: absolute;
  top: 0;
  right: -0.125rem;
  background-color: #ff3131;
  width: 0.375rem;
  height: 0.375rem;
  border-radius: 50%;
}

/*  */

.usermenu[data-v-35a09b99] {
  position: relative;
}

/*  */

.usermenu-button[data-v-35a09b99] {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

/*  */

.usermenu-button .user-profile-picture[data-v-35a09b99] {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
}

.user-profile-picture[data-v-29d5164e] {
  position: relative;
}

/*  */

/* data-v-29d5164e 로 바꿀까? */
[data-v-29d5164e] {
  background-image: url(https://static.cdn.soomgo.com/upload/profile/4b886eed-cacc-4667-9cab-a3fe44fd6f4a.jpg?h=320&w=320&webp=1);
}

/*  */

.usermenu-button .user-profile-picture[data-v-35a09b99]:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border-radius: 50%;
  border: 0.0625rem solid #e1e1e1;
}

/*  */

.usermenu[data-v-35a09b99] .usermenu-dropdown {
  z-index: 100;
}

.usermenu-dropdown[data-v-35a09b99] {
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(103%);
  background-color: #fff;
  border: 0.0625rem solid #e1e1e1;
  border-radius: 4px;
  padding: 1.3125rem;
  width: 15rem;
  overflow: visible;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.1);
  text-align: left;
}

/*  */

.usermenu-dropdown
  div[data-name="user-info"]
  h4[data-name="name"][data-v-35a09b99] {
  font-size: 1rem;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/*  */

.usermenu-dropdown ul[data-name="usermenu-control"][data-v-35a09b99] {
  border-bottom: 0.0625rem solid #e1e1e1;
  margin-top: 1rem;
  margin-bottom: 1.3125rem;
  padding-bottom: 1.3125rem;
}

.usermenu-dropdown .logout[data-v-35a09b99],
.usermenu-dropdown
  div[data-name="signup-pro-control"]
  button.btn[data-v-35a09b99],
.usermenu-dropdown
  div[data-name="user-type-control"]
  button.btn[data-v-35a09b99],
.usermenu-dropdown ul[data-name="usermenu-control"][data-v-35a09b99] {
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 400;
  letter-spacing: -0.0125rem;
}

/*  */

/* data-v-35a09b99 로 바꿀까? */
/* element.style {
    display: none;
} */

.usermenu-dropdown ul[data-name="usermenu-control"] li[data-v-35a09b99] {
  padding: 0.65625rem 0;
  cursor: pointer;
}

/*  */

.usermenu-dropdown
  ul[data-name="usermenu-control"]
  li
  div[class*="col"][data-v-35a09b99] {
  color: #323232;
}

/*  */

.usermenu-dropdown div[data-name="user-type-control"][data-v-35a09b99] {
  margin: 1.3125rem 0;
}

/*  */

.usermenu-dropdown
  div[data-name="user-type-control"]
  button.btn[data-v-35a09b99] {
  color: #323232;
}

.usermenu-dropdown button.btn[data-v-35a09b99] {
  width: 100%;
  text-align: left;
  background-color: transparent;
  border: none;
}

.btn.btn-outline-secondary,
.btn.btn-secondary {
  color: #737373;
}

[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}

.btn-group-sm > .btn,
.btn-sm {
  padding: 0.59375rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

.btn-secondary {
  color: #323232;
  background-color: #e1e1e1;
  border-color: #e1e1e1;
}

button,
select {
  text-transform: none;
}

button,
input {
  overflow: visible;
}

/*  */

.usermenu-dropdown div[data-name="user-type-control"] img[data-v-35a09b99] {
  margin-right: 0.65625rem;
}

/*  */

.usermenu-dropdown .logout[data-v-35a09b99] {
  margin: 1.3125rem -1.3125rem -1.3125rem;
  background-color: #fafafa;
}

.usermenu-dropdown .logout[data-v-35a09b99],
.usermenu-dropdown
  div[data-name="signup-pro-control"]
  button.btn[data-v-35a09b99],
.usermenu-dropdown
  div[data-name="user-type-control"]
  button.btn[data-v-35a09b99],
.usermenu-dropdown ul[data-name="usermenu-control"][data-v-35a09b99] {
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 400;
  letter-spacing: -0.0125rem;
}

/*  */

.usermenu-dropdown .logout button.btn[data-v-35a09b99] {
  text-align: center;
}
</style>