<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isDarkMode: false,
      isGb: false,
      isItalian: true,
    };
  },
  computed: {
    navbarStyle() {
      return this.$store.state.isDarkMode
        ? {
            backgroundColor: "#181a1e",
            color: "white",
          }
        : {
            backgroundColor: "#fff",
          };
    },
    // Change class color text for Dark Mode
    isDarkText() {
      return this.$store.state.isDarkText;
    },
    // Change class active for toggle Dark Mode
    darkModeActive() {
      return this.$store.state.isDarkMode ? "active" : "";
    },
    // Change class active for toggle Language active
    languageActive() {
      return this.$store.state.isGb ? "active" : "";
    },
  },
  methods: {
    // Dark Mode Toggles
    // // Lightmode Toggle
    toggleLightMode() {
      if (this.$store.state.isDarkMode) {
        this.$store.commit("toggleDarkMode");
        this.isLightMode = true;
        this.isDarkMode = false;
      }
    },
    // Darkmode Toggle
    toggleDarkMode() {
      if (!this.$store.state.isDarkMode) {
        this.$store.commit("toggleDarkMode");
        this.isLightMode = false;
        this.isDarkMode = true;
      }
    },
    // Languages Toggle
    // Italian language Toggle
    toggleLanguageIt() {
      this.$store.commit("toggleLanguageItalian", true);
      this.$store.commit("toggleLanguageGb", false);
      this.isItalian = true; // Imposta la lingua su Italiano
    },
    // English language Toggle
    toggleLanguageGb() {
      this.$store.commit("toggleLanguageItalian", false);
      this.$store.commit("toggleLanguageGb", true);
      this.isItalian = false; // Imposta la lingua su Inglese
    },
  },
};
</script>

<template>
  <head>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="node_modules/flag-icon-css/css/flag-icon.css"
    />
  </head>
  <!-- Header -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-light" :style="navbarStyle" :class="{ 'dark-mode': $store.state.isDarkMode }">
      <div class="container-fluid d-flex align-items-center links">
        <!-- Logo a sinistra -->
        <a
          href="#"
          class="navbar-brand d-flex align-items-center logo-container"
        >
          <img
            src="../../assets/img/CodingLogo.png"
            alt="Logo Portfolio"
            class="logo"
          />
          <h3
            class="ms-2 my-2"
            :style="{ color: isDarkText ? '#fff' : 'inherit' }"
          >
            Stefan.dev
          </h3>
        </a>

        <div class="container-links">
          <!-- Links a destra -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <!-- Italian Version -->
                <a
                  class="nav-link"
                  href="#aboutme"
                  :class="{ 'd-none': !isItalian }"
                  >Informazioni</a
                >
                <!-- English Version -->
                <a
                  class="nav-link"
                  href="#aboutme"
                  :class="{ 'd-none': isItalian }"
                  >About</a
                >
              </li>
              <li class="nav-item">
                <!-- Italian Version -->
                <a
                  class="nav-link"
                  href="#portfolio"
                  :class="{ 'd-none': !isItalian }"
                  >Progetti</a
                >
                <!-- English Version -->
                <a
                  class="nav-link"
                  href="#portfolio"
                  :class="{ 'd-none': isItalian }"
                  >Projects</a
                >
              </li>
              <li class="nav-item">
                <!-- Italian Version -->
                <a
                  class="nav-link"
                  href="#contact"
                  :class="{ 'd-none': !isItalian }"
                  >Contatti</a
                >
                <!-- English Version -->
                <a
                  class="nav-link"
                  href="#contact"
                  :class="{ 'd-none': isItalian }"
                  >Contact</a
                >
              </li>

              <!-- Dark Mode Toggles -->
              <li class="dark-mode d-flex my-1 ms-2" :class="darkModeActive">
                <span
                  class="material-icons-sharp"
                  :class="{ active: !isDarkMode }"
                  @click="toggleLightMode"
                >
                  light_mode
                </span>
                <span
                  class="material-icons-sharp"
                  :class="{ active: isDarkMode }"
                  @click="toggleDarkMode"
                >
                  dark_mode
                </span>
              </li>

              <!-- Language Change Toggles -->
              <li class="dark-mode language-active my-1 ms-3" :class="languageActive">
                <!-- Italian Flag -->
                <span
                  class="flag-icon flag-icon-it"
                  style="width: 10px; padding: 12px"
                  :class="{ active: !languageActive }"
                  @click="toggleLanguageIt"
                ></span>
                <!-- English Flag -->
                <span
                  class="flag-icon flag-icon-gb"
                  style="width: 10px; padding: 12px"
                  :class="{ active: languageActive }"
                  @click="toggleLanguageGb"
                ></span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Navbar Toggle Button per schermi più piccoli -->
        <button 
          class="navbar-toggler" 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "../../assets/scss/_vars.scss";
// Regole CSS per testo bianco in modalità "dark"
// Barra di navigazione in modalità dark
.dark-mode .navbar-collapse {
  background-color: rgb(24, 26, 30);
}

.dark-mode {
  background-color: rgba(132, 139, 200, 0.18);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 1.6rem;
  width: 4.2rem;
  cursor: pointer;
  border-radius: 0.4rem;
}

.dark-mode span.active {
  background-color: #6c9bcf;
  color: white;
  border: 3px solid #6c9bcf;
  border-radius: 0.5rem;
}

.dark-mode span {
  font-size: 1.2rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

// Header Fonts
header {
  font-family: $Font;
  width: 100%;
  height: 100px;
}

.navbar {
  height: 100px;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  position: fixed;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
}

.links {
  width: 100%;
  margin-left: 100px;
}

.container-links {
  margin-right: 100px;
}

// Logo Style
.logo {
  max-width: 80px;
}

h3 {
  font-family: $Font;
  font-size: 1em;
  font-weight: bold;
}

// Links Navbar style
li a,
li a:visited {
  font-family: $Font;
  font-weight: bold;
  font-size: 17px;
  color: inherit;
  transition: color 0.3s;

  &:hover {
    color: #147efb;
  }
}
// Responsive for super small mobile devices
@media (min-width: 340px) {
  
  .container-links {
  margin-right: 0px;
  }
  .logo {
  max-width: 55px;
  }
  .links {
  margin-left: 0px;
  }
  /* Aggiungi la condizione per la larghezza e l'altezza solo quando la modalità scura è attiva */
.navbar-toggler {
  margin-right: 30px;
  background-color: white;

  /* Imposta larghezza e altezza solo in modalità scura */
  .dark-mode & {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
}

.navbar-toggler-icon{
  .dark-mode & {
    width: 1.5em;
    height: 1.5em;
  }

}
  .navbar-collapse {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
    text-align: center;
  }

  .navbar-nav {
    flex-direction: column;
    margin-top: 0px; 
    padding-bottom: 50px;
  }


  .dark-mode {
    position: absolute;
    top: 77%;
    left: 27%;
    border-radius: 0px;
  }
  .language-active{
    position: absolute;
    top: 77%;
    left: 48%;
  }
  .navbar{
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .navbar{
    width: 100%;
    position: fixed;
  }
}

// Responsive for super small mobile devices
@media (min-width: 360px) {
  
  .container-links {
  margin-right: 0px;
  }
  .logo {
  max-width: 55px;
  }
  .links {
  margin-left: 0px;
  }
  /* Aggiungi la condizione per la larghezza e l'altezza solo quando la modalità scura è attiva */
.navbar-toggler {
  margin-right: 30px;
  background-color: white;

  /* Imposta larghezza e altezza solo in modalità scura */
  .dark-mode & {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
}

.navbar-toggler-icon{
  .dark-mode & {
    width: 1.5em;
    height: 1.5em;
  }

}
  .navbar-collapse {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
    text-align: center;
  }

  .navbar-nav {
    flex-direction: column;
    margin-top: 0px; 
    padding-bottom: 50px;
  }


  .dark-mode {
    position: absolute;
    top: 77%;
    left: 27%;
    border-radius: 0px;
  }
  .language-active{
    position: absolute;
    top: 77%;
    left: 48%;
  }
  .navbar{
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .navbar{
    width: 100%;
    position: fixed;
  }
}
// Responsive for super small mobile devices
@media (min-width: 370px) {
  
  .container-links {
  margin-right: 0px;
  }
  .logo {
  max-width: 55px;
  }
  .links {
  margin-left: 0px;
  }
  /* Aggiungi la condizione per la larghezza e l'altezza solo quando la modalità scura è attiva */
.navbar-toggler {
  margin-right: 30px;
  background-color: white;

  /* Imposta larghezza e altezza solo in modalità scura */
  .dark-mode & {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
}

.navbar-toggler-icon{
  .dark-mode & {
    width: 1.5em;
    height: 1.5em;
  }

}
  .navbar-collapse {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
    text-align: center;
  }

  .navbar-nav {
    flex-direction: column;
    margin-top: 0px; 
    padding-bottom: 50px;
  }


  .dark-mode {
    position: absolute;
    top: 77%;
    left: 27%;
    border-radius: 0px;
  }
  .language-active{
    position: absolute;
    top: 77%;
    left: 48%;
  }
  .navbar{
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .navbar{
    width: 100%;
    position: fixed;
  }
}

// Responsive for super small mobile devices
@media (min-width: 380px) {
  
  .container-links {
  margin-right: 0px;
  }
  .logo {
  max-width: 55px;
  }
  .links {
  margin-left: 0px;
  }
  /* Aggiungi la condizione per la larghezza e l'altezza solo quando la modalità scura è attiva */
.navbar-toggler {
  margin-right: 30px;
  background-color: white;

  /* Imposta larghezza e altezza solo in modalità scura */
  .dark-mode & {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
}

.navbar-toggler-icon{
  .dark-mode & {
    width: 1.5em;
    height: 1.5em;
  }

}
  .navbar-collapse {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
    text-align: center;
  }

  .navbar-nav {
    flex-direction: column;
    margin-top: 0px; 
    padding-bottom: 50px;
  }


  .dark-mode {
    position: absolute;
    top: 77%;
    left: 27%;
    border-radius: 0px;
  }
  .language-active{
    position: absolute;
    top: 77%;
    left: 48%;
  }
  .navbar{
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .navbar{
    width: 100%;
    position: fixed;
  }
}


// Responsive for small mobile devices
@media (min-width: 410px) {
   
  .container-links {
  margin-right: 0px;
  }
  .logo {
  max-width: 55px;
  }
  .links {
  margin-left: 0px;
  }
  /* Aggiungi la condizione per la larghezza e l'altezza solo quando la modalità scura è attiva */
.navbar-toggler {
  margin-right: 30px;
  background-color: white;

  /* Imposta larghezza e altezza solo in modalità scura */
  .dark-mode & {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  }
}

.navbar-toggler-icon{
  .dark-mode & {
    width: 1.5em;
    height: 1.5em;
  }

}
  .navbar-collapse {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
    text-align: center;
  }

  .navbar-nav {
    flex-direction: column;
    margin-top: 0px; 
    padding-bottom: 50px;
  }


  .dark-mode {
    position: absolute;
    top: 77%;
    left: 27%;
    border-radius: 0px;
  }
  .language-active{
    position: absolute;
    top: 77%;
    left: 48%;
  }
  .navbar{
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .navbar{
    width: 100%;
    position: fixed;
  }

}

// Responsive for mobile devices
@media (min-width: 576px) {


  .dark-mode {
    position: absolute;
    top: 77%;
    left: 33%;
    border-radius: 0px;
  }


  .language-active{
    position: absolute;
    top: 77%;
    left: 50%;
  }
  .navbar{
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .navbar{
    width: 100%;
    position: fixed;
  }

}

// Responsive for tablet
@media (min-width: 768px) {
  .logo {
  max-width: 80px;
  margin-left: 30px
  }
  .dark-mode {
    position: absolute;
    top: 77%;
    left: 37%;
    border-radius: 0px;
  }


  .language-active{
    position: absolute;
    top: 77%;
    left: 51%;
  }
  .navbar{
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .navbar{
    width: 100%;
    position: fixed;
  }
}

// Responsive for notebooks
@media (min-width: 992px) {
  .logo {
  max-width: 80px;
  margin-left: 30px
  }
  .navbar-collapse {
    position: relative;
    top: 0;
    width: 550px;
    background-color: #fff;
    z-index: 1;
    text-align: center;
  }

  .dark-mode {
    position: absolute;
    top: 10%;
    left: 63%;
    border-radius: 0px;
  }


  .language-active{
    position: absolute;
    top: 10%;
    left: 79%;
  }
  .navbar-nav{
    padding-bottom: 0px;
  }
  .navbar-collapse{
    box-shadow: none;
  }
  .navbar{
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .navbar{
    width: 100%;
    position: fixed;
  }
}

// Responsive for desktops
@media (min-width: 1400px) {
  .logo {
  max-width: 80px;
  margin-left: 30px
  }
  .navbar-collapse {
    position: relative;
    top: 0;
    width: 550px;
    background-color: #fff;
    z-index: 1;
    text-align: center;
  }

  .dark-mode {
    position: absolute;
    top: 10%;
    left: 63%;
    border-radius: 0px;
  }


  .language-active{
    position: absolute;
    top: 10%;
    left: 79%;
  }
  .navbar-nav{
    padding-bottom: 0px;
  }
  .navbar-collapse{
    box-shadow: none;
  }
  .navbar{
    position: absolute;
    top: 0%;
    left: 0%;
  }
  .navbar{
    width: 100%;
    position: fixed;
  }
}
</style>
