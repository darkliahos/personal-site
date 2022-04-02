<template>
  <div class="home">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=0">
        <h2>
          Hi, I am Sohail, I am a freelance full stack developer based in the
          UK, highly expirenced in developing bespoke websites, applications and
          anything in between.
        </h2>
        <b-button variant="warning">Hire me</b-button>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=1033">
        <h2>
          Take a look at some of the services that I can offer to any of your
          projects or ideas.
        </h2>
        <b-button variant="warning">Services</b-button></b-carousel-slide
      >

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
        <h2>
          Not sure if I have expirience you are looking for? Why not browse my
          past projects
        </h2>
        <b-button variant="warning">Past Projects</b-button></b-carousel-slide
      >
    </b-carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TweetDeck from "@/components/TweetDeck.vue"; // @ is an alias to /src

@Component({
  components: {
    TweetDeck,
  },
})
export default class Home extends Vue {}
</script>

<style lang="less">
.home {
  h4 {
    margin: 20px;
    font-family: "Barlow Condensed", sans-serif;
  }
  h2 {
    font-family: "Barlow Condensed", sans-serif;
  }
  iframe {
    float: right;
  }

  button {
    font-family: "Barlow Condensed", sans-serif;
  }
}
</style>
