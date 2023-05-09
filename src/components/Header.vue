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
      store
    }
  }
}
</script>

<template>
  <header class="debug">

    <!-- logo -->
    <div class="logo debug">
      logo
    </div>

    <!-- navbar -->
    <nav class="debug">
      <Navbar
      v-for="link in store.links"
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
  height:100px;
  
  .logo{
    @include d-flex("both");
    width: 175px;
    height:100%;
    
  }

}

</style>