<script>

import DropdownMenu from './DropdownMenu.vue';
import { store } from '../../data/store';

export default {
  name:'Navbar',
  components:{
    DropdownMenu
  },

  props:{
    link:String,
    img:String,
  },

  data(){
    return{
      isActive:false,
      store
    }
  },

}
</script>

<template>
  <nav>
    <ul>
      <li>
        <a href="#"
        :class="{'active' : isActive === true}" 
        @click=" isActive = !isActive">
          {{ link.toUpperCase() }}
          <img :src="img" alt="">
        </a>
      </li>
    </ul>
  </nav>
  
  <DropdownMenu
    
  
  />

</template>


<style lang="scss">
@use '../scss/General.scss' as *;
@use '../scss/Typography.scss' as *;
@use '../scss/Mixin.scss' as *;


  nav{
    @include d-flex("both");
    height:100%;
    
    ul{
      @include d-flex("both");
      
      li{
        position: relative;
        a{
          margin:0 15px;
        }
        
        img{
          width: 10px;
        }
      }
    }
    
    //ACTIVE
    .active{
      color:$secondary-color;
    }

    //HOVER
    a:hover{
      color:$secondary-color;  
    }

    img:hover{
      filter: brightness(0) saturate(100%) invert(51%) sepia(73%) saturate(799%) hue-rotate(357deg) brightness(98%) contrast(94%);
    }

  }

</style>