<template>
  <button
    v-on:click="onClick()"
    :class="[
      buttonStyle === 'add' ? ['bg-green-500 hover:bg-green-700'] : '',
      buttonStyle === 'close' ? ['bg-red-500 hover:bg-red-700'] : '',
      ['text-white rounded-md p-2 '],
    ]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    buttonStyle: String,
  },
  methods: {
    onClick() {
      this.$emit('toggle-add-task')
    },
  },
};
</script>