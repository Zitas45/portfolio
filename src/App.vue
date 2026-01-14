<script setup>
  import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <router-view></router-view>
</template>

<style>
/* Globale Styles, um Browser-Standardwerte zurückzusetzen */
html {
  scroll-behavior: smooth;
}

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #ffffff; /* Set a consistent light background */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* Stellt sicher, dass die App die volle Höhe einnimmt */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1; /* Stellt sicher, dass der Hauptinhalt den verfügbaren Platz einnimmt */
}
</style>
