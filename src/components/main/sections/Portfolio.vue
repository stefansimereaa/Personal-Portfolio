<script>
export default {
  // Exported Component
  name: 'Portfolio',
  
  mounted() {
    // Actions Showmore btn
    const showMoreButton = document.getElementById('showMoreButton');
    const hiddenCards = document.querySelectorAll('.card.d-none');

    showMoreButton.addEventListener('click', () => {
      hiddenCards.forEach((card) => {
        card.classList.remove('d-none');
      });
      // Action for display none btn 
      showMoreButton.style.display = 'none'; 
    });
  },
}
</script>

<template>
  <section id="portfolio">
    <div class="container">
      <div class="portfolio-title">
        <p>Portfolio</p>
        <h3>Each project is a unique piece of development 🧩</h3>
      </div>
      <div class="portfolio-projects">
        <!-- Project 1 -->
        <div class="card card-normal mb-5">
          <!-- Link project -->
          <div class="col-6">
            <a href="">
              <img src="../../../assets/img/projects/discord.png" alt="website">
            </a>
          </div>
          <div class="col-5 d-flex flex-column justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center">
              <h3>Discord <span class="date-time">(April 2023)</span></h3>
              <p class="description-project">A Discord bot mockup illustrates the interface of a virtual assistant designed to enhance Discord server functionality. It showcases commands, responses, and interactions, giving users a preview of the bot's capabilities, from managing tasks to providing information or moderating discussions</p>
            </div>
            <div class="stacks d-flex justify-content-center align-items-center">
              <p>Html</p>
              <p>Css</p>
            </div>
            <div class="links d-flex align-items-center justify-content-center">
              <a href="https://github.com/stefansimereaa/htmlcss-discord" target="_blank" class="me-4">Code 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a href="#">Live Demo 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
            </div>
          </div>
        </div>
        <!-- Project 2 -->
        <div class="card card-normal mb-5">
          <!-- Link project -->
          <div class="col-5 d-flex flex-column justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center">
              <h3>Discord <span class="date-time">(April 2023)</span></h3>
              <p class="description-project">A Discord bot mockup illustrates the interface of a virtual assistant designed to enhance Discord server functionality. It showcases commands, responses, and interactions, giving users a preview of the bot's capabilities, from managing tasks to providing information or moderating discussions</p>
            </div>
            <div class="stacks d-flex justify-content-center align-items-center">
              <p>Html</p>
              <p>Css</p>
            </div>
            <div class="links d-flex align-items-center justify-content-center">
              <a href="https://github.com/stefansimereaa/htmlcss-discord" target="_blank" class="me-4">Code 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a href="#">Live Demo 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
            </div>
          </div>
          <div class="col-6">
            <a href="">
              <img src="../../../assets/img/projects/discord.png" alt="website">
            </a>
          </div>
        </div>
        <!-- Project 3 -->
        <div class="card card-normal mb-5">
          <!-- Link project -->
          <div class="col-6">
            <a href="">
              <img src="../../../assets/img/projects/discord.png" alt="website">
            </a>
          </div>
          <div class="col-5 d-flex flex-column justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center">
              <h3>Discord <span class="date-time">(April 2023)</span></h3>
              <p class="description-project">A Discord bot mockup illustrates the interface of a virtual assistant designed to enhance Discord server functionality. It showcases commands, responses, and interactions, giving users a preview of the bot's capabilities, from managing tasks to providing information or moderating discussions</p>
            </div>
            <div class="stacks d-flex justify-content-center align-items-center">
              <p>Html</p>
              <p>Css</p>
            </div>
            <div class="links d-flex align-items-center justify-content-center">
              <a href="https://github.com/stefansimereaa/htmlcss-discord" target="_blank" class="me-4">Code 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a href="#">Live Demo 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
            </div>
          </div>
        </div>

        <!-- Project 4 -->
        <div class="card card-normal mb-5 d-none">
          <!-- Link project -->
          <div class="col-5 d-flex flex-column justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center">
              <h3>Discord <span class="date-time">(April 2023)</span></h3>
              <p class="description-project">A Discord bot mockup illustrates the interface of a virtual assistant designed to enhance Discord server functionality. It showcases commands, responses, and interactions, giving users a preview of the bot's capabilities, from managing tasks to providing information or moderating discussions</p>
            </div>
            <div class="stacks d-flex justify-content-center align-items-center">
              <p>Html</p>
              <p>Css</p>
            </div>
            <div class="links d-flex align-items-center justify-content-center">
              <a href="https://github.com/stefansimereaa/htmlcss-discord" target="_blank" class="me-4">Code 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a href="#">Live Demo 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
            </div>
          </div>
          <div class="col-6">
            <a href="">
              <img src="../../../assets/img/projects/discord.png" alt="website">
            </a>
          </div>
        </div>

        <!-- Project 5 -->
        <div class="card card-normal mb-5 d-none">
          <!-- Link project -->
          <div class="col-6">
            <a href="">
              <img src="../../../assets/img/projects/discord.png" alt="website">
            </a>
          </div>
          <div class="col-5 d-flex flex-column justify-content-center align-items-center">
            <div class="container d-flex flex-column justify-content-center align-items-center">
              <h3>Discord <span class="date-time">(April 2023)</span></h3>
              <p class="description-project">A Discord bot mockup illustrates the interface of a virtual assistant designed to enhance Discord server functionality. It showcases commands, responses, and interactions, giving users a preview of the bot's capabilities, from managing tasks to providing information or moderating discussions</p>
            </div>
            <div class="stacks d-flex justify-content-center align-items-center">
              <p>Html</p>
              <p>Css</p>
            </div>
            <div class="links d-flex align-items-center justify-content-center">
              <a href="https://github.com/stefansimereaa/htmlcss-discord" target="_blank" class="me-4">Code 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg></a>
              <a href="#">Live Demo 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-external-link" data-darkreader-inline-stroke="" style="--darkreader-inline-stroke: currentColor;"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg></a>
            </div>
          </div>
        </div>
        
        <!-- Show more btn -->
        <div class="container container-btn">
          <button id="showMoreButton" class="btn btn-primary py-3 px-5 rounded-pill">Show More</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '../../../assets/scss/vars';
.container-btn{
  position: relative;
}

#showMoreButton{
  position: absolute;
  left: 40%;
  background-color: black;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

#showMoreButton:hover{
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
  margin-bottom: 40px;
}

.links a {
  color: #2d2e32;
  font-size: 1.4rem;
  font-weight: 500;
  gap: 10px;
  text-decoration: none;
}

.links a:hover{
  color: #147efb;
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
</style>