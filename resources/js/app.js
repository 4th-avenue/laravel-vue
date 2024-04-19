import './bootstrap';

import { createApp } from 'vue';
import PostIndex from './Components/Posts/PostIndex.vue';

const app = createApp();
app.component('post-index', PostIndex);

app.mount('#app');
