<template>
  <div class="service">
    <h3>My Services</h3>
    <p>
      I offer a few development services, which if you are interested I can
      tailor a quote to meet your needs
    </p>
    <h4>Websites</h4>
    <p>
      I can work on many different types of websites, here are some examples
      below:
    </p>
    <ul>
      <li>Personal portfolios</li>
      <li>Small business websites</li>
      <li>E-commerce/e-shops</li>
    </ul>
    <h4>Applications</h4>
    <p>
      I have spent most of my career in developing desktop applications, I have
      also worked on web applications for various companies
    </p>

    <h4>Maintaining existing applications</h4>
    <p>
      If you have an existing application and hold the sourcecode for it and
      need a feature or even some bug fixes around the application, this is
      something I can accomedaite.
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Services extends Vue {}
</script>

<style lang="less">
.service {
  background-image: url("../assets/mitchell-luo-FWoq_ldWlNQ-unsplash.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  h3 {
    font-family: "Barlow Condensed", sans-serif;
    margin: 20px 20px;
  }

  h4 {
    font-family: "Barlow Condensed", sans-serif;
    margin: 20px 20px;
  }

  p {
    font-family: "Barlow Condensed", sans-serif;
    margin: 20px 20px;
  }
}
</style>
