<template>
  <Header />

  <router-view></router-view>
  <Footer />
</template>

<script>
import Header from "./components/common/header/Header.vue";
import Footer from "./components/common/footer/Footer.vue";


export default {
  name: "App",
  components: {
    Header,
    Footer,

  },
};






</script>

<style>

</style>
