<template>
  <div class="home">
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
.home{
  background-image: url("../assets/alessandro-bianchi-_kdTyfnUFAc-unsplash.png");
    background-repeat: no-repeat;
  background-size: auto;
  iframe{
    float:right
  }
}
</style>
