<template>
  <span class="badge">{{ text }}</span>
</template>

<script>
export default {
  name: "AtomBadge",
  props: {
    text: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style lang="scss" scoped>
.badge {
  padding: 5px 16px;
  border-radius: 30px;
  font-size: $font-12px;
  font-weight: $weight-600;
  background-color: $blue-lighter;
  color: $gray-light;
}
</style>
