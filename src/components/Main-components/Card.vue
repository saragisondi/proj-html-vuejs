<script>
export default {
  name:'Card',
  props:{
    img:String,
    title:String,
    description:String
  }
}
</script>

<template>
  <div class="card">
    <!-- img -->
    <div class="container-img">
      <img  :src="img" :alt="title">
    </div>
    <!-- text -->
    <div class="description">
      <h2>{{title.toUpperCase()}}</h2>
      <p>{{description}}</p>
    </div>
  </div>
    
</template> 

<style lang="scss" >

@use '../scss/Typography.scss' as *;
@use '../scss/Mixin.scss' as *;
@use '../scss/General.scss' as *;


.card{
  width:calc(90% / 3);
  height: 350px;
  background-color: $primary-color;
  
  .container-img{
    width: 100%;
    height:65%;
    @include d-flex("both");

    img{
      filter: invert(100%);
    }

     
 
    .speaker{
      width: 20%;
    }
  }

  .description{
    text-align: center;
    height:30%;

    p{
      margin: 10px 65px;
      font-size: 15px;
      word-break: break-all;
      text-transform: capitalize;
    }
  }


  img:hover{
    filter: brightness(0) saturate(100%) invert(51%) sepia(73%) saturate(799%) hue-rotate(357deg) brightness(98%) contrast(94%);
  }
}


</style>