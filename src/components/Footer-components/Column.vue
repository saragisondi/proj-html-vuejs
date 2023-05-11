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
    elements:Array
  }
}
</script>


<template>

  <div class="col-footer"
  v-for="element in elements"
      :key="element">
    <ul>
      <li>
        <!-- title -->
        <h2>
          {{element.title.toUpperCase()}}
        </h2>

        <!-- text -->
        <p 
        v-for="(link,index) in element.text" :key="index">
        {{link}}
        </p>

    </li>
  </ul>
</div>


<div class="col-footer">
  <h2>NEWSLETTER</h2>
  <form>
    <input type="email" id="email" placeholder="Email">
    <textarea name="message" id="message" rows="4" placeholder="Message"></textarea>
  </form>
  <button>SEND MESSAGE</button>
</div>

</template>


<style lang="scss">
@use '../scss/Mixin.scss' as *;
@use '../scss/General.scss' as *;
@use '../scss/Typography.scss' as *;

.col-footer:last-child{
  width:350px;
  margin-left:20px;
}

.col-footer{

  width: calc(70% / 4);
  h2{
    margin-bottom:25px;
    text-align: left;
  }
  
  p{
    margin:15px 0;
  }
  input, textarea{
    width: 300px;
    margin: 10px 0;
    padding: 10px;
    border:1px solid #222222;
    background-color: $primary-color;
    color:#3F3D3D;
    outline: none;
  }
  button{
    margin-top: 20px;
  }
  // HOVER
  button:hover{
    background-color: $secondary-color;
}

}
.col-footer:first-child{
  p:last-child:hover{
    color:$secondary-color;
  }
 
}
.col-footer:nth-child(2), .col-footer:nth-child(3){
  p:hover{
    color: $secondary-color;
  }
}

</style>