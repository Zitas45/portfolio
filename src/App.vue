<script setup>
  import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style>
html {
  scroll-behavior: smooth;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background-color: #2c3e50; 
  background-image: radial-gradient(#2c3e50, #2b5b7a, #18405a, #3c6288);
  background-size: 200% 200%;
  animation: background2 10s alternate infinite;  
}
@keyframes background2 {
  0% {
    background-position: 0 10%;
  }
  100% {
    background-position: 80% 80%;
  }
  
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
