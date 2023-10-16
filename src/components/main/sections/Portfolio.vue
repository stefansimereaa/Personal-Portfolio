<script>
  // Exported component
export default {
  name: 'Portfolio',
}
</script>
<template>
  <section id="portfolio">
    <div class="container">
      <div class="portfolio-title">
        <p>Portfolio</p>
        <h3>Each project is a unique piece of development 🧩</h3>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import '../../../assets/scss/vars';

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
</style>