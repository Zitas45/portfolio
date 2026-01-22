<template>
  <section class="hero">
    <div class="hero-content">
      <h1 id="h1">Hi, ich bin <span class="highlight">Silas</span></h1>
      <h2>Wirtschaftsinformatiker</h2>

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

setTimeout(() => {
  document.getElementById("h1").style.animation = "none"
}, 2000);

</script>
<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 10%; 
  background-color: #2c3e50;
  background-image: -webkit-repeating-linear-gradient(140deg, rgba(82, 96, 173, 0.1337), rgba(96, 114, 216, 0.1337) 20px);
  color: #ecf0f1;
  min-height: 85vh; 
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
  animation: typing 2s steps(20), blink 500ms step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  
}

.highlight {
  color: #3498db;
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
  border: 8px double #5db9e4;
  box-shadow: 0 5px 30px rgba(90, 166, 201, 0.444);
  animation: blob 20s infinite linear;
}

.cta-group {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: 50px; 
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

@keyframes typing {
  from { width: 0; }
  to { width: 100%;}
  
}
@keyframes blink {
  50% { border-right: #000000 2px solid; }
}

@keyframes blob {
  0%,100% { border-radius: 42% 56% 72% 38% / 42% 42% 56% 48%; }
  33% { border-radius: 42% 38% 50% 50% / 38% 38% 72% 72%; }
  66% { border-radius: 100% 56% 56% 100% / 100% 100% 56% 56%; }
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