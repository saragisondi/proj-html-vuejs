<script>
/***************IMPORT******************************/
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
import "@fontsource/open-sans";

export default {
  name:'App',
  components:{
    Header,
    Main,
    Footer
  }
}
</script>

<template>
  <Header/>
  <Main/>
  <Footer/>

</template>

<style lang="scss">
  @use './components/scss/General.scss' as *;
  @use './components/scss/Typography.scss' as *;
  @use './components/scss/Mixin.scss' as *;
</style>