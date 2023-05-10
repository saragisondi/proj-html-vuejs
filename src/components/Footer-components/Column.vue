<script>

import {store} from '../../data/store'

export default {
  name:'Column',

  data(){
    return{
      store,
    }
  },
  props:{
    title:String,
    text:String
  }
}
</script>


<template>

  <div class="col debug">
    <ul>
      <li>
        <!-- title -->
        <h2 
        v-for="link in store.FooterLinks" :key="link">
          {{link.title}}
        </h2>

        <!-- TOFIX -->
        <!-- text -->
        <p 
        v-for="(element,index) in store.link" :key="index">
        {{link.element}}
      </p>

      </li>
    </ul>
  </div>


</template>


<style lang="scss">
@use '../scss/Mixin.scss' as *;
@use '../scss/General.scss' as *;
@use '../scss/Typography.scss' as *;


</style>