<template>
  <div class="Musings">
    <TopBar/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TopBar from "@/components/TopBar.vue"; // @ is an alias to /src

@Component({
  components: {
    TopBar
  }
})
export default class Musings extends Vue {}
</script>
