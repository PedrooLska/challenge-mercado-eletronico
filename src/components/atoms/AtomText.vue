<template>
  <span :class="[createClassColor, createClassSize, createClassWeight]">
    {{ text }}
  </span>
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
      return `color--${this.color}`;
    },
    createClassSize() {
      return `size--${this.size}`;
    },
    createClassWeight() {
      return `weight--${this.weight}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.color {
  &--blue-primary {
    color: $blue-primary;
  }

  &--white-primary {
    color: $white-primary;
  }

  &--yellow-primary {
    color: $yellow-primary;
  }

  &--gray-primary {
    color: $gray-primary;
  }

  &--black-light {
    color: $black-light;
  }

  &--black-primary {
    color: $black-primary;
  }
}

.size {
  &--small {
    font-size: $font-12px;
  }

  &--medium {
    font-size: $font-14px;
  }

  &--large {
    font-size: $font-16px;
  }
}

.weight {
  &--regular {
    font-weight: $weight-400;
  }

  &--semibold {
    font-weight: $weight-600;
  }

  &--boldItalic {
    font-weight: $weight-700;
  }
}
</style>
