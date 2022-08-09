<template>
  <Header title1="Movie" title2="Desk" />
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Noto Sans KR", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
