<template>
  <div class="project-detail" v-if="project">
    <h1>{{ project.title }}</h1>
    <img :src="project.imageUrl" :alt="project.title" class="project-detail-image">
    <div class="project-content">
      <h2>Über dieses Projekt</h2>
      <p>{{ project.longDescription }}</p>
      <div class="cta-buttons">
        <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer">GitHub Code</a>
        <router-link to="/">Zurück zu den Projekten</router-link>
      </div>
    </div>
  </div>
  <div class="not-found" v-else>
    <p>Project not found.</p>
    <router-link to="/">Zurück zu den Projekten</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import project1Img from '../assets/Opera Momentaufnahme_2026-01-12_134211_zitas45.github.io.png';

const route = useRoute();
const project = ref(null);


const projectsData = {
  1: {
    id: 1,
    title: 'Website für den Charlies Campus Filmclub',
    longDescription: `Für das studentische Kino der TU Berlin habe ich eine performante Webanwendung entwickelt, die Studierenden einen schnellen Überblick über kommende Filmvorführungen bietet.

Ziel war es, die statische Informationsverteilung durch eine dynamische, leicht zu wartende Lösung zu ersetzen, die das "Look & Feel" eines Kinos transportiert. Die Frontend-Architektur basiert auf Vue.js 3 (Composition API) und Vite, was für schnelle Ladezeiten und eine flüssige User Experience sorgt.

Als Backend-Service (BaaS) kommt Supabase zum Einsatz. Dies ermöglichte die schnelle Implementierung einer PostgreSQL-Datenbank für die Filmevents sowie eines sicheren Authentifizierungssystems für Administratoren.`,
    imageUrl: project1Img,
    demoUrl: 'https://zitas45.github.io/unikinoberlin/#/',
    githubUrl: 'https://github.com/Zitas45/unikinoberlin',
  },
  2: {
    id: 2,
    title: 'Coming Soon',
    longDescription: 'This project is currently in the planning or development phase. More details will be available soon.',
    imageUrl: 'https://via.placeholder.com/800x400.png?text=Coming+Soon',
    demoUrl: '',
    githubUrl: '',
  },
};

onMounted(() => {
  const projectId = parseInt(route.params.id);
  project.value = projectsData[projectId];
});
</script>

<style scoped>
.project-detail {
  padding: 2rem 2rem;
  max-width: 900px;
  margin: auto;
  text-align: center;
  background-color: #3e556d00;
}

.project-detail h1 {
  font-size: 3rem;
  color: #ecf0f1;
  margin-bottom: 2rem;
  font-weight: 700;
}

.project-detail-image {
  width: 90%;
  height: auto;
  margin-bottom: 3rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.project-content {
  text-align: left;
  color: #bdc3c7;
  line-height: 1.8;
  font-size: 1.1rem;
}

.project-content h2 {
  font-size: 2rem;
  color: #bdc3c7;
  margin-bottom: 1rem;
  font-weight: 700;
}

.project-content p {
  white-space: pre-line;
}

.cta-buttons {
  margin-top: 3rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-content a {
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  background-color: transparent;
  color: #ecf0f1;
  border: 2px solid #ecf0f1;
}

.project-content a:hover {
  background-color: #ecf0f1;
  color: #2c3e50;
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
