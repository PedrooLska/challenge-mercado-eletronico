<template>
  <span class="icon" :class="[icon, createClassColor]"></span>
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
.icon {
  font-size: $font-14px;
}

.color {
  &--blue-primary {
    color: $blue-primary;
  }

  &--blue-dark {
    color: $blue-dark;
  }

  &--gray-primary {
    color: $gray-primary;
  }
}
</style>
