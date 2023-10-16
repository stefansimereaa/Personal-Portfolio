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
}
</script>
<template>
  <main>
      <!-- Section Jumbotron -->
      <Jumbotron />
      <!-- Section About Me -->
      <Aboutme />
      <!-- Section Portfolio -->
      <Portfolio />
      <!-- Section Contact -->
      <Contact />
  </main>
</template>
<style scoped lang="scss"> 

</style>