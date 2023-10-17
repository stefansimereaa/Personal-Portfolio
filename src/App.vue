<script>
import AppHomepage from './components/AppHomepage.vue';
export default{
    components: { AppHomepage }
}
</script>

<template>
    <!-- Routes for projects -->
    <div>
      <!-- Component AppHomepage -->
      <div class="div" v-if="!$route.path.includes('/discord')">
        <AppHomepage></AppHomepage>
      </div>
      <router-view v-if="$route.path.includes('/discord')"></router-view>
    </div>
  </template>
  

<style lang="scss">
@import "./assets/scss/_style.scss";
</style>
