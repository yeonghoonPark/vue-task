<template>
  <button>{{ message }}</button>
</template>

//
<script>
export default {
  props: {
    message: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style scoped>
button {
  all: unset;
  width: 120px;
  height: 50px;
  margin: 1rem auto;
  border-radius: 5px;
  text-align: center;
  background: #111101;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  color: #3dc074;
  transform: scale(1.1);
}
</style>
