<template>
  <div class="service">
    <div class="content">
      <div class="title">My Services</div>
      <div class="blurb">
        I offer a few development services, which if you are interested I can
        tailor a quote to meet your needs
      </div>
      <div class="leading">Websites</div>
      <div class="blurb">
        I can work on many different types of websites, here are some examples
        below:
      </div>
      <ul>
        <li>Personal portfolios</li>
        <li>Small business websites</li>
        <li>E-commerce/e-shops</li>
      </ul>
      <div class="leading">Applications</div>
      <div class="blurb">
        I have spent most of my career in developing desktop applications, I
        have also worked on web applications for various companies
      </div>

      <div class="leading">Maintaining existing applications</div>
      <div class="blurb">
        If you have an existing application and hold the sourcecode for it and
        need a feature or even some bug fixes around the application, this is
        something I can accomedaite.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Services extends Vue {}
</script>

<style lang="less">
.service {
  @media screen and (min-width: 981px) {
    background-image: url("../assets/alessandro-bianchi-_kdTyfnUFAc-unsplash.png");
    background-repeat: no-repeat;
    background-size: auto;
  }
}
.content {
  font-family: "Barlow Condensed", sans-serif;
  @media screen and (max-width: 980px) {
    padding: 45px 70px 45px 0;
    margin-left: 70px;
  }
  @media screen and (min-width: 981px) {
    padding: 40px 245px 45px 45px;
    margin-left: 250px;
  }
  .title {
    font-size: 36px;
  }
  .leading {
    font-size: 26px;
    padding: 15px 0;
  }
  .blurb {
    font-size: 20px;
    padding: 15px 0;
  }
  .tennet {
    padding: 15px 0;
    .title {
      font-size: 22px;
    }
    .blurb {
      font-size: 18px;
    }
  }
}
</style>
