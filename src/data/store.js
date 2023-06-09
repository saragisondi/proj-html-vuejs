import {reactive} from 'vue';

export const store = reactive ({

// img
logo:'/public/imgs/assets/Logo.png',
// jumbotron:'/public/image (1).png',

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
      img:'/icons8-chevron-down-24.png',
  
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
      img:'/icons8-chevron-down-24.png'
      
    }, 
  ],

  //Dropdown
  EventsLink:[
    {
      list:'choral music'
    },
    {
      list:'concert band'
    },
    {
      list:"opera concerts"
    },
    {
      list:'symphony orchestra'
    },
    {
      list:'family concerts'
    },
  ],

  ShopLink:[
    {
      list:'product type'
    },
    {
      list:'shop page'
    }
  ],

  TypeOfProducts:[
{
  list:'simple product'
},
{
  list:'external/affiliate product'
},
{
  list:'downloadable product'
},
{
  list:'group product'
},
{
  list:'in-stock product'
},
{
  list:'variable product'
},
  ],

  ShopPage:[
    {
      list:'checkout'
    },
    {
      list:'cart'
    },
    {
      list:'downloads'
    },
    {
      list:'my account'
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
      img:'/icons8-arms-up-100.png',
      num:163,
      caption:'concerts'
    },
    {
      img:'/icons8-spaceship-100.png',
      num:145,
      caption:'happy clients'
    },
    {
      img:'/icons8-trophy-100.png',
      num:72,
      caption:'music awards'
    },
    {
      img:'/icons8-music-104.png',
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