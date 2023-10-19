<script>
// Imported components
import Jumbotron from './sections/Jumbotron.vue';
import Aboutme from './sections/Aboutme.vue';
import Portfolio from './sections/Portfolio.vue';
import Contact from './sections/Contact.vue';

// Exported component
  export default {
  name: 'AppMain',
  components: { Jumbotron, Aboutme, Portfolio, Contact },
  props: {
  isItalian: Boolean,
  isGb: Boolean,
  isDarkMode: Boolean,
  isDarkText: Boolean,
  },
}
</script>
<template>
  <main>
      <!-- Section Jumbotron -->
      <Jumbotron 
      :isDarkMode="isDarkMode" 
      :isDarkText="isDarkText"
      :isItalian="isItalian" 
      :isGb="isGb" 
      /> 
      <!-- Section About Me -->
      <Aboutme 
      :isDarkMode="isDarkMode" 
      :isDarkText="isDarkText" 
      :isItalian="isItalian" 
      :isGb="isGb"
      />
      <!-- Section Portfolio -->
      <Portfolio 
      :isDarkMode="isDarkMode" 
      :isDarkText="isDarkText"
      :isItalian="isItalian" 
      :isGb="isGb"
      />
      <!-- Section Contact -->
      <Contact 
      :isDarkMode="isDarkMode" 
      :isDarkText="isDarkText"
      :isItalian="isItalian" 
      :isGb="isGb"
      />
  </main>
</template>
<style lang="scss" scoped> 

</style>