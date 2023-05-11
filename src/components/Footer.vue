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
  mounted(){
    console.log(store.FooterLinks)
  }
}
</script>

<template>
  <footer class="debug">

    <div class="container">
      <div class="row">
        <!-- TOFIX -->
        <Column
        :elements="store.FooterLinks"
        />

        <div class="icon">
          <div>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-youtube"></i>
          </div>
        
        </div>
      </div>
    </div>

    <div class="copyright">
      <p>&copy; 2023 All Rights Reserved. Developed By TemplateMela</p>
    </div>

  </footer>
</template>


<style lang="scss" scoped>
@use './scss/Mixin.scss' as *;
@use './scss/General.scss' as *;
@use './scss/Typography.scss' as *;

.row{
  @include d-flex("between");
  padding-bottom:100px;
  position:relative;
  .icon{
    position: absolute;
    bottom:150px;
    i{
      margin:0 10px;
    }
  }
}


.copyright{
  @include d-flex();
  border-top:1px solid #222222;
  padding: 30px 0;
}

//HOVER
i:hover{
  color:$secondary-color;
}

</style>