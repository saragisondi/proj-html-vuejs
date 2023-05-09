import { createApp } from 'vue'
import App from './App.vue'

// fontawesome
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontawesomeIcon} from '@fortawesome/vue-fontawesome';
import { faS } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(faS, far)

createApp(App)
.component('font-awesome', FontawesomeIcon)
.mount('#app')
