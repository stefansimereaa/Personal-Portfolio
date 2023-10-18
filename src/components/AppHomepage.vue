<script>

// Imported components
import AppHeader from './header/AppHeader.vue';
import AppMain from './main/AppMain.vue';
import AppFooter from './footer/AppFooter.vue';

// Exported component
  export default {
  name: 'AppHomepage',
  components: { AppHeader, AppMain, AppFooter },
  props: {
  isDarkMode: Boolean,
  isDarkText: Boolean,
  },
}
</script>

<template>
<!-- Component AppHeader -->
<AppHeader />
<!-- Component AppMain -->
<AppMain :isDarkMode="isDarkMode" :isDarkText="isDarkText"  />
<!-- Component AppFooter -->
<AppFooter :isDarkMode="isDarkMode" :isDarkText="isDarkText"/>
</template>

<style lang="scss" scoped>
  
</style>