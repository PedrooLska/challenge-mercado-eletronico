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
  padding: 0.3em 1em;
  border-radius: 30em;
  font-size: 12px;
  font-weight: 600;
  background-color: $blue-lighter;
  color: $gray-light;
}
</style>
