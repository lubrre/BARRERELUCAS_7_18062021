<template> 
    <div>
        <Navbar />
        <About />
        <Slider />
        <Footer />
    </div>
  
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import About from '@/components/About.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'
// import Slider from '@/components/Slider.vue'

export default {
  name: 'Home',
  components: {
      Navbar, About, Slider, Footer
  }
}
</script>

<style scoped>

</style>