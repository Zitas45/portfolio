<template>
  <div class="project-detail" v-if="project">
    <h1>{{ project.title }}</h1>
    <img :src="project.imageUrl" :alt="project.title" class="project-detail-image">
    <div class="project-content">
      <h2>About the project</h2>
      <p>{{ project.longDescription }}</p>
      <router-link to="/">Back to Projects</router-link>
    </div>
  </div>
  <div v-else>
    <p>Project not found.</p>
    <router-link to="/">Back to Projects</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import project1Img from '../assets/Opera Momentaufnahme_2026-01-12_134211_zitas45.github.io.png';

const route = useRoute();
const project = ref(null);

// In a real application, you would fetch this data from an API
const projectsData = {
  1: {
    id: 1,
    title: 'Website für den Charlies Campus Filmclub',
    longDescription: 'This is a more detailed description of my awesome project. It covers the technologies used, the challenges faced, and the solutions implemented. The project demonstrates my ability to build a complete application from scratch.',
    imageUrl: project1Img,
  },
  2: {
    id: 2,
    title: 'Coming Soon',
    longDescription: 'This project is currently in the planning or development phase. More details will be available soon.',
    imageUrl: 'https://via.placeholder.com/800x400.png?text=Coming+Soon',
  },
    3: {
    id: 3,
    title: 'Coming Soon',
    longDescription: 'This project is currently in the planning or development phase. More details will be available soon.',
    imageUrl: 'https://via.placeholder.com/800x400.png?text=Coming+Soon',
  },
    4: {
    id: 4,
    title: 'Coming Soon',
    longDescription: 'This project is currently in the planning or development phase. More details will be available soon.',
    imageUrl: 'https://via.placeholder.com/800x400.png?text=Coming+Soon',
  },
};

onMounted(() => {
  const projectId = parseInt(route.params.id);
  project.value = projectsData[projectId];
});
</script>

<style scoped>
.project-detail {
  padding: 2rem;
  max-width: 900px;
  margin: auto;
}

.project-detail-image {
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
}

.project-content {
  text-align: left;
}
</style>
