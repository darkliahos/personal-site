<template>
  <div id="app">
    <div class="top">
      <div id="title">
        <img src="./assets/chrome_kuVgbBtKjv.png" width="268px" />
      </div>
      <div id="nav">
        <router-link to="/">HOME</router-link> |
        <router-link to="/about">MY MISSION</router-link> |
        <router-link to="/projects">PAST PROJECTS</router-link> |
        <router-link to="/services">SERVICES</router-link> |
        <router-link to="/contact">CONTACT</router-link>
      </div>
    </div>
    <router-view />
    <div class="links">
      <a href="https://www.linkedin.com/in/sohail-nasir-1564881a0/">
        <img src="./assets/linkedin-icon-0797ff-48.png" />
      </a>
      <a href="https://github.com/darkliahos">
        <img src="./assets/github-icon-13-800080-48.png" />
      </a>
      <a href="https://twitter.com/darkliahos">
        <img src="./assets/twitter-icon-28e5ff-48.png" />
      </a>
    </div>
    <div class="copyright">© 2022 Sohail Nasir. All rights reserved</div>
  </div>
</template>

<style lang="less">
html {
  background-color: #131313;
}
#app {
  font-family: "Barlow Condensed", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #131313;
  color: #ffffff;
  img {
    margin: 15px;
  }
  .links {
    text-align: center;
  }
  .copyright {
    text-align: center;
  }
}
.top {
  display: block;
  #title {
    background-color: #131313;
    padding: 20px;
    color: #d2dfa3;
    font-family: "Poiret One";
    @media screen and (max-width: 580px) {
      display: block;
      margin-bottom: 10px;
      text-align: center;
    }
    @media screen and (min-width: 581px) {
      display: inline-block;
    }
    svg {
      display: block;
      margin: auto;
    }
  }
  #nav {
    font-family: "Barlow Condensed", sans-serif;
    @media screen and (max-width: 580px) {
      display: block;
      margin-bottom: 10px;
      text-align: center;
    }
    @media screen and (min-width: 581px) {
      display: inline-block;
      padding: 0px 20px;
      position: absolute;
      top: 35px;
      right: 0px;
    }

    a {
      font-weight: bold;
      color: #ffffff;
      &.router-link-exact-active {
        color: #be9e44;
      }
    }
  }
}
</style>
