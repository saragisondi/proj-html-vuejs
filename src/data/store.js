import {reactive} from 'vue';

export const store = reactive ({

  // img
logo:'/public/imgs/assets/Logo.png',
jumbotron:'/public/image (1).png',

// header
  HeaderLinks:[
    {
      name:'home',
    },
    {
      name:'blog',
    },
    {
      name:'events',
      img:'/public/image(7).svg'
    },
    {
      name:'gallery',
    },
    {
      name:'about us',
    },
    {
      name:'contact us',
    },
    {
      name:'shop',
      img:'/public/image(7).svg'
    }, 
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
      num:163,
      caption:'concerts'
    },
    {
      img:'',
      num:145,
      caption:'happy clients'
    },
    {
      img:'',
      num:72,
      caption:'music awards'
    },
    {
      img:'',
      num:182,
      caption:'total songs'
    },

  ],

  BestMusicBlog:[
    {
      img:'/public/imgs/assets/hip_hop_wired_to_dance_make.jpg',
      title:'hip hop wired to dance make',
      date:'06 November 2021',
      text:'driving short music is a music genre that includes traditional folk music and the contemporary genre that evolved from the former',
    },
    {
      img:'/public/imgs/assets/music_business-worldwide.jpg',
      title:'music business worldwide',
      date:'27 May 2022',
      text:'accelerate work and drive productivity the beatles experimentation and creative freedom led other brands to experiment in various ways as well',
    },
    {
      img:'/public/imgs/assets/giveaways_rock.jpg',
      title:'giveaways rock to all',
      date:'07 May 2022',
      text:'signs your car battery has to be replaced when the dashboard lights start flashing, this is a sign the battery is dying. several issues arise and',
    },
  ],

  images:[
    {img:'/public/imgs/assets/instagram_img1.jpg'
    },
    {img:'/public/imgs/assets/instagram_img2.jpg'
    },
    {img:'/public/imgs/assets/instagram_img3.jpg'
    },
    {img:'/public/imgs/assets/instagram_img4.jpg'
    },
    {img:'/public/imgs/assets/instagram_img5.jpg'
    },
    {img:'/public/imgs/assets/instagram_img6.jpg'
    },
    {img:'/public/imgs/assets/instagram_img7.jpg'
    },
    {img:'/public/imgs/assets/instagram_img8.jpg'
    },
    {img:'/public/imgs/assets/instagram_img9.jpg'
    },
    {img:'/public/imgs/assets/instagram_img10.jpg'
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
      ],
      icons:[
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
  ]
})