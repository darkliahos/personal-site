<template>
  <div class="Musings">
    <TweetDeck/>
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
export default class Musings extends Vue {}
</script>
