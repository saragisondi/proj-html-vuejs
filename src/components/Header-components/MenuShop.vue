<script>
export default {
  name:'DropdownMenuShop',
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
      <div>
        <i class="fa-solid fa-chevron-right" style="color: #ffffff;"></i>
      </div>
      </li>
    </ul>

</template>

<style lang="scss" scoped>
@use '../scss/Mixin.scss' as *;
@use '../scss/Typography.scss' as *;


ul{
    @include d-flex("column");
    li{
      padding: 20px 0;
      width: 400px;
      border-bottom: 1px solid $quaternary-color;
      width: 100%;
      @include d-flex("between");
    }

    a{
      width: 230px;
    }

    div{
      width: 20px;
    }
  }
</style>