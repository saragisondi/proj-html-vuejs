import {reactive} from 'vue';

export const store = reactive ({

  imgs:[
    {
      name:'logo',
      logo:'/public/imgs/assets/Logo.png',
    },
    {
      name:'jumbotron',
      jumbotron:'/public/image (1).png'
    }
  ],



  HeaderLinks:[
    'home',
    'blog',
    'events',
    'gallery',
    'about us',
    'contact us',
    'shop'
  ]
})