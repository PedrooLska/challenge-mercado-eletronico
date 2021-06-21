<template>
  <span
    class="icon"
    :class="[
      icon,
      createClassColor,
      createClassMarginLeft,
      createClassMarginRight,
    ]"
  ></span>
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
    marginLeft: {
      type: String,
      default: () => "",
    },
    marginRight: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    createClassColor() {
      return `color--${this.color}`;
    },
    createClassMarginLeft() {
      return `marginLeft--ml-${this.marginLeft}`;
    },
    createClassMarginRight() {
      return `marginRight--mr-${this.marginRight}`;
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

.marginLeft {
  &--ml-4px {
    margin-left: 4px;
  }

  &--ml-8px {
    margin-left: 8px;
  }

  &--ml-12px {
    margin-left: 12px;
  }

  &--ml-16px {
    margin-left: 16px;
  }
}

.marginRight {
  &--mr-4px {
    margin-right: 4px;
  }

  &--mr-8px {
    margin-right: 8px;
  }

  &--mr-12px {
    margin-right: 12px;
  }

  &--mr-16px {
    margin-right: 16px;
  }
}
</style>
