<script>
   export default {
  name: 'AppMain',
}
</script>
<template>
  <main>
      <section id="main-section">
        <div id="jumbotron" class=" d-flex align-items-center justify-content-center">
          <div class="row">
            <div class="col">
              <div class="container">
                <h1>JR Full-Stack Developer</h1>
                <img src="../assets/img/handlogo.png" alt="hand img">
              </div>
              <p>Hi, I'm Stefan Topalovic. A passionate JR Full Stack Developer based in Pescara, Italy. <i class="fa-solid fa-location-dot"></i></p>
              <font-awesome-icon :icon="['fas', 'location-dot']" />
            </div>
            <div class="col">




            </div>
          </div>
        </div>
      </section>
  </main>
</template>
<style scoped lang="scss">

#main-section{
  height: 1800px;
  border: 2px solid red;
  background-color: #f9f9f9;
}

.row{
  border: 2px solid gold;
  width: 1200px;
}
.col{
  border: 2px solid green;
}

img{
  width: 60px;
}

h1{
  color: #2d2e32;
    font-size: 5.5rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    margin-top: 2rem;
}
</style>