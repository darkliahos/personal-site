<template>
  <div class="home">
    <div class="content">
      <div class="title">
        Your ideas | Our Passion
      </div>
      <div class="leading">
       We are all passionate about our ideas but finding someone with the skillset who is equally passionate can be a challange in today's world. 
      </div>
      <div class="blurb">
        Here at Darkliahos Creations we take our slogan seriously, we understand that an idea is precious and we will do our utmost to deliver your grand vision in front of your eyes. Keep reading to see how we will acheive this. 
      </div>
      <div class="tennet">
        <div class="title">
          Communication
        </div>
        <div>
          From our first consulation to the final delivery we will aim to make sure to give regular updates, have friendly chats and take you through the progress of turning your idea into something we are all proud of.
        </div>
      </div>
      <div class="tennet">
        <div class="title">
          Quality
        </div>
        <div>
          We pride ourselves with making sure we produce top quality code, using the latest and most stable technology out there. We are confident of our workmanship that is why we offer a complamentary warranty period of 3 months after delivery.
        </div>
      </div>
      <div class="tennet">
        <div class="title">
          Evoloution
        </div>
        <div>
          We know ideas can evolve as you see your vision take shape and we will accomodaite changes that may occur whilst development takes place.
        </div>
      </div>
            <div class="tennet">
        <div class="title">
          Affordability
        </div>
        <div>
          We know coding time can be expensive, we have some premade templates which we won't bill you for, we will make sure we can make turning your idea into reality without breaking the bank. We give an upfront estimate with our projects and break down costs, we aim to use the cheapest most reliable services. 
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style lang="less">
.home{
  background-image: url("../assets/alessandro-bianchi-_kdTyfnUFAc-unsplash.jpg");
    background-repeat: no-repeat;
  background-size: auto;
  .content{
    padding: 90px 245px 45px 45px;
    margin-left:450px;
    font-family: 'Barlow Condensed', sans-serif;
    .title{
      font-size: 36px;
    }
    .leading{
      font-size: 26px;
      padding: 15px 0;
    }
    .blurb{
      font-size: 20px;
      padding: 15px 0;
    }
    .tennet{
            padding: 15px 0;
      .title {
        font-size: 22px;
      }
      .blurb{
        font-size: 18px;
      }
    }
  }
}
</style>
