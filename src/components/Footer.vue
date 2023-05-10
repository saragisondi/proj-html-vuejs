<script>

import Column from './Footer-components/Column.vue'
import {store} from '../data/store'

export default {
  name:'Footer',
  
  components:{
    Column
  },
  data(){
    return{
      store
    }
  },
}
</script>

<template>
  <footer class="debug">

    <div class="container">
      <div class="row">
        <!-- TOFIX -->
        <Column
          :title="store.title"
          :text="store.element"
        />
      </div>
    </div>

  </footer>
</template>


<style lang="scss" scoped>
@use './scss/Mixin.scss' as *;
@use './scss/General.scss' as *;
@use './scss/Typography.scss' as *;



</style>