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
  <div class="not-found" v-else>
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
  padding: 4rem 2rem;
  max-width: 900px;
  margin: auto;
  text-align: center;
}

.project-detail h1 {
  font-size: 3rem;
  color: #343a40;
  margin-bottom: 2rem;
  font-weight: 700;
}

.project-detail-image {
  width: 100%;
  height: auto;
  margin-bottom: 3rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.project-content {
  text-align: left;
  color: #6c757d;
  line-height: 1.8;
  font-size: 1.1rem;
}

.project-content h2 {
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 1rem;
  font-weight: 700;
}

.project-content a {
  display: inline-block;
  margin-top: 3rem;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  background-color: transparent;
  color: #343a40;
  border: 2px solid #343a40;
}

.project-content a:hover {
  background-color: #343a40;
  color: #ffffff;
  transform: translateY(-2px);
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found a {
    display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  background-color: transparent;
  color: #343a40;
  border: 2px solid #343a40;
}

.not-found a:hover {
    background-color: #343a40;
  color: #ffffff;
  transform: translateY(-2px);
}
</style>
