<script>

import Card from './Main-components/Card.vue';
import Cardimages from './Main-components/Cardimages.vue';
import Numbers from './Main-components/Numbers.vue';
import BestMusic from './Main-components/BestMusic.vue';
import {store} from '../data/store'

export default {
  name:'Main',
  data(){
    return{
      store
    }
  },
  components:{
    Card,
    Cardimages,
    Numbers,
    BestMusic
  },
}
</script>

<template>
  <main>

    <!-- JUMBOTRON -->
    <section>
      <div class="container-jumbotron">
        <div class="jumbotron">
          <!-- img -->
          <img class="img-jumbotron" :src="store.jumbotron" alt="image-jumbotron">
          <!-- text -->
          <div class="text">
            <h3 class="subtitle">INSTRUMENTAL ROCK</h3>
            <h1>MUSIC IN THIS VIDEO</h1>
            <!-- button -->
            <button>READ MORE</button>
          </div>

          <!-- cards -->
          <div class="container-cards">

            <Card
            v-for="card in store.Cards" 
            :key="card"
            :img="card.img"
            :title="card.title"
            :description="card.description"
            />

          </div>

        </div>
      </div>

    </section>

    <!-- SENSE THE JAZZ description -->
    <section>
      <div class="container-section">
        <div class="sense-the-jazz description">
          <div>
            <h3 class="subtitle">WHO WE ARE</h3>
            <h1>SENSE THE JAZZ</h1>
            <p>The story of Jazz and Blues Society is the story of determination, passion, idealism, community, and of course, music. Founded in 1985 and incorporated in 1986, as a community based, not-for-profit, charitable arts organization located in Vancouver, British Columbia, the society, from the very beginning, has worked diligently to establish Vancouver as a centre for the creation and exchange of sounds and ideas between the local, national and international music communities. </p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </section>


    <!-- NEW MUSIC VIDEO  -->
    <section>
      <div class="container-section-img">
        <h3 class="play">play</h3>
        <h1>NEW MUSIC VIDEO</h1>
        <img src="/public/imgs/assets/Video.jpg" alt="video">
      </div>
    </section>

    <!-- SECTION JAZZ -->
    <section>
        <div class="section-jazz">
          <div class="container-text">
            <h3 class="subtitle">WHO WE ARE</h3>
            <h1>SENSE THE JAZZ</h1>
          </div>

          <!-- CARDS IMAGES -->
          <div class="container-cardsImages">
            <Cardimages
            v-for="cardImage in store.CardsImages"
            :key="cardImage"
            :img="cardImage.img"
            :title="cardImage.title"
            />
          </div>
        </div>

    </section>

    <!--SECTION ALBUM OUT NOW -->
    <section>
      <div class="section-album">
        <div class="container-text">
          <h3 class="subtitle">INSTRUMENTAL ROCK</h3>
          <h1>ALBUM OUT NOW</h1>
          <button>READ MORE</button>
        </div>
        <img src="/public/imgs/assets/cms_parallax.jpg" alt="">
      </div>
    </section>

    <!--SECTION NUMBERS -->
    <section>
      <div class="container-number">

        <div class="row">

          <Numbers
          v-for="element in store.Numbers"
          :key="element"
          :img="element.img"
          :num="element.num"
          :caption="element.caption"
          />
        
        </div>

        <img src="/public/imgs/assets/counter_parallax.jpg" alt="">
      </div>
    </section>

    <!-- SECTION BEST MUSIC BLOG -->
    <section>
      <div class="section-best-music-blog">
        <div class="title">
          <h3 class="subtitle">MUSIC BLOG</h3>
          <h1>BEST MUSIC BLOG</h1>
        </div>

        <div class="container-card-blog">
          <BestMusic
          v-for="card in store.BestMusicBlog " 
          :key="card"
          :img="card.img"
          :title="card.title"
          :date="card.date"
          :text="card.text"
          />
        </div>

      </div>
    </section>


  </main>
</template>


<style lang="scss" scoped>
@use './scss/Mixin.scss' as *;
@use './scss/General.scss' as *;
@use './scss/Typography.scss' as *;



main{
  margin-top:100px;

  h1{
    font-size: 100px;
    margin:50px 0;
  }

  button{
    border-style: none;
    border: 1px solid $secondary-color;
    background-color: transparent;
    color:$tertiary-color;
    font-weight: bold;
    padding: 13px 35px;
    cursor: pointer;
  }

  section{
    border:1px solid red;
    .container-section{
      @include d-flex("both");
      h1{
      margin: 20px 0;
      font-size: 60px;
    }
  }

    // section jumbotron
    .container-jumbotron{
    height:800px;
    .jumbotron{
      width: 100%;
      height:900px;
      position: relative;
      border:1px solid green;
      @include d-flex("both");
      .img-jumbotron{
        width: 100%;
        height:900px;
        object-fit: cover;
      }
      .text{
        text-align: center;
        position: absolute;
        top:200px;
      }
    }
    
  }
  // cards
  .container-cards{
    width:70%;
    @include d-flex("between");
    position: absolute;
    bottom:-200px;
      }
    }
  
  .subtitle{
    color:$secondary-color;
    
  }

// section jazz text
  .sense-the-jazz.description{
    width: 43%;
    height:700px;
    text-align: center;
    @include d-flex("column");
    margin:100px;

    h1{
      margin: 20px 0;
      font-size: 60px;
    }

    p{
      margin: 50px 0;
    }
  }

    // section img
    .container-section-img{
      width: 100%;
      height:600px;
      position: relative;
      @include d-flex("column-center");
      h1{
        font-size: 60px;
        position:absolute;

      }
      img{
        width: 100%;
        height:600px;
        object-fit: cover;
      }
      .play{
        position:absolute;
        top:180px;
      }
    }

    // section jazz cards imgs
    .section-jazz{
      height: 1200px;
      text-align: center;
      @include d-flex("column-center");
      margin:150px 0;

      h1{
          font-size: 60px;
        }

      .container-cardsImages{
        width: 75%;
        @include d-flex("both");
        flex-wrap:wrap;
      }
    }

// section album
    .section-album{
      position: relative;

      .container-text{
        position: absolute;
        top:250px;
        left:250px;
        width:50%;
        height:300px;
      }
    }

    // section numbers
    .container-number{
      @include d-flex("both");
      height:450px;
      position: relative;
      
      img{
        width: 100%;
        height:450px;
        object-fit: cover;
        object-position:top;
      }
      
      .row{
        width: 70%;
        @include d-flex("between");
        text-align: center;
        position:absolute;
      }
    }
    // section best music blog 
    .section-best-music-blog{
        height: 1200px;
        @include d-flex("column-items-center");
        padding-top:100px;

        .container-card-blog{
          @include d-flex("horizontal");
          width: 75%;
        }

        .title{
          @include d-flex("column-items-center");
          
        }
        h1{
          font-size: 60px;
        }
      }
    
}


  


  
  



</style>