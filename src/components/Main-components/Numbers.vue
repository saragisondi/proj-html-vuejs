<script>
export default {
  name:'Numbers',
  props:{
    img:String,
    num:Number,
    caption:String
  }
}
</script>

<template>
  <div class="col">
    <div class="container-img">
      <img :src="img">
    </div>
    <h1>{{ num }}</h1>
    <span>{{ caption.toUpperCase() }}</span>
  </div>
</template>


<style lang="scss" scoped>
@use '../scss/Mixin.scss' as *;


.col{
  width: calc(90% / 4);
  @include d-flex("column-center");

  h1{
    font-size: 55px;
    margin:15px 0;
  }
  span {
    font-size: 20px;
    font-weight: bold;
  }
}
  .container-img{
    width: 70%;

    img{
      width: 35%;
      object-fit: cover;
    }

    img:hover{
      filter: brightness(0) saturate(100%) invert(51%) sepia(73%) saturate(799%) hue-rotate(357deg) brightness(98%) contrast(94%);
    }
    
  }
</style>