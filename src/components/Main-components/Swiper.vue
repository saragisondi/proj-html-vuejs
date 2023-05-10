<script>
export default {
  name:'Swiper',
  props:{
    img:String
  }
}
</script>

<template>
  <div class="image">
    <img :src="img" alt="photo-instagram">
  </div>
</template>


<style lang="scss" scoped>

// TOFIX
  .image{
    width: calc(100% / 10);

  }
</style>