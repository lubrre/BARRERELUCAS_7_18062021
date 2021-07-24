<template>
  <div>
    <Navbar />
    <About />
    <Slider />
    <!-- <AllComment /> -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import About from "@/components/About.vue";
import Slider from "@/components/Slider.vue";
import Footer from "@/components/Footer.vue";
// import AllComment from '@/components/AllComment.vue'

export default {
  name: "Home",
  components: {
    Navbar,
    About,
    Slider,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

* {
  font-family: "Montserrat", sans-serif;
}

body {
  background: rgb(4, 66, 191);
  background: linear-gradient(
    156deg,
    rgba(4, 66, 191, 1) 0%,
    rgba(242, 206, 174, 1) 43%,
    rgba(242, 133, 133, 1) 78%,
    rgba(4, 85, 191, 1) 99%
  );
}
</style>
