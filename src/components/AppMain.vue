<script>
   export default {
  name: 'AppMain',
}
</script>
<template>
  <main>
      <section id="main-section">
        <div id="jumbotron" class="d-flex align-items-center justify-content-center">
          <div class="row d-flex align-items-center justify-content-center">
            <div class="col-8">
              <div class="container-hand">
                <h1>Jr Full-Stack Web Developer <img src="../assets/img/handlogo.png" alt="hand img"></h1>
              </div>
              <p class="description-text">Hi, I'm Stefan Simerea. A passionate Jr Full-Stack Web Developer based in Pescara, Italy. 📍</p>
              <p class="d-flex align-items-center">
                <!-- Linkedin logo -->
                <a href="https://www.linkedin.com/in/stefan-simerea-929794291/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                </a>
                <!-- GitHub logo -->
                <a href="https://github.com/stefansimereaa" target="_blank" class="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </a>
              </p>
            </div>
            <div class="col-4">
              <div class="col-photo"></div>
            </div>
          </div>
        </div>
      </section>
  </main>
</template>
<style scoped lang="scss">
@import '../assets/scss/_vars.scss';
.col-photo {
  background-image: url(../assets/img/Stefan.jpg);
  width: 20rem;
  height: 20rem;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border: 3px solid $Black-Shade;
  margin-left: 0px;
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  position: relative;
  transition: all 1s ease-in-out;

  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }

    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
}

#main-section{
  background-color: #f9f9f9;
  padding-top: 80px;
}

.row{
  width: 1300px;
}
.container-hand {
  position: relative;

  img {
    width: 50px;
    position: absolute;
    top: 63%;
    margin-left: 10px;
  }
}

.description-text{
  font-size: 20px;
}

h1{
  color: #2d2e32;
  font-size: 70px;
  line-height: 1.2;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

a {
  color: black;
  transition: color 0.3s;

  &:hover {
    color: #147efb; 
  }
}
</style>