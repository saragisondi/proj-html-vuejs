<script>


export default {
  name:'Dropdown',
  props:{
    list:String
  }


}
</script>

<template>
  
    <ul>
      <li>
        <a href="#">
        {{ list.toUpperCase() }}
        </a>
      </li>
    </ul>
  
</template>

<style lang="scss" scoped>
  @use '../scss/Typography.scss' as *;
  @use '../scss/Mixin.scss' as *;



  ul{
    @include d-flex("column");
    li{
      padding: 20px 0;
      border-bottom: 1px solid $quaternary-color;
      width: 100%;
    }
  }
</style>
