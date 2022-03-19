<template>
  <div class="home">
    <h4>
      Hi, I am Sohail, I am a freelance full stack developer based in the UK,
      highly expirenced in developing bespoke websites, applications and
      anything in between.
    </h4>
    <Button>Hire me</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TweetDeck from "@/components/TweetDeck.vue"; // @ is an alias to /src

@Component({
  components: {
    TweetDeck
  }
})
export default class Home extends Vue {}
</script>

<style lang="less">
.home {
  h4 {
    margin: 20px;
  }
  iframe {
    float: right;
  }

  button{
        padding: 20px;
    background-color: transparent;
    color: #fff;
    font-size: 20px;
    border: #fff 1px solid;
  }
}
</style>
