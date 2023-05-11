<script>
import { store } from '../../data/store';

export default {
  name:'Navbar',

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
  
    <a href="#"
    :class="{'active' : isActive === true}" 
    @click=" isActive = !isActive">
    {{ link.toUpperCase() }}
      <img :src="img" alt="">


    </a>

</template>


<style lang="scss">
@use '../scss/General.scss' as *;
@use '../scss/Typography.scss' as *;
@use '../scss/Mixin.scss' as *;

    
    a{
      margin:0 15px;
    }
    
    //ACTIVE
    .active{
      color:$secondary-color;
    }

    //HOVER
    a:hover{
      color:$secondary-color;
    }



</style>