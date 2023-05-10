import {reactive} from 'vue';

export const store = reactive ({

  // img
logo:'/public/imgs/assets/Logo.png',
jumbotron:'/public/image (1).png',

// header
  HeaderLinks:[
    'home',
    'blog',
    'events',
    'gallery',
    'about us',
    'contact us',
    'shop'
  ],

  // main
  Cards:[
    {
      img:'/public/speaker.svg',
      title:'original ideas',
      description:'contrary popular belief, lorem ipsum not simplyrandom text.'
    },
    {
      img:'/public/disc.svg',
      title:'music studio',
      description:'contrary popular belief, lorem ipsum not simplyrandom text.'
    },
    {
      img:'/public/headphones.svg',
      title:'acoustic covers',
      description:'contrary popular belief, lorem ipsum not simplyrandom text.'
    },
  ],


  CardsImages:[
    {
      img:'/public/imgs/assets/gallery1.jpg',
      title:'a roll and bang the floor',
      StreamOn:'Stream On:'
    },
    {
      img:'/public/imgs/assets/gallery2.jpg',
      title:'your melody to our music',
      StreamOn:'Stream On:'
    },
    {
      img:'/public/imgs/assets/gallery3.jpg',
      title:'touching heaven on frequency',
    },
    {
      img:'/public/imgs/assets/gallery4.jpg',
      title:'music makes stronge beats',
    },
    {
      img:'/public/imgs/assets/gallery5.jpg',
      title:'sound is the spark of time',
    },
    {
      img:'/public/imgs/assets/gallery6.jpg',
      title:'make your night groovy',
    },
  ],

  Numbers:[
    {
      img:'',
      num:'163',
      caption:'concerts'
    },
    {
      img:'',
      num:'145',
      caption:'happy clients'
    },
    {
      img:'',
      num:'72',
      caption:'music awards'
    },
    {
      img:'',
      num:'182',
      caption:'total songs'
    },

  ],

  // footer
  FooterLinks:[
    {
      title:'bookings',
      text:[
        '502 New Design Str, Melbourne, San Francisco, CA 94110, United States Of America Australia',
        'T:1123-456-789',
        'Email:demo@example.com',
      ]
    },
    {
      title:'information',
      text:[
        'Product Support',
        'Checkout',
        'Report Abuse',
        'Redeem Voucher',
        'Order Status'
      ]
    },
    {
      title:'support',
      text:[
        'Policies & Rules',
        'Privacy Policy',
        'License Policy',
        'My Account',
        'Locality'
      ]
    },
    {
      title:'',
      text:[
        '',
        '',
        '',
        '',
        ''
      ]
    },
  ]
})