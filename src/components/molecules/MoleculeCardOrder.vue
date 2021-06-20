<template>
  <div class="cardOrder">
    <AtomTitle
      :text="'Purchase Order'"
      :color="'white-primary'"
      :size="'medium'"
      :weight="'semibold'"
    />

    <AtomTitle
      :text="'4510001114'"
      :color="'white-primary'"
      :size="'large'"
      :weight="'bold'"
    />

    <AtomText
      :text="'SerialME 11223344'"
      :color="'white-primary'"
      :size="'small'"
      :weight="'boldItalic'"
    />

    <AtomLogo />
  </div>
</template>

<script>
import AtomTitle from "../atoms/AtomTitle";
import AtomText from "../atoms/AtomText";
import AtomLogo from "../atoms/AtomLogo.vue";

export default {
  name: "MoleculeCardOrder",
  components: {
    AtomTitle,
    AtomText,
    AtomLogo,
  },
};
</script>

<style lang="scss" scoped>
.cardOrder {
  background-color: $blue-primary;
}
</style>
