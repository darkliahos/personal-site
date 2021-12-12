<template>
  <a
    class="twitter-timeline"
    href="https://twitter.com/darkliahos?ref_src=twsrc%5Etfw"
    >Tweets by darkliahos</a
  >
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TweetDeck extends Vue {
  /**
   *
   */
  constructor() {
    super();
    const plugin = document.createElement("script");
    plugin.setAttribute("src", "https://platform.twitter.com/widgets.js");
    plugin.async = true;
    document.head.appendChild(plugin);
  }
}
</script>

<style lang="less">
.timeline-Widget {
  width: 476px;
  margin-left: 40px;
}
</style>
