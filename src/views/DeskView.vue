<template>
  <div class="desk">
    <Header title="Movie" />
    <Table />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Table from "@/components/Table.vue";

export default {
  components: {
    Header,
    Table,
  },
};
</script>
