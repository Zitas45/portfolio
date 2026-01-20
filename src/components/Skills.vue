<template>
  <div class="skills">
    <h2>Skills</h2>
    <ul>
      <li>Vue.js</li>
      <li>JavaScript</li>
      <li>HTML & CSS</li>
      <li>Node.js</li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
.skills {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #3e556d; 
  z-index: 20;
  box-shadow: 0 0px 15px rgba(0, 0, 0, 0.137);
}

.skills h2 {
  font-size: 2.5rem;
  color: #ecf0f1; 
  margin-bottom: 2rem;
  font-weight: 700;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap; 
  justify-content: center;
  gap: 1.5rem; 
  margin-top: 1rem;
}

li {
  background-color: #eaf4fc; 
  color: #2c76ac; 
  padding: 0.8rem 1.8rem;
  border-radius: 50px; 
  font-weight: 500;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

li:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
}
</style>
