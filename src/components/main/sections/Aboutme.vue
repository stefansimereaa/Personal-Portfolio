<script>
  // Exported component
export default {
  name: 'Aboutme',
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
  <section id="aboutme" :style="navbarStyle">
    <div class="container">
      <div class="row d-flex align-items-center justify-content-center">
        <!-- Photo col -->
        <div class="col">
          <div class="container-photos">
            <!-- Pc Photo -->
            <img src="../../../assets/img/coding.gif" alt="pc about me" id="first-img">
            <!-- Photo Avatar -->
            <img src="../../../assets/img/gifpc.png" alt="avatar photo" id="second-img">
            <span>
              <!-- Photo text -->
              <img src="../../../assets/img/JuniorWebDeveloper.png" alt="" id="third-img">
            </span>
          </div>
        </div>
        <!-- Description col -->
        <div class="col">
          <!-- Container Description -->
          <div class="container-description">
            <!-- Italian Version -->
            <h3 :class="{ 'd-none': !$store.state.isItalian }">Chi Sono</h3>
            <!-- English Version -->
            <h3 :class="{ 'd-none': $store.state.isItalian }">About Me</h3>

            <!-- Italian Version -->
            <h4 :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">Un appassionato sviluppatore Jr Full Stack con sede a Pescara, Italia. 📍</h4>
            <!-- English Version -->
            <h4 :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">A dedicated Jr. Full Stack Web Developer based in Pescara, Italy 📍</h4>


            <!-- Italian Version -->
            <p class="text-justify"  :class="{ 'd-none': !$store.state.isItalian }" :style="{ color: isDarkText ? '#fff' : 'inherit' }">
              Sono pronto ad affrontare nuove sfide e desideroso delle dinamiche in continua evoluzione del mio mondo. Il mio percorso ha inizio presso l'ITS, un programma di formazione scolastica quinquennale con un forte orientamento all'informatica, dove ho approfondito varie lingue di programmazione. Nel quinto anno, ho creato un sito web dedicato alla sicurezza informatica utilizzando WordPress. La mia passione per la programmazione mi ha spinto a cercare l'autoformazione nel mio tempo libero. Questa costante ricerca di conoscenza mi ha portato alla mia attuale formazione presso Boolean, dove ho sviluppato competenze sia nel front-end che nel back-end, e sto lavorando duramente per diventare un Junior Full Stack Developer. Sono determinato a rimanere aggiornato e contribuire attivamente alla crescita del campo della programmazione.
            </p>
            <!-- English Version -->
            <p class="text-justify" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">I am ready to take on new challenges and eager for the constantly evolving dynamics of my world. My journey begins at ITS, a five-year school training program with a strong emphasis on computer science, where I delved into various programming languages. In the fifth year, I created a website dedicated to cybersecurity using WordPress. My passion for programming drove me to seek self-education in my free time. This ongoing quest for knowledge has led me to my current training at Boolean, where I have developed both front-end and back-end knowledge, and I am working hard to become a Jr. Full Stack Developer. I am determined to stay up-to-date and actively contribute to the growth of the programming field.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '../../../assets/scss/vars';

#aboutme{
  padding: 7rem 0;
}

.container-photos{
  position: relative;
}

// First img style
 #first-img{
  width: 540px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0, .1);
}

#second-img{
  max-width: 60px;
  position: absolute;
  left: 73%;
  bottom: 3%;
  z-index: 1;
}

// Third img keyframe and rotation
#third-img {
  max-width: 160px;
  position: absolute;
  left: 65%;
  bottom: -10%;
  border-radius: 50%;
  animation: rotate 9s linear infinite;

  @keyframes rotate {
    100% {
      -webkit-transform: rotate(1turn);
      transform: rotate(1turn);
    }
  }
}

// Description col style
.container-description h3{
  color: #147efb;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
}

.container-description h4{
  color: #2d2e32;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 2rem;
}

.container-description p{
  color: #767676;
}

</style>