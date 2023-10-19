<script>
import AppHomepage from './components/AppHomepage.vue';

export default {
  components: { AppHomepage },
  props: {
  isItalian: Boolean,
  isGb: Boolean,  
  isDarkMode: Boolean,
  isDarkText: Boolean,
  },
};
</script>


<template>
    <!-- Routes for projects -->
    <div>
      <!-- Component AppHomepage -->
      <div class="div" v-if="!$route.path.includes('/discord')">
        <AppHomepage/>
      </div>
      <router-view v-if="$route.path.includes('/discord')"></router-view>
    </div>
</template>


<style lang="scss">
// Scrollbar web design
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #8e8e8e;
  border-radius: 20px;
}

::-webkit-scrollbar-track {
  background-color: #fff;
  border-radius: 20px;
}

</style>
