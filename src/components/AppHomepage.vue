<script>

// Imported components
import AppHeader from './AppHeader.vue';
import AppMain from './AppMain.vue';
import AppFooter from './AppFooter.vue';

// Exported component
  export default {
  name: 'Homepage',
  components: { AppHeader, AppMain, AppFooter },
}
</script>

<template> 
 <AppHeader/>
 <AppMain/>
 <AppFooter/>
</template>

<style>
  
</style>