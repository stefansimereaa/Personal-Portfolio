<script>
export default {
  name: 'Jumbotron',
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
    <!-- Section Jumbotron -->
    <section id="jumbotron-section" :style="[$store.state.isDarkMode ? navbarStyle : { 'background-color': '#f9f9f9' }, $store.state.isDarkMode ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">
        <div id="jumbotron" class="d-flex align-items-center justify-content-center">
          <div class="row d-flex align-items-center justify-content-center" id="container-jumbo">
            <!-- Profile Description -->
            <div class="col-8" >
              <div class="container-hand">
                <h1 :style="{ color: isDarkText ? '#fff' : 'inherit' }">Jr Full-Stack Web Developer <img src="../../../assets/img/handlogo.png" alt="hand img"></h1>
              </div>


              <!-- Italian Version -->
              <p :class="{ 'd-none': !$store.state.isItalian }" class="description-text">
                Ciao, sono Stefan Simerea, uno sviluppatore web Jr Full-Stack con sede a Pescara, Italia. 📍
              </p>
              <!-- English Version -->
              <p :class="{ 'd-none': $store.state.isItalian }" class="description-text">Hi, I'm Stefan Simerea. A passionate Jr Full-Stack Web Developer based in Pescara, Italy. 📍</p>

              <p class="d-flex align-items-center" :style="{ color: isDarkText ? '#fff' : 'inherit' }" >
                <!-- Linkedin logo -->
                <a href="https://www.linkedin.com/in/stefan-simerea-929794291/" target="_blank" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                </a>
                <!-- GitHub logo -->
                <a href="https://github.com/stefansimereaa" target="_blank" class="px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </a>
              </p>
            </div>
            <!-- Photo col -->
            <div class="col-4">
              <div class="col-photo"></div>
            </div>
            <!-- Technologies row -->

            <div id="technologies" class="col mt-5">
              <div class="container p-0" id="container-tech">

                <!-- Italian Version -->
                <p class="text-technologies" :class="{ 'd-none': !$store.state.isItalian }">Tecnologie Utilizzate |</p>
                <!-- English Version -->
                <p class="text-technologies" :class="{ 'd-none': $store.state.isItalian }">Tech Stack |</p>
                
                <div class="technologies">
                  <ul class="d-flex align-items-center">
                    <!-- Html -->
                    <li><img src="../../../assets/img/technologies/html.svg" alt="Html 5"></li>
                    <!-- Css -->
                    <li><img src="../../../assets/img/technologies/css-3.svg" alt="Css 3"></li>
                    <!-- Bootstrap -->
                    <li><img src="../../../assets/img/technologies/bootstrap-5-1.svg" alt="Bootstrap 5"></li>
                    <!-- Javascript -->
                    <li><img src="../../../assets/img/technologies/javascript.svg" alt="Javascript"></li>
                    <!-- Vuejs -->
                    <li><img src="../../../assets/img/technologies/vue-js.svg" alt="VueJs"></li>
                    <!-- Sass -->
                    <li><img src="../../../assets/img/technologies/sass.svg" alt="Sass"></li>
                    <!-- Php -->
                    <li><img src="../../../assets/img/technologies/php.svg" alt="Php"></li>
                    <!-- MySql -->
                    <li><img src="../../../assets/img/technologies/mysql.svg" alt="MySql"></li>
                    <!-- Laravel -->
                    <li><img src="../../../assets/img/technologies/laravel.svg" alt="Laravel"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
<style scoped lang="scss">
@import '../../../assets/scss/vars';

// Jumbotron style
#jumbotron-section{
  background-color: #f9f9f9;
  padding-top: 80px;
}

.row{
  width: 1300px;
  margin-bottom: 150px;
}
// Hand style img
.container-hand {
  position: relative;

  img {
    width: 50px;
    position: absolute;
    top: 63%;
    margin-left: 10px;
  }
}

// Photo profile style and effects
.col-photo {
  background-image: url(../../../assets/img/Stefan.jpg);
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

.description-text{
  font-size: 20px;
}

h1{
  color: #2d2e32;
  font-size: 70px;
  line-height: 1.2;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-weight: bold;
}

.text-technologies{
  font-weight: 600;
  font-size: 20px;
}

// Hover effects tag a
p a, p a:visited {
  font-family: $Font;
  font-weight: bold;
  font-size: 17px;
  color: inherit;
  transition: color 0.3s;

  &:hover {
    color: #147efb; 
  }
}





// Technologies effects
.technologies ul li img{
  transition: all .3s ease-in-out;
}
.technologies ul li img:hover{
  transform: translateY(-1rem);
}

ul li img{
  max-width: 38px;
  margin-left: 15px;
}

ul{
  display: flex;
  align-items: center;
  list-style-type: none;
  width: 500px;
}



// Responsive for super small mobile devices 
@media (max-width: 370px) {
  h1{
  color: #2d2e32;
  font-size: 55px;
  line-height: 1.2;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  }

  #container-jumbo{
    display: flex;
    flex-direction: column;
  }
  .col-8{
    width: 360px;
  }

  // Hand style img
  .container-hand {
    position: relative;

    img {
      width: 50px;
      position: absolute;
      top: 73%;
      margin-left: 10px;
    }
  }

  // Photo profile style and effects
  .col-photo {
    background-image: url(../../../assets/img/Stefan.jpg);
    width: 20rem;
    height: 20rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border: 3px solid $Black-Shade;
    margin-left: -115px;
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

  .text-technologies{
    margin-left: 40px;
  }

  ul{
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  width: 300px;
  }

  ul li img{
  max-width: 37px;
  margin-bottom: 20px;
  margin-left: 15px;
  }
  .row{
  width: 330px;
  margin-bottom: 150px;
  }
}

// Responsive for small mobile devices 
@media (min-width: 410px) {
  h1{
  color: #2d2e32;
  font-size: 55px;
  line-height: 1.2;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  }

  #container-jumbo{
    display: flex;
    flex-direction: column;
  }
  .col-8{
    width: 360px;
  }

  // Hand style img
  .container-hand {
    position: relative;

    img {
      width: 50px;
      position: absolute;
      top: 73%;
      margin-left: 10px;
    }
  }

  // Photo profile style and effects
  .col-photo {
    background-image: url(../../../assets/img/Stefan.jpg);
    width: 20rem;
    height: 20rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border: 3px solid $Black-Shade;
    margin-left: -105px;
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

  .text-technologies{
    margin-left: 40px;
  }

  ul{
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  width: 300px;
  }

  ul li img{
  max-width: 37px;
  margin-bottom: 20px;
  margin-left: 15px;
  }
  .row{
  width: 410px;
  margin-bottom: 150px;
  }
}

// Responsive for mobile devices 
@media (min-width: 576px) {
  h1{
  color: #2d2e32;
  font-size: 55px;
  line-height: 1.2;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  }

  #container-jumbo{
    display: flex;
    flex-direction: column;
  }
  .col-8{
    width: 550px;
  }

  // Hand style img
  .container-hand {
    position: relative;

    img {
      width: 50px;
      position: absolute;
      top: 60%;
      margin-left: 10px;
    }
  }

  // Photo profile style and effects
  .col-photo {
    background-image: url(../../../assets/img/Stefan.jpg);
    width: 20rem;
    height: 20rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border: 3px solid $Black-Shade;
    margin-left: -80px;
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

  .text-technologies{
    margin-left: 10px;
  }

  ul{
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  width: 300px;
  }

  ul li img{
  max-width: 37px;
  margin-bottom: 20px;
  margin-left: 15px;
  }
  #container-tech{
    display: flex;
  }
  .row{
  width: 570px;
  margin-bottom: 150px;
  }
}

// Responsive for tablet
@media (min-width: 768px) {
  h1{
  color: #2d2e32;
  font-size: 55px;
  line-height: 1.2;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  }

  #container-jumbo{
    display: flex;
    flex-direction: column;
  }
  .col-8{
    width: 725px;
  }

  // Hand style img
  .container-hand {
    position: relative;

    img {
      width: 50px;
      position: absolute;
      top: 60%;
      margin-left: 10px;
    }
  }

  // Photo profile style and effects
  .col-photo {
    background-image: url(../../../assets/img/Stefan.jpg);
    width: 20rem;
    height: 20rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border: 3px solid $Black-Shade;
    margin-left: -50px;
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

  .text-technologies{
    margin-left: 10px;
  }

  ul{
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  width: 500px;
  }

  ul li img{
  max-width: 35px;
  margin-bottom: 20px;
  margin-left: 15px;
  }
  #container-tech{
    display: flex;
  }
  .row{
  width: 760px;
  margin-bottom: 150px;
  }
}

// Responsive for notebooks
@media (min-width: 992px) {  
  h1{
  color: #2d2e32;
  font-size: 55px;
  line-height: 1.2;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  }

  #container-jumbo{
    display: flex;
    flex-direction: row;
  }
  .col-8{
    width: 620px;
  }

  // Hand style img
  .container-hand {
    position: relative;

    img {
      width: 50px;
      position: absolute;
      top: 60%;
      margin-left: 10px;
    }
  }

  // Photo profile style and effects
  .col-photo {
    background-image: url(../../../assets/img/Stefan.jpg);
    width: 20rem;
    height: 20rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-left: -10px;
    border: 3px solid $Black-Shade;
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

  .text-technologies{
    margin-left: 10px;
  }

  ul{
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  width: 500px;
  }

  ul li img{
  max-width: 35px;
  margin-bottom: 20px;
  margin-left: 15px;
  }
  #container-tech{
    display: flex;
  }

  .row{
  width: 992px;
  margin-bottom: 150px;
  }
}

// Responsive for desktops
@media (min-width: 1400px) {  

  h1{
  color: #2d2e32;
  font-size: 55px;
  line-height: 1.2;
  margin-bottom: 2rem;
  margin-top: 2rem;
  font-weight: bold;
  }

  #container-jumbo{
    display: flex;
    flex-direction: row;
  }
  .col-8{
    width: 850px;
  }

  // Hand style img
  .container-hand {
    position: relative;

    img {
      width: 50px;
      position: absolute;
      top: 19%;
      margin-left: 10px;
    }
  }

  // Photo profile style and effects
  .col-photo {
    background-image: url(../../../assets/img/Stefan.jpg);
    width: 20rem;
    height: 20rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    margin-left: 60px;
    border: 3px solid $Black-Shade;
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

  .text-technologies{
    margin-left: 10px;
  }

  ul{
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  width: 500px;
  }

  ul li img{
  max-width: 35px;
  margin-bottom: 20px;
  margin-left: 15px;
  }
  #container-tech{
    display: flex;
  }

  .row{
  width: 1400px;
  margin-bottom: 150px;
  }

}
</style>