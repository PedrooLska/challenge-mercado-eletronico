<template>
  <div>
    <AtomText
      :text="'Alooo'"
      :color="'red'"
      :size="'large'"
      :weight="'regular'"
    />
  </div>
</template>

<script>
import AtomText from "./components/atoms/AtomText.vue";
export default {
  components: {
    AtomText,
  },
};
</script>

<style lang="scss" scoped>
.text {
  color: $yellow-primary;
}
</style>
