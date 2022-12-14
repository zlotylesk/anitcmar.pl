<script setup>
import { RouterLink, RouterView } from "vue-router";
import TopHeader from "@/components/TopHeader.vue";
import BottomFooter from "@/components/BottomFooter.vue";
</script>

<template>
  <top-header />
  <RouterView />
  <bottom-footer />
</template>

<style scoped>

</style>
