<template>
  <div class="skills">
    <h2>My Skills</h2>
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
  padding: 2rem;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

li {
  background-color: #eee;
  padding: 0.5rem 1rem;
  border-radius: 4px;
}
</style>
