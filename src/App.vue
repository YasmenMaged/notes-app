<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view /> -->
    <div class="container">
      <Notes/>
    </div>
  </div>
</template>
<script>
import Notes from "./components/Notes.vue";
export default {
  name: "app",
  components: {
    Notes,
  },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Madimi+One&display=swap');

*{
  box-sizing: border-box;
}
body {
  font-family: "Madimi One", sans-serif;
  line-height: 1.6;
  color:white;
  background:teal;
  display: flex;
  justify-content: space-between;
  font-size: 24px;
}
.container {
  max-width: 600;
  margin:0 auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
