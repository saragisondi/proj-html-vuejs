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
        <p>Stream On:</p>
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../scss/Mixin.scss' as *;
.cardImages{
  width: calc(90% / 3);
  height: 450px;
  margin:20px;

  .container-img{
    width: 100%;
    height:85%;
    @include d-flex("both");
  }
  .container-text{
    margin:15px 0;
    p{
      margin:10px 0;
      font-size: small;
    }
  }
}
</style>