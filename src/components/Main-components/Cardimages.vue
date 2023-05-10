<script>
export default {
  name:'Cardimages',
  props:{
    img:String,
    title:String
  }
}
</script>

<template>
    <div class="cardImages">

    </div>

    <div class="cardImages"></div>
    <div class="cardImages"></div>
    <div class="cardImages"></div>
    <div class="cardImages"></div>
    <div class="cardImages"></div>
</template>

<style lang="scss" scoped>
.cardImages{
  border: 1px solid red;
  width: calc(70% / 3);
  height: 350px;
  margin:20px;
}
</style>