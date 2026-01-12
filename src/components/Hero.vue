<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Hi, ich bin <span class="highlight">Silas</span></h1>
      <h2>Full Stack Developer</h2>
      <p>
        Ich entwickle coole Webanwendungen
      </p>
      <div class="cta-group">
        <a href="#projects" class="btn btn-primary">Meine Projekte</a>
        <a href="#contact" class="btn btn-outline">Kontakt</a>
      </div>
    </div>
    <div class="hero-image">
      <img src="../assets/logo.png" alt="Silas Profilbild">
    </div>
  </section>
</template>
<script>
export default {
  name: 'Hero'
}
</script>
<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 10%; /* Mehr Abstand an den Seiten */
  background-color: #2c3e50; /* Gleicher Ton wie Header */
  color: #ecf0f1;
  min-height: 85vh; /* Fast volle Höhe */
}

.hero-content {
  flex: 1;
  max-width: 600px;
  padding-right: 2rem;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.2;
}

.highlight {
  color: #3498db; /* Akzentfarbe aus Header */
}

h2 {
  font-size: 1.8rem;
  color: #bdc3c7;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: #ecf0f1;
  opacity: 0.9;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #3498db;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.cta-group {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 50px; /* Modernere Pill-Shape */
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background-color: #3498db;
  color: white;
  border: 2px solid #3498db;
}

.btn-primary:hover {
  background-color: #2980b9;
  border-color: #2980b9;
  transform: translateY(-2px);
}

.btn-outline {
  background-color: transparent;
  color: #ecf0f1;
  border: 2px solid #ecf0f1;
}

.btn-outline:hover {
  background-color: #ecf0f1;
  color: #2c3e50;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 900px) {
  .hero {
    flex-direction: column-reverse;
    text-align: center;
    padding: 4rem 2rem;
    justify-content: center;
  }

  .hero-content {
    padding-right: 0;
    margin-top: 3rem;
  }

  .cta-group {
    justify-content: center;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  .hero-image img {
    width: 250px;
    height: 250px;
  }
}
</style>