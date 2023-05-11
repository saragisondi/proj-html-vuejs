<script>
export default {
  name:'BestMusic',
  props:{
    img:String,
    title:String,
    date:String,
    text:String
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
        <div>{{ date }}</div>
        <p>{{ text }}</p>
      </div>
    </div>
</template>


<style lang="scss" scoped>
  @use '../scss/Mixin.scss' as *;
  @use '../scss/Typography.scss' as *;

.cardImages{
  width: calc(90% / 3);
  height: 500px;
  margin:20px;

  .container-img{
    width: 100%;
    height:250px;
    @include d-flex("both");
  }
    img{
      width: 100%;
      height:100%;
      object-fit: contain;
    }
  
  .container-text{
    margin:15px 0;
    div{
      margin:15px 0;
      font-size: 15px;
      color:$secondary-color;
    }
    p{
      font-size: 15px;
      text-transform: capitalize;
      line-height: 1.5rem;
    }
  }
}
</style>