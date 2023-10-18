<script>

// Imported components
import AppHeader from './header/AppHeader.vue';
import AppMain from './main/AppMain.vue';
import AppFooter from './footer/AppFooter.vue';

// Exported component
  export default {
  name: 'AppHomepage',
  components: { AppHeader, AppMain, AppFooter },
}
</script>

<template>
<!-- Component AppHeader -->
<AppHeader />
<!-- Component AppMain -->
<AppMain />
<!-- Component AppFooter -->
<AppFooter/>
</template>

<style lang="scss" scoped>
  
</style>