<script>
export default {
  name:'Header',
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
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#">EVENTS</a></li>
        <li><a href="#">GALLERY</a></li>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT US</a></li>
        <li><a href="#">SHOP</a></li>
      </ul>
      <button>CE</button>
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

  nav{
    @include d-flex("both");
    width: 765px;
    height:100%;
    
    ul{
      @include d-flex("both");
      li{
        margin:0 15px;
      }
    }

    button{
      margin:0 20px;
    }

  }
}

</style>