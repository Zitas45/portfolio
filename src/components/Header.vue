<template>
  <header class="navbar">
    <div class="container">
      <div class="brand">Silas</div>
      <button class="menu-toggle" @click="toggleMenu" aria-label="Menü umschalten">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <nav :class="{ 'nav-links': true, 'active': isMenuOpen }">
        <router-link to="/" @click="closeMenu">Home</router-link>
        <router-link to="/#about" @click="closeMenu">Über mich</router-link>
        <router-link to="/#skills" @click="closeMenu">Skills</router-link>
        <router-link to="/#projects" @click="closeMenu">Projekte</router-link>
        <router-link to="/#contact" @click="closeMenu">Kontakt</router-link>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
}
</script>
<style scoped>
.navbar {
  background-color: #1e2d3b; 
  color: #ecf0f1;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.brand {
  font-size: 1.5rem;
  font-weight: 700;
  color: #3498db;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: #bdc3c7; 
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #3498db;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.bar {
  height: 3px;
  width: 100%;
  background-color: #ecf0f1;
  border-radius: 3px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #34495e;
    padding: 1rem 0;
    gap: 0;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    padding: 1rem 2rem;
    display: block;
    border-bottom: 1px solid #2c3e50;
  }
}
</style>