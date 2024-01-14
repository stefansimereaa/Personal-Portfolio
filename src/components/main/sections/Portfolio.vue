<script>
export default {
  // Exported Component
  name: 'Portfolio',
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
  mounted() {
    // Actions Showmore btn
    const showMoreButton = document.getElementById('showMoreButton');
    const showMoreButton2 = document.getElementById('showMoreButton2')
    const hiddenCards = document.querySelectorAll('.card.d-none');

    showMoreButton.addEventListener('click', () => {
      hiddenCards.forEach((card) => {
        card.classList.remove('d-none');
      });
      // Action for display none btn 
      showMoreButton.style.display = 'none'; 
    });
    showMoreButton2.addEventListener('click', () => {
      hiddenCards.forEach((card) => {
        card.classList.remove('d-none');
      });
      // Action for display none btn 
      showMoreButton2.style.display = 'none'; 
    });
  },
}
</script>

<template>
  <section id="portfolio" :style="[$store.state.isDarkMode ? navbarStyle : { 'background-color': '#f9f9f9' }, $store.state.isDarkMode ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">
    <div class="container">
      <div class="portfolio-title">
        <p>Portfolio</p>
        <!-- Italian Version -->
        <h3 :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">Ogni progetto è un pezzo unico di sviluppo 🧩</h3>
        <!-- English Version -->
        <h3 :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">Each project is a unique piece of development 🧩</h3>
      </div>
      <div class="portfolio-projects">

        <!-- DISCORD -->
        <!-- Project 1 -->
        <div class="card card-normal mb-5" :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">
          <!-- Link project -->
          <div class="col-6">
            <a href="https://discord-mockup.vercel.app/" target="_blank">
              <img src="../../../assets/img/projects/discord.png" alt="website">
            </a>
          </div>
          <div class="col-5 d-flex flex-column justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center">
              <h3>Discord
                <!-- Italian  Version -->
                <span class="date-time" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">(Aprile 2023)</span>
                <!-- English Version -->
                <span class="date-time" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">(April 2023)</span>
              </h3>
              <!-- Italian Version -->
              <p class="description-project" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">Un mockup di Discord illustra l'interfaccia di un assistente virtuale progettato per migliorare le funzionalità del server Discord. Mostra comandi, risposte e interazioni, dando agli utenti un'anteprima delle capacità del bot, dalla gestione delle attività alla fornitura di informazioni o alla moderazione delle discussioni</p>
              <!-- English Version -->
              <p class="description-project" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">A Discord mockup illustrates the interface of a virtual assistant designed to enhance Discord server functionality. It showcases commands, responses, and interactions, giving users a preview of the bot's capabilities, from managing tasks to providing information or moderating discussions</p>
            </div>
            <div class="stacks d-flex justify-content-center align-items-center">
              <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">Html</p>
              <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">Css</p>
            </div>
            <div class="links d-flex align-items-center justify-content-center" :style="{ color: isDarkText ? '#fff' : 'inherit' }">
              <a href="https://github.com/stefansimereaa/htmlcss-discord" target="_blank" class="me-4">Code 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a href="https://discord-mockup.vercel.app/" target="_blank">Live Demo 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
            </div>
          </div>
        </div>

        <!-- CORPORATE LANDING -->
        <!-- Project 2 -->
        <div class="card card-normal mb-5" :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">
          <!-- Link project -->
          <div class="col-5 d-flex flex-column justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center">
              <h3>Corporate
                <!-- Italian  Version -->
                <span class="date-time" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">(Luglio 2023)</span>
                <!-- English Version -->
                <span class="date-time" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">(July 2023)</span>
              </h3>
              <!-- Italian Version -->
              <p class="description-project" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">Il sito web aziendale offre un'interfaccia virtuale completa che rappresenta il lavoro svolto dall'azienda nei settori del business planning, della tecnologia digitale e delle soluzioni moderne. Attraverso questa piattaforma, gli utenti possono esplorare le competenze e le capacità dell'azienda. Il sito web mostra chiaramente comandi, risposte e interazioni, dando una visione dettagliata delle soluzioni proposte.</p>
              <!-- English Version -->
              <p class="description-project" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">The corporate website provides a comprehensive virtual interface that showcases the work carried out by the company in the fields of business planning, digital technology, and modern solutions. The website clearly displays commands, responses, and interactions, providing a detailed insight into the proposed solutions.</p>
            </div>
            <div class="stacks stacks-2 d-flex justify-content-center align-items-center">
              <div class="d-flex">
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]" class="me-2">Html</p>
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">Css</p>
              </div>
              <div class="d-flex">
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]" class="me-2">Bootstrap</p>
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]" class="me-2">Vue</p>
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">Sass</p>
              </div>
            </div>
            <div class="links d-flex align-items-center justify-content-center" :style="{ color: isDarkText ? '#fff' : 'inherit' }">
              <a href="https://github.com/stefansimereaa/proj-html-vuejs" target="_blank" class="me-4">Code 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a href="https://corporate-landing-project.vercel.app/" target="_blank">Live Demo 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
            </div>
          </div>
          <div class="col-6 project-2">
            <a href="https://corporate-landing-project.vercel.app/" target="_blank">
              <img src="../../../assets/img/projects/corporatelanding.png" alt="website">
            </a>
          </div>
        </div>

        <!-- DROPBOX -->
        <!-- Project 3 -->
        <div class="card card-normal mb-5" :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">
          <!-- Link project -->
          <div class="col-6 project-3">
            <a href="https://dropbox-project.vercel.app/" target="_blank">
              <img src="../../../assets/img/projects/dropbox.png" alt="website">
            </a>
          </div>
          <div class="col-5 d-flex flex-column justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center">
              <h3>Dropbox
                <!-- Italian  Version -->
                <span class="date-time" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">(Maggio 2023)</span>
                <!-- English Version -->
                <span class="date-time" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">(May 2023)</span>
              </h3>
              <!-- Italian Version -->
              <p class="description-project" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">Dropbox è un rinomato servizio di archiviazione cloud che offre un modo semplice ed efficace per archiviare, sincronizzare e condividere file in modo sicuro. La sua interfaccia intuitiva consente di accedere ai dati da qualsiasi dispositivo, ovunque tu sia. Con funzionalità di condivisione avanzate, collaborazione in tempo reale e potenti strumenti di gestione dei file.</p>
              <!-- English Version -->
              <p class="description-project" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">Dropbox is a renowned cloud storage service that provides a simple and effective way to securely store, sync, and share files. Its intuitive interface allows you to access your data from any device, anywhere you are. With advanced sharing features, real-time collaboration, and powerful file management tools, Dropbox is the ideal solution for both businesses and individual users looking for a reliable way to organize and protect their digital data.</p>
            </div>
            <div class="stacks d-flex justify-content-center align-items-center">
              <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">Html</p>
              <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">Css</p>
            </div>
            <div class="links d-flex align-items-center justify-content-center" :style="{ color: isDarkText ? '#fff' : 'inherit' }">
              <a href="https://github.com/stefansimereaa/htmlcss-dropbox" target="_blank" class="me-4">Code 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a href="https://dropbox-project.vercel.app/" target="_blank">Live Demo 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
            </div>
          </div>
        </div>

        <!-- BoolFlix -->
        <!-- Project 4 -->
        <div class="card card-normal d-none mb-5" :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">
          <!-- Link project -->
          <div class="col-5 d-flex flex-column justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center">
              <h3>Netflix
                <!-- Italian  Version -->
                <span class="date-time" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">(Luglio 2023)</span>
                <!-- English Version -->
                <span class="date-time" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">(July 2023)</span>
              </h3>
              <!-- Italian Version -->
              <p class="description-project" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': !$store.state.isItalian }">Netflix è una popolare piattaforma di streaming online che offre una vasta selezione di film, serie TV, documentari e contenuti originali.</p>
              <!-- English Version -->
              <p class="description-project" :style="{ color: isDarkText ? '#fff' : 'inherit' }" :class="{ 'd-none': $store.state.isItalian }">Netflix is a popular online streaming platform that offers a wide selection of movies, TV series, documentaries, and original content.</p>
            </div>
            <div class="stacks stacks-3 d-flex justify-content-center align-items-center">
              <div class="d-flex">
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]" class="me-2">Html</p>
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">Css</p>
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]" class="me-2">Bootstrap</p>
              </div>
              <div class="d-flex">
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]" class="me-2">Vue</p>
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]" class="me-2">JavaScript</p>
                <p :style="[navbarStyle, navbarStyle.backgroundColor === '#181a1e' ? { 'box-shadow': '2px 2px 4px rgba(0,0,0,0.9)' } : {}]">Sass</p>
              </div>
            </div>
            <div class="links d-flex align-items-center justify-content-center" :style="{ color: isDarkText ? '#fff' : 'inherit' }">
              <a href="https://github.com/stefansimereaa/vite-boolflix" target="_blank" class="me-4">Code 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a href="https://boolflix-project.vercel.app/" target="_blank">Live Demo 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
            </div>
          </div>
          <div class="col-6 project-4">
            <a href="https://boolflix-project.vercel.app/" target="_blank">
              <img src="../../../assets/img/projects/netflix.jpg" alt="website">
            </a>
          </div>
        </div>

        <!-- Show more btn -->
        <div class="container container-btn">
          <!-- Italian Version -->
          <button id="showMoreButton2" class="btn btn-primary py-3 px-5 rounded-pill" :class="{ 'd-none': !$store.state.isItalian }">Mostra di più</button>
          <!-- English Version -->
          <button id="showMoreButton" class="btn btn-primary py-3 px-5 rounded-pill" :class="{ 'd-none': $store.state.isItalian }">Show More</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '../../../assets/scss/vars';
.links a, .links a:visited {
  font-family: $Font;
  font-weight: bold;
  font-size: 17px;
  font-size: 1.4rem;
  font-weight: 500;
  gap: 10px;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s;

  &:hover {
    color: #147efb; 
  }
}
.container-btn{
  position: relative;
}

#showMoreButton{
  position: absolute;
  left: 43%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
  background-color: #147efb;
}

#showMoreButton2{
  position: absolute;
  left: 43%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton2:hover{
  background-color: #147efb;
}

// Da ordinare
.col-5 .description-project{
  width: 400px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.col-5 p{
  color: #767676;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  text-transform: none;
}
.stacks{
  display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 1rem;
}
.stacks p{
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  color: #000;
  font-weight: 650;
  font-size: 1.3rem;
  padding: 0.5rem 1.4rem;
}

.date-time{
  color: hsla(0,5%,8%,.773);
  font-size: 1.3rem;
  margin-left: 0.2rem;
}

// Portofolio section style
#portfolio{
  background-color: #f9f9f9;
  padding: 100px 0px;
}
.portfolio-title p{
  color: #147efb;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
.portfolio-title h3{
  color: #2d2e32;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 2rem;
}

// Portfolio projects style
.card .col-6{
  background-color: hsla(0,0%,46%,.2);
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  height: 450px;
  overflow: hidden;
  width: 700px;
}
.card .col-6 img {
  width: 100%;
  height: auto;
  transform: translateY(0%);
  transition: transform 10s ease-in-out 0s;
}

// Portfolio projects img
.card .col-6:hover img {
  transform: translateY(-69%);
}

.card .col-6:hover img {
  transform: translateY(-90%);
}



.card-normal{
  flex-direction: row;
  gap: 2rem;
  height: 40rem;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1.7rem;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  display: flex;
}
.card{
  height: 500px;
}
// Responsive for super small mobile devices 
@media (min-width: 340px) {
  // Portfolio projects style
.card .col-6{
  height: 180px;
  overflow: hidden;
  width: 260px;
}
.card .col-6 img {
  width: 100%;
  height: auto;
  transform: translateY(0%);
  transition: transform 10s ease-in-out 0s;
}

// Portfolio projects img
.card .col-6:hover img {
  transform: translateY(-69%);
}

.card .project-2:hover img {
  transform: translateY(-80%);
}

.card .project-3:hover img {
  transform: translateY(-84%);
}

.card .project-4:hover img {
  transform: translateY(-70%);
}


.card-normal{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  height: 630px;
}

.card:nth-child(2) {
  height: 680px;
}


// Da ordinare
.col-5 .description-project{
  width: 280px;
  margin-top: 0px;
  margin-bottom: 10px;
}
.col-5 p{
  color: #767676;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: none;
}

.stacks-2{
  display: flex;
  flex-direction: column;
}

.stacks-3{
  display: flex;
  flex-direction: column;
}

.stacks p{
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  color: #000;
  font-weight: 650;
  font-size: 13px;
  padding: 0.5rem 1.4rem;
}

.date-time{
  color: hsla(0,5%,8%,.773);
  font-size: 15px;
  margin-left: 0.2rem;
  margin-bottom: 10px;
  display: flex;
  width: 100px;
}
h3{
  font-size: 15px;
  display: flex;
}

.links a{
  display: flex;
  width: 130px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-right: 20px;
}


#showMoreButton{
  position: absolute;
  left: 20%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
  background-color: #147efb;
}

#showMoreButton2{
  position: absolute;
  left: 20%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton2:hover{
  background-color: #147efb;
}

}

// Responsive for super small mobile devices 
@media (min-width: 360px) {
  // Portfolio projects style
.card .col-6{
  height: 180px;
  overflow: hidden;
  width: 280px;
}
.card .col-6 img {
  width: 100%;
  height: auto;
  transform: translateY(0%);
  transition: transform 10s ease-in-out 0s;
}

// Portfolio projects img
.card .col-6:hover img {
  transform: translateY(-69%);
}

.card .project-2:hover img {
  transform: translateY(-80%);
}

.card .project-3:hover img {
  transform: translateY(-84%);
}

.card .project-4:hover img {
  transform: translateY(-70%);
}


.card-normal{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  height: 630px;
}

.card:nth-child(2) {
  height: 680px;
}



// Da ordinare
.col-5 .description-project{
  width: 280px;
  margin-top: 0px;
  margin-bottom: 10px;
}
.col-5 p{
  color: #767676;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: none;
}

.stacks-2{
  display: flex;
  flex-direction: column;
}

.stacks-3{
  display: flex;
  flex-direction: column;
}

.stacks p{
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  color: #000;
  font-weight: 650;
  font-size: 13px;
  padding: 0.5rem 1.4rem;
}

.date-time{
  color: hsla(0,5%,8%,.773);
  font-size: 15px;
  margin-left: 0.2rem;
  margin-bottom: 10px;
  display: flex;
  width: 100px;
}
h3{
  font-size: 15px;
  display: flex;
}

.links a{
  display: flex;
  width: 150px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-right: 20px;
}


#showMoreButton{
  position: absolute;
  left: 20%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
  background-color: #147efb;
}

#showMoreButton2{
  position: absolute;
  left: 20%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton2:hover{
  background-color: #147efb;
}

}

// Responsive for super small mobile devices 
@media (min-width: 370px) {
  // Portfolio projects style
.card .col-6{
  height: 180px;
  overflow: hidden;
  width: 280px;
}
.card .col-6 img {
  width: 100%;
  height: auto;
  transform: translateY(0%);
  transition: transform 10s ease-in-out 0s;
}

// Portfolio projects img
.card .col-6:hover img {
  transform: translateY(-69%);
}

.card .project-2:hover img {
  transform: translateY(-82%);
}

.card .project-3:hover img {
  transform: translateY(-82%);
}

.card .project-4:hover img {
  transform: translateY(-70%);
}

.card-normal{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  height: 630px;
}
// Da ordinare
.col-5 .description-project{
  width: 280px;
  margin-top: 0px;
  margin-bottom: 10px;
}
.col-5 p{
  color: #767676;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: none;
}

.stacks p{
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  color: #000;
  font-weight: 650;
  font-size: 13px;
  padding: 0.5rem 1.4rem;
}

.date-time{
  color: hsla(0,5%,8%,.773);
  font-size: 15px;
  margin-left: 0.2rem;
  margin-bottom: 10px;
  display: flex;
  width: 100px;
}
h3{
  font-size: 15px;
  display: flex;
}

.links a{
  display: flex;
  width: 150px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-right: 20px;
}


#showMoreButton{
  position: absolute;
  left: 20%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
  background-color: #147efb;
}

#showMoreButton2{
  position: absolute;
  left: 20%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton2:hover{
  background-color: #147efb;
}

}

// Responsive for super small mobile devices 
@media (min-width: 380px) {
  // Portfolio projects style
.card .col-6{
  height: 180px;
  overflow: hidden;
  width: 280px;
}
.card .col-6 img {
  width: 100%;
  height: auto;
  transform: translateY(0%);
  transition: transform 10s ease-in-out 0s;
}

// Portfolio projects img
.card .col-6:hover img {
  transform: translateY(-69%);
}

.card .project-2:hover img {
  transform: translateY(-82%);
}

.card .project-3:hover img {
  transform: translateY(-82%);
}

.card .project-4:hover img {
  transform: translateY(-70%);
}

.card-normal{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  height: 630px;
}
// Da ordinare
.col-5 .description-project{
  width: 280px;
  margin-top: 0px;
  margin-bottom: 10px;
}
.col-5 p{
  color: #767676;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: none;
}

.stacks p{
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  color: #000;
  font-weight: 650;
  font-size: 13px;
  padding: 0.5rem 1.4rem;
}

.date-time{
  color: hsla(0,5%,8%,.773);
  font-size: 15px;
  margin-left: 0.2rem;
  margin-bottom: 10px;
  display: flex;
  width: 100px;
}
h3{
  font-size: 15px;
  display: flex;
}

.links a{
  display: flex;
  width: 150px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-right: 20px;
}


#showMoreButton{
  position: absolute;
  left: 20%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
  background-color: #147efb;
}

#showMoreButton2{
  position: absolute;
  left: 20%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton2:hover{
  background-color: #147efb;
}

}

// Responsive for small mobile devices 
@media (min-width: 410px) {
  // Portfolio projects style
.card .col-6{
  height: 180px;
  overflow: hidden;
  width: 280px;
}
.card .col-6 img {
  width: 100%;
  height: auto;
  transform: translateY(0%);
  transition: transform 10s ease-in-out 0s;
}

// Portfolio projects img
.card .col-6:hover img {
  transform: translateY(-69%);
}

.card .project-2:hover img {
  transform: translateY(-82%);
}

.card .project-3:hover img {
  transform: translateY(-82%);
}

.card .project-4:hover img {
  transform: translateY(-70%);
}

.card-normal{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  height: 630px;
}
// Da ordinare
.col-5 .description-project{
  width: 280px;
  margin-top: 0px;
  margin-bottom: 10px;
}
.col-5 p{
  color: #767676;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: none;
}

.stacks p{
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  color: #000;
  font-weight: 650;
  font-size: 13px;
  padding: 0.5rem 1.4rem;
}

.date-time{
  color: hsla(0,5%,8%,.773);
  font-size: 15px;
  margin-left: 0.2rem;
  margin-bottom: 10px;
  display: flex;
  width: 100px;
}
h3{
  font-size: 15px;
  display: flex;
}

.links a{
  display: flex;
  width: 150px;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  margin-right: 20px;
}


#showMoreButton{
  position: absolute;
  left: 23%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
  background-color: #147efb;
}

#showMoreButton2{
  position: absolute;
  left: 23%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton2:hover{
  background-color: #147efb;
}

}

// Responsive for mobile devices 
@media (min-width: 576px) {
  // Portfolio projects style
.card .col-6{
  height: 250px;
  overflow: hidden;
  width: 460px;
}
.card .col-6 img {
  width: 100%;
  height: auto;
  transform: translateY(0%);
  transition: transform 10s ease-in-out 0s;
}

// Portfolio projects img
.card .col-6:hover img {
  transform: translateY(-73%);
}

.card .project-2:hover img {
  transform: translateY(-82%);
}

.card .project-3:hover img {
  transform: translateY(-82%);
}

.card .project-4:hover img {
  transform: translateY(-73%);
}

.card-normal{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  height: 630px;
}

.card:nth-child(4){
  height: 650px;
}
.stacks-2{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.stacks-3{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

// Da ordinare
.col-5 .description-project{
  width: 460px;
  margin-top: 0px;
  margin-bottom: 10px;
}
.col-5 p{
  color: #767676;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  text-transform: none;
}

.stacks p{
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  color: #000;
  font-weight: 650;
  font-size: 13px;
  padding: 0.5rem 1.4rem;
}

.date-time{
  color: hsla(0,5%,8%,.773);
  font-size: 15px;
  margin-left: 0.2rem;
  margin-bottom: 10px;
  display: flex;
  width: 100px;
}
h3{
  font-size: 15px;
  display: flex;
}

.links a{
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-right: 20px;
}


#showMoreButton{
  position: absolute;
  left: 30%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
  background-color: #147efb;
}

#showMoreButton2{
  position: absolute;
  left: 30%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton2:hover{
  background-color: #147efb;
}

}

// Responsive for tablet
@media (min-width: 768px) {
// Portfolio projects style
.card .col-6{
  height: 400px;
  overflow: hidden;
  width: 600px;
}
.card .col-6 img {
  width: 100%;
  height: auto;
  transform: translateY(0%);
  transition: transform 10s ease-in-out 0s;
}

// Portfolio projects img
.card .col-6:hover img {
  transform: translateY(-73%);
}

.card .project-2:hover img {
  transform: translateY(-81%);
}

.card .project-3:hover img {
  transform: translateY(-81%);
}

.card .project-4:hover img {
  transform: translateY(-70%);
}

.card-normal{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  height: 800px;
}
.card:nth-child(2) {
  height: 850px;
}

.card:nth-child(4) {
  height: 800px;
}

// Da ordinare
.col-5 .description-project{
  width: 600px;
  margin-top: 0px;
  margin-bottom: 10px;
}
.col-5 p{
  color: #767676;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: none;
}

.stacks{
  display: flex;
  flex-direction: row;
}
.stacks p{
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  color: #000;
  font-weight: 650;
  font-size: 13px;
  padding: 0.5rem 1.4rem;
}

.date-time{
  color: hsla(0,5%,8%,.773);
  font-size: 18px;
  margin-left: 0.2rem;
  margin-bottom: 10px;
  display: flex;
  width: 150px;
}
h3{
  font-size: 18px;
  display: flex;
}

.links a{
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-right: 20px;
}


#showMoreButton{
  position: absolute;
  left: 35%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
  background-color: #147efb;
}

#showMoreButton2{
  position: absolute;
  left: 35%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton2:hover{
  background-color: #147efb;
}

}

// Responsive for notebooks
@media (min-width: 992px) {  
// Portfolio projects style
.card .col-6{
  height: 450px;
  overflow: hidden;
  width: 900px;
}
.card .col-6 img {
  width: 100%;
  height: auto;
  transform: translateY(0%);
  transition: transform 10s ease-in-out 0s;
}

// Portfolio projects img
.card .col-6:hover img {
  transform: translateY(-75%);
}

.card .project-2:hover img {
  transform: translateY(-83%);
}

.card .project-3:hover img {
  transform: translateY(-88%);
}

.card .project-4:hover img {
  transform: translateY(-77%);
}
.card-normal{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  height: 800px;
}


.card:nth-child(2) {
  height: 900px;
}

.card:nth-child(4) {
  height: 900px;
}
// Da ordinare
.col-5 .description-project{
  width: 900px;
  margin-top: 0px;
  margin-bottom: 10px;
}
.col-5 p{
  color: #767676;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: none;
  margin-bottom: 40px;
}

.stacks p{
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  color: #000;
  font-weight: 650;
  font-size: 13px;
  padding: 0.5rem 1.4rem;
}

.date-time{
  color: hsla(0,5%,8%,.773);
  font-size: 18px;
  margin-left: 0.2rem;
  margin-bottom: 10px;
  display: flex;
  width: 150px;
}
h3{
  font-size: 18px;
  display: flex;
}

.links a{
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  margin-right: 20px;
}


#showMoreButton{
  position: absolute;
  left: 39%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
  background-color: #147efb;
}

#showMoreButton2{
  position: absolute;
  left: 39%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton2:hover{
  background-color: #147efb;
}
 
}

// Responsive for desktops
@media (min-width: 1400px) {  
 // Portfolio projects style
.card .col-6{
  height: 400px;
  overflow: hidden;
  width: 600px;
}
.card .col-6 img {
  width: 100%;
  height: auto;
  transform: translateY(0%);
  transition: transform 10s ease-in-out 0s;
}

// Portfolio projects img
.card .col-6:hover img {
  transform: translateY(-67%);
}

.card .project-2:hover img {
  transform: translateY(-81%);
}

.card .project-3:hover img {
  transform: translateY(-83%);
}

.card-normal{
  display: flex;
  gap: 100px;
  flex-direction: row;
}
.card{
  height: 450px;
}

.card:nth-child(2){
  height: 450px;
}

.card:nth-child(4){
  height: 450px;
}
// Da ordinare
.col-5 .description-project{
  width: 500px;
  margin-top: 0px;
  margin-bottom: 10px;
}
.col-5 p{
  color: #767676;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-transform: none;
}

.stacks p{
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
  color: #000;
  font-weight: 650;
  font-size: 15px;
  padding: 0.5rem 1.4rem;
}

.date-time{
  color: hsla(0,5%,8%,.773);
  font-size: 20px;
  margin-left: 0.2rem;
  margin-bottom: 10px;
  display: flex;
  width: 150px;
}
h3{
  font-size: 20px;
  display: flex;
}

.links a{
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-right: 20px;
}


#showMoreButton{
  position: absolute;
  left: 41%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
  background-color: #147efb;
}

#showMoreButton2{
  position: absolute;
  left: 41%;
  background-color: #2d2e32;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  transition: background-color 0.3s;
}

#showMoreButton2:hover{
  background-color: #147efb;
}
}
</style>