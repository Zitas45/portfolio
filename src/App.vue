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
  background-color: #3e556d; 
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}


#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #3e556d;
}

main {
  flex: 1;
}
</style>
