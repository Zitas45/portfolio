<template>
  <div class="contact">
    <h2>Kontakt</h2>
    <p>Erreichbar unter: <a href="mailto:silasjunicke@googlemail.com">silasjunicke@googlemail.com</a></p>

  </div>
</template>

<script setup>
</script>

<style scoped>
.contact {
  padding: 4rem 2rem;
  text-align: center;
  background-color: #2c3e50; 
}

.contact h2 {
  font-size: 2.5rem;
  color: #ecf0f1;
  margin-bottom: 1rem;
  font-weight: 700;
}

.contact p {
  color: #bdc3c7; 
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.contact a {
  color: #3498db; 
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.contact a:hover {
  color: #2980b9;
  text-decoration: underline;
}
</style>
