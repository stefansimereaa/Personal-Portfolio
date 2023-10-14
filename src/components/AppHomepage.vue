<script>

// Imported components
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
import AppFooter from './AppFooter.vue';

// Exported component
  export default {
  name: 'AppHomepage',
  components: { AppHeader, AppMain, AppFooter },
}
</script>

<template> 
 <!-- Component AppHeader -->
 <AppHeader/>
 <!-- Component AppMain -->
 <AppMain/>
 <!-- Component AppFooter -->
 <AppFooter/>
</template>

<style scoped lang="scss">
  
</style>