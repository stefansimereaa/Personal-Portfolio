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
  isItalian: Boolean,
  isGb: Boolean, 
  isDarkMode: Boolean,
  isDarkText: Boolean,
  },
}
</script>

<template>
<!-- Component AppHeader -->
<AppHeader />
<!-- Component AppMain -->
<AppMain 
:isDarkMode="isDarkMode" 
:isDarkText="isDarkText" 
:isItalian="isItalian"
:isGb="isGb" 
/>
<!-- Component AppFooter -->
<AppFooter 
:isDarkMode="isDarkMode" 
:isDarkText="isDarkText" 
:isItalian="isItalian"
:isGb="isGb"
/>
</template>

<style lang="scss" scoped>
  
</style>