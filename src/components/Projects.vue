<template>
  <div class="projects">
    <h2>Projekte</h2>
    <div class="project-grid">
      <router-link v-for="project in projects" :key="project.id" :to="'/project/' + project.id" class="project-card">
        <div class="project-image">
          <img :src="project.imageUrl" :alt="project.title">
        </div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import project1Img from '../assets//project1.png';

const projects = ref([
  {
    id: 1,
    title: 'Website für den Charlies Campus Filmclub',
    description: 'Gibt Informationen über den Charlies Campus Filmclub. Neue Veranstaltungen lassen sich über eine Supabase Einbindung hinzufügen, bearbeiten und löschen.',
    imageUrl: project1Img,
  },
  {
    id: 2,
    title: 'Coming Soon',
    description: 'This project is currently under development.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Coming+Soon',
  },
  {
    id: 3,
    title: 'Coming Soon',
    description: 'This project is currently under development.',
    imageUrl: 'https://via.placeholder.com/300x200.png?text=Coming+Soon',
  },
]);
</script>

<style scoped>
.projects {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #ecf0f1;
}

.projects h2 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-weight: 700;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.project-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}

.project-image {
  height: 200px;
  overflow: hidden;
}

.project-image img {
  margin-top: 5px;
  width: 95%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  border: 3px solid #2c3e50;
  border-radius: 15px 15px 0 0
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-info {
  padding: 1.5rem;
  text-align: left;
}

.project-info h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.project-info p {
  color: #7f8c8d;
  line-height: 1.6;
}
</style>
