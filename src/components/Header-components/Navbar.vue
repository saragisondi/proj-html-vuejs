<script>
export default {
  name:'Navbar',
  props:{
    link:String,
  },

  data(){
    return{
      isActive:false,
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
        </a>
      </li>
    </ul>
  </nav>
</template>


<style lang="scss">
@use '../scss/General.scss' as *;
@use '../scss/Typography.scss' as *;
@use '../scss/Mixin.scss' as *;


  nav{
    @include d-flex("both");
    width: 765px;
    height:100%;
    
    ul{
      @include d-flex("both");
    }

    .active{
    color:$secondary-color;
  }
  }
</style>