<script>
  // Exported component
export default {
  name: 'Contact',
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
  <!-- Section Contact -->
  <section id="contact" :style="navbarStyle">
    <div class="container">
        <!-- Contact Title -->
        <div class="contact-title">
          <!-- Italian Version -->
          <p :style="{ color: '#147efb' }" :class="{ 'd-none': !$store.state.isItalian }">CONTATTI</p>
          <!-- English Version -->
          <p :style="{ color: '#147efb' }" :class="{ 'd-none': $store.state.isItalian }">CONTACT</p>

          <!-- Italian Version -->
          <h3 :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">Non essere timido! Contattami! 👇</h3>
          <!-- English Version -->
          <h3 :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">Don't be shy! Hit me up! 👇</h3>
        </div>
        <!-- Contact Icons -->
        <div class="contact-icons d-flex">
          <!-- Location INFO -->
          <div class="contact-location d-flex align-items-center me-5">
            <!-- Icon Location -->
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>
            </span>
            <!-- Info Location -->
            <div class="contact-info ms-3">
              <!-- Italian Version -->
              <h3 :class="{ 'd-none': !$store.state.isItalian }">Località</h3>
              <!-- English Version -->
              <h3 :class="{ 'd-none': $store.state.isItalian }">Location</h3>
              <!-- Italian Version -->
              <a href="https://maps.app.goo.gl/Ve3CVBgDRHdb5mYAA" target="_blank" class="color-hover" :class="{ 'd-none': !$store.state.isItalian }">Pescara, Italia</a>
              <!-- English Version -->
              <a href="https://maps.app.goo.gl/Ve3CVBgDRHdb5mYAA" target="_blank" class="color-hover" :class="{ 'd-none': $store.state.isItalian }">Pescara, Italy</a>
            </div>
          </div>
          <!-- Email INFO -->
          <div class="contact-email d-flex align-items-center ">
            <!-- Icon Email -->
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
            </span>
            <!-- Info Email -->
            <div class="contact-info ms-3">
              <!-- Italian Version -->
              <h3 :class="{ 'd-none': !$store.state.isItalian }">Email</h3>
              <!-- English Version -->
              <h3 :class="{ 'd-none': $store.state.isItalian }">Mail</h3>
              <a class="color-hover" target="_blank" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=stefanosimerea15@gmail.com">stefanosimerea15@gmail.com</a>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '../../../assets/scss/vars';

// Section contact style
#contact{
  padding: 7rem 0;
}

// contact title style
.contact-title{
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
.contact-title h3{
  color: #2d2e32;
  font-size: 1.7rem;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 50px;
}

// Contact icons style
span{
  color: #147efb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
}
.contact-icons h3{
  font-size: 1.2rem;
}

.contact-info, p, h3{
  margin: 0px 0px;
  padding: 0px 0px;
}

.contact-info a{
  text-decoration: none;
  color: #767676;
}

.color-hover:hover{
  color: #147efb;
  cursor: pointer;
}



// Responsive for small mobile devices 
@media (max-width: 576px) {
  .contact-email{
    margin-top: 20px;
  }
  .contact-icons{
    display: flex;
    flex-direction: column;
  }
}


// Responsive for mobile devices 
@media (min-width: 576px) {
  .contact-email{
    margin-top: 20px;
  }
  .contact-icons{
    display: flex;
    flex-direction: column;
  }
}

// Responsive for tablet
@media (min-width: 768px) {

}

// Responsive for notebooks
@media (min-width: 992px) {
  
  .contact-email{
    margin-top: 0px;
  }
  .contact-icons{
    display: flex;
    flex-direction: row;
  }

}
</style>