<script>

import {store} from '../data/store'

export default {
  name:'Main',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <main>

    <section>
      <div class="jumbotron">
        <img :src="store.jumbotron" alt="image-jumbotron">
      </div>

      <h1>MUSIC IN THIS VIDEO</h1>
    </section>

    <section>
      <div class="sense-the-jazz text">
        <h1>SENSE THE JAZZ</h1>
      </div>
    </section>

    <section>
      <div class="new-music-video">
        <h1>NEW MUSIC VIDEO</h1>
      </div>
    </section>

    <section>
      <div class="sense-the-jazz img">
        <h1>SENSE THE JAZZ</h1>
      </div>
    </section>

    <section>
      <div class="album-out-now">
        <div>ALBUM OUT NOW</div>
      </div>
    </section>

    <section>
      <div class="best-music-blog">
        <h1>BEST MUSIC BLOG</h1>
      </div>
    </section>


  </main>
</template>


<style lang="scss">

main{
  margin-top:100px;

  section{
    border:1px solid red;
  }
  
  .jumbotron{
    width: 100%;
    height:800px;

    img{
      width: 100%;
      height:800px;
      object-fit: cover;
    }
  }

  .sense-the-jazz.text{
    height:700px;
  }

  .new-music-video, .album-out-now{
    height:500px;

  }

  .sense-the-jazz.img,.best-music-blog{
    height: 1200px;
  }
}

</style>