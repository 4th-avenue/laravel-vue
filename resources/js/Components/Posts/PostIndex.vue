<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import DefaultLayout from '../Layouts/DefaultLayout.vue';

const posts = ref([]);

const getPosts = () => {
    axios.get('/api/posts')
    .then(res => posts.value = res.data.data)
    .catch(error => console.log(error))
};

onMounted(() => getPosts());
</script>

<template>
    <DefaultLayout>
        <h1>All Posts</h1>
        <div>
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <h2>{{ post.title }}</h2>
                </li>
            </ul>
        </div>
    </DefaultLayout>
</template>