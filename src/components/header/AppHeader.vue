<script>
  export default {
  name: 'AppHeader',
}
</script>

<template>
  <!-- Header -->
  <header>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid d-flex align-items-center links">
        <!-- Logo a sinistra -->
        <a href="#" class="navbar-brand d-flex align-items-center logo-container">
          <img src="../../assets/img/CodingLogo.png" alt="Logo Portfolio" class="logo">
          <h3 class="ms-1">Stefan.dev</h3>
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
li a {
  font-family: $Font;
  font-weight: bold;
  font-size: 17px;
  transition: color 0.3s;

  &:hover {
    color: #147efb; 
  }
}
</style>
