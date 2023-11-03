<script>
  export default {
  name: 'AppFooter',
  props: {
  isItalian: Boolean,
  isGb: Boolean,
  isDarkMode: Boolean,
  isDarkText: Boolean,
  },
  computed: {
    navbarStyle() {
      return this.$store.state.isDarkMode
        ? {
            backgroundColor: '#181a1e',
            color: '#fff',
          }
        : {
            backgroundColor: '#fff',
          };
    },
  },
}
</script>
<template>
  <footer class="py-5" :style="[$store.state.isDarkMode ? navbarStyle : { 'background-color': '#2D2E32' }]">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-between">
        <!-- Logos Copyrights -->
        <div class="col">
          <!-- Italian Version -->
          <h5 class="text-copyright my-3" :class="{ 'd-none': !$store.state.isItalian }">Copyright © 2023. Tutti i diritti sono riservati</h5>
          <!-- English Version -->
          <h5 class="text-copyright my-3" :class="{ 'd-none': $store.state.isItalian }">Copyright © 2023. All rights are reserved</h5>
        </div>
        <!-- Logos Footer -->
        <div class="col-2 d-flex align-items-center">
            <!-- Linkedin logo -->
            <a href="https://www.linkedin.com/in/stefan-simerea-929794291/" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
            </a>
            <!-- GitHub logo -->
            <a href="https://github.com/stefansimereaa" target="_blank" class="px-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
            </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped lang="scss">
@import '../../assets/scss/_vars.scss';

footer{
  background-color: #2D2E32;
  color: white;
  height: 150px;
}

.text-copyright{
  font-size: 20px;
  margin-right: 20px;
}


.col-2 a {
  color: white;
  transition: color 0.3s;
  
  &:hover {
    color: #147efb; 
  }
  .text-copyright{
    margin: 0px;
  }
}

// Responsive for small mobile devices 
@media (max-width: 576px) {
  h5{
    margin-left: 20px;
    font-size: 17;
  }
  .col-2{
    margin-right: 40px;
  }
}


// Responsive for mobile 
@media (min-width: 576px) {
  h5{
    font-size: 16px;
  }
  .col-2{
    margin-right: 50px;
  }
}


// Responsive for tablet
@media (min-width: 768px) {
  .col-2{
    margin-right: -40px;
  }
}

// Responsive for notebooks
@media (min-width: 992x) {

  .col-2{
    margin-right: 20px;
  }
}
</style>