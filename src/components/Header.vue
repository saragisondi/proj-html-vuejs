<script>

import Navbar from './Header-components/Navbar.vue';
import DropdownMenuEvents from './Header-components/DropdownMenu.vue';
import DropdownMenuShop from './Header-components/MenuShop.vue';
import TypeOfProduct from './Header-components/TypeOfProduct.vue';
import ShopPage from './Header-components/ShopPage.vue';
import {store} from '../data/store'

export default {
  name:'Header',

  components:{
    Navbar,
    DropdownMenuEvents,
    DropdownMenuShop,
    TypeOfProduct,
    ShopPage
  },


  data(){
    return{
      store,
    }
  },
  
}
</script>

<template>
  
  <header>
    <!-- logo -->
    <div class="logo">
      <img :src="store.logo" alt="Lyricsmus">
    </div>
  
    <!-- navbar -->
    <nav>

      <ul>
        <li>

          <Navbar
          v-for="link in store.HeaderLinks"
          :key="link"
          :link="link.name"
          :img="link.img"
          />

          <div class="dropdown events">
            <DropdownMenuEvents
              v-for="dropdownList in store.EventsLink"
                :key="dropdownList"
                :list="dropdownList.list"
            />
          </div>

          <div class="dropdown shop">
            <DropdownMenuShop
            v-for="dropdownList in store.ShopLink"
                :key="dropdownList"
                :list="dropdownList.list"
            />
          </div>
  
          <div class="dropdown type-products">
            <TypeOfProduct
            />
          </div>
          
          <div class="dropdown shop-page">
            <ShopPage
            />
          </div>

        </li>
      </ul>
      
      <button>
        <img src="../../public/imgs/assets/image (8).svg" alt="btn">
      </button>

    </nav>

  </header>
  
</template>


<style lang="scss">
@use './scss/General.scss' as *;
@use './scss/Typography.scss' as *;
@use './scss/Mixin.scss' as *;


header{
  @include d-flex("between");
  width: 100%;
  height:100px;
  font-weight: bold;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: $primary-color;

  .logo{
    @include d-flex("both");
    width: 175px;
    height:100%;
    margin:0 20px;
    cursor: pointer;
  }

  nav{
    @include d-flex("both");
    height:100%;

    ul{
      @include d-flex("both");
      
      li{
        position: relative;

        img{
          width: 10px;
        }

        a:hover{
          img{
            filter: brightness(0) saturate(100%) invert(51%) sepia(73%) saturate(799%) hue-rotate(357deg) brightness(98%) contrast(94%);
          }
        }

        .dropdown{
          border: 1px solid pink;
          position: absolute;
          background-color: $primary-color;
          font-size: 15px;
          display: none;
        }
        
        .dropdown.events{
          top:58px;
          left:190px;
        }

        .dropdown.shop{
          top:58px;
          right:10px;
        }

      }
      
      li:hover{   
        color: blue;
        .dropdown{
          display: block;
        }
      }
    }
  }

  button{
    margin-right: 30px ;
    border-style:none;
    img{
      filter: invert(100%);
    }
    img:hover{
      filter: brightness(0) saturate(100%) invert(51%) sepia(73%) saturate(799%) hue-rotate(357deg) brightness(98%) contrast(94%);
    }
  }

}

</style>