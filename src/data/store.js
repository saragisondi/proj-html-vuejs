import {reactive} from 'vue';

export const store = reactive ({

  // img
logo:'/public/imgs/assets/Logo.png',
jumbotron:'/public/image (1).png',


  HeaderLinks:[
    'home',
    'blog',
    'events',
    'gallery',
    'about us',
    'contact us',
    'shop'
  ],

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