<template>
  <input :type="type" v-bind="$attrs" @input="updateInput" />
</template>

<script>
import { defineEmits } from "vue";
export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "text",
    },
    a: {
      type: String,
      default: null,
    },
  },
  setup() {
    const emit = defineEmits(["update:modelValue"]);
    const updateInput = ($event) => {
      emit("update:modelValue", $event.target.value);
    };

    return { updateInput };
  },
};
</script>
