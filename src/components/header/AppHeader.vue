<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isDarkMode: false,
      isDarkText: false
    };
  },
  computed: {
    navbarStyle() {
      if (this.isDarkMode) {
        // Imposta il testo in modalità scura
        this.isDarkText = true;
        return {
          backgroundColor: '#181a1e',
          color: '#fff',
          boxShadow: '0 0 10px rgba(255,255,255,.5)',
        };
      } else {
        // Imposta il testo in modalità chiara
        this.isDarkText = false; 
        return {
          backgroundColor: '#fff',
        };
      }
    },
    darkModeActive() {
      return this.isDarkMode ? 'active' : '';
    },
  },
  methods: {
    toggleLightMode() {
      this.isDarkMode = false;
    },
    toggleDarkMode() {
      this.isDarkMode = true;
    }
  }
};
</script>


<template>
  <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet">
  </head>
  <!-- Header -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-light" :style="navbarStyle">
      <div class="container-fluid d-flex align-items-center links">
        <!-- Logo a sinistra -->
        <a href="#" class="navbar-brand d-flex align-items-center logo-container">
          <img src="../../assets/img/CodingLogo.png" alt="Logo Portfolio" class="logo">
          <h3 class="ms-1" :style="{ color: isDarkText ? '#fff' : 'inherit' }">Stefan.dev</h3>
        </a>

        <div class="container-links">
          <!-- Links a destra -->
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aboutme">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#portfolio">Projects</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
              <li class="dark-mode" :class="darkModeActive">
                <span class="material-icons-sharp " :class="{ active: !isDarkMode }" @click="toggleLightMode"> light_mode </span>
                <span class="material-icons-sharp " :class="{ active: isDarkMode }" @click="toggleDarkMode"> dark_mode </span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Navbar Toggle Button per schermi più piccoli -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </header>
</template>


<style scoped lang="scss">
@import '../../assets/scss/_vars.scss';
// Regole CSS per testo bianco in modalità "dark"


.dark-mode{
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
    background-color: #6C9BCF;
    color: white;
    border-radius: 0.4rem;
}

.dark-mode span{
  font-size: 1.2rem;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}


.dark-mode-variables {
    --color-background: #181a1e,
    --color-white: #202528,
    --color-dark: #edeffd,
    --color-dark-variant: #a3bdcc,
    --color-light: rgba(0, 0, 0, 0.4),
    --box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18)
};


// Header Fonts
header{
  font-family: $Font ;
  width: 100%;
  height: 100px;
}
.navbar {
  height: 100px;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  position: fixed;
  box-shadow: 0 0 10px rgba(0,0,0,.09);
}

.links{
  width: 100%;
  margin-left: 100px;
}
.container-links{
  margin-right: 100px;
}

// Logo Style
.logo {
  max-width: 80px;
}

h3{
  font-family: $Font ;
  font-size: 1em;
  font-weight: bold;
}

// Links Navbar style
li a, li a:visited {
  font-family: $Font;
  font-weight: bold;
  font-size: 17px;
  color: inherit;
  transition: color 0.3s;

  &:hover {
    color: #147efb; 
  }
}
</style>
