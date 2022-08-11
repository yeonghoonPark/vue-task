<template>
  <div class="desk">
    <Header title1="Home" title2="Desk" />
    <Table2 />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Table2 from "@/components/Table2.vue";

export default {
  components: { Header, Table2 },
};
</script>
