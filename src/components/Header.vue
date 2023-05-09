<script>

import Navbar from './Header-components/Navbar.vue'
import {store} from '../data/store'

export default {
  name:'Header',

  components:{
    Navbar,
  },

  data(){
    return{
      store,
    }
  },
  
}
</script>

<template>
  
  <header>
    <!-- logo -->
    <div class="logo">
      <img :src="store.logo" alt="Lyricsmus">
    </div>
  
    <!-- navbar -->
    <nav>
      <Navbar
      v-for="link in store.HeaderLinks"
      :key="link"
      :link="link"
      />
      <button>
        cerca
      </button>
    </nav>

  </header>
  
</template>


<style lang="scss">
@use './scss/General.scss' as *;
@use './scss/Typography.scss' as *;
@use './scss/Mixin.scss' as *;


header{
  @include d-flex("between");
  width: 100%;
  height:100px;
  font-weight: bold;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: $primary-color;

  .logo{
    @include d-flex("both");
    width: 175px;
    height:100%;
    margin:0 20px;
  }

  button{
    margin: 0 20px;
  }


}

</style>