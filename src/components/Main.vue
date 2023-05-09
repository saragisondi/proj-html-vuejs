<script>
export default {
  name:'Main'
}
</script>

<template>
  <main class="debug">
    <div class="jumbotron"
    v-for="img in store.imgs"
    :key="img">
      <img :src="img.jumbotron" alt="image-jumbotron">
    </div>
  </main>
</template>


<style lang="scss">

main{
  margin-top:100px;

  .jumbotron{
    width: 100%;
    height:800px;
    position:relative;
  
    img{
      width: 100%;
      height:800px;
      object-fit: cover;
    }
  }
}

</style>