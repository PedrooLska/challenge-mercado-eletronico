<template>
  <span :class="[icon, createClassColor]"></span>
</template>

<script>
export default {
  name: "AtomIcon",
  props: {
    icon: {
      type: String,
      default: () => "",
    },
    color: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    createClassColor() {
      return `color-${this.color}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.color {
  &-blue-primary {
    color: $blue-dark;
  }

  &-blue-dark {
    color: $blue-dark;
  }

  &-gray-primary {
    color: $gray-primary;
  }
}
</style>
