<script>
  export default {
  name: 'AppHeader',
}
</script>

<template>
  <!-- Header -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container d-flex">

        <div class="container">
          <!-- Logo a sinistra -->
          <a href="#" class="navbar-brand d-flex align-items-center">
            <img src="../assets/img/CodingLogo.png" alt="Logo Portfolio" class="logo">
            <h3 class="ms-1">Stefan.dev</h3>
          </a>
        </div>

        <!-- Navbar Toggle Button per schermi più piccoli -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Links a destra -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import '../assets/scss/_vars.scss';

// Header Fonts
header{
  font-family: $Font ;
}

.navbar {
  height: 100px;
  
}

.logo {
  max-width: 100px;
}

a{
  font-family: $Font ;
  font-weight: 600;
}
</style>
