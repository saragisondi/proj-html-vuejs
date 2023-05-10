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


  CardsImage:[
    {
      img:'',
      title:'a roll and bang the floor',
      // StreamOn:''
    },
    {
      img:'',
      title:'your melody to our music',
      // StreamOn:''
    },
    {
      img:'',
      title:'touching heaven on frequency',
      // StreamOn:''
    },
    {
      img:'',
      title:'music makes stronge beats',
      // StreamOn:''
    },
    {
      img:'',
      title:'sound is the spark of time',
      // StreamOn:''
    },
    {
      img:'',
      title:'make your night groovy',
      // StreamOn:''
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