<template>
  <h1 :class="[createClassColor, createClassSize, createClassWeight]">
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: "AtomTitle",
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
      return `color-${this.color}`;
    },
    createClassSize() {
      return `size-${this.size}`;
    },
    createClassWeight() {
      return `weight-${this.weight}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.color {
  &-black {
    color: $black-primary;
  }

  &-white {
    color: $white-primary;
  }
}

.size {
  &-medium {
    font-size: $font-18px;
  }

  &-large {
    font-size: $font-22px;
  }

  &-xlarge {
    font-size: $font-24px;
  }
}

.weight {
  &-regular {
    font-weight: $weight-400;
  }

  &-semibold {
    font-weight: $weight-600;
  }

  &-bold {
    font-weight: $weight-700;
  }
}
</style>
