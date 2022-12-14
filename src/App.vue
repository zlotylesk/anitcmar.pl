<script setup>
import { RouterLink, RouterView } from "vue-router";
import TopHeader from "@/components/TopHeader.vue";
import BottomFooter from "@/components/BottomFooter.vue";
import AsideMenu from "@/components/AsideMenu.vue";
import TopBreadcrumbs from "@/components/TopBreadcrumbs.vue";
</script>

<template>
  <top-header />
  <main>
    <top-breadcrumbs />
    <router-view />
    <aside-menu />
  </main>
  <bottom-footer />
</template>

<style scoped>
</style>
