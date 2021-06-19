<template>
  <p :class="[createClassColor, createClassSize, createClassWeight]">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "AtomText",
  props: {
    text: {
      type: String,
      default: () => "",
    },
    color: {
      type: String,
      default: () => "",
    },
    size: {
      type: String,
      default: () => "",
    },
    weight: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    createClassColor() {
      return `text-${this.color}`;
    },
    createClassSize() {
      return `text-${this.size}`;
    },
    createClassWeight() {
      return `text-${this.weight}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  &-small {
    font-size: $font-12px;
  }

  &-medium {
    font-size: $font-14px;
  }

  &-large {
    font-size: $font-16px;
  }

  &-blue {
    color: $blue-primary;
  }

  &-yellow {
    color: $yellow-primary;
  }

  &-black {
    color: $black-primary;
  }

  &-gray-light {
    color: $gray-light;
  }

  &-gray-primary {
    color: $gray-primary;
  }

  &-regular {
    font-weight: 600;
  }

  &-semibold {
    font-weight: 600;
  }
}
</style>
