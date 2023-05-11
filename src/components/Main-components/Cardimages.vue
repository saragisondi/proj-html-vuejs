<script>
export default {
  name:'Cardimages',
  props:{
    img:String,
    title:String,
  }
}
</script>

<template>
    <div class="cardImages">
      <!-- img -->
      <div class="container-img">
        <img :src="img" :alt="title">
      </div>
      <!-- text -->
      <div class="container-text">
        <h3>{{title.toUpperCase()}}</h3>
        <p>Stream On:
          <i class="fa-brands fa-spotify" style="color: #ffffff;"></i>
          <i class="fa-brands fa-youtube" style="color: #ffffff;"></i>
          <i class="fa-solid fa-music" style="color: #ffffff;"></i>
          <i class="fa-solid fa-cloud" style="color: #ffffff;"></i>
          <i class="fa-solid fa-compass" style="color: #ffffff;"></i>
        </p>

          
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../scss/Mixin.scss' as *;
.cardImages{
  width: calc(85% / 3);
  height: 500px;
  margin:20px;

  .container-img{
    width: 100%;
    height:85%;
    @include d-flex("both");

    img{
      width: 100%;
      height:100%;
      object-fit: cover;
    }

    img:hover{
      width: 105%;
      height:105%;
      transition:.5s  ;
    }
  }
  .container-text{
    margin:15px 0;
    h3{
      font-size: 18px;
    }
    p{
      margin:10px 0;
      font-size: small;
      i{
        margin:0 10px;
      }
    }
  }
}
</style>