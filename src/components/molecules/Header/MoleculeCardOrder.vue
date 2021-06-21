<template>
  <div class="cardOrder">
    <div class="cardOrder__text">
      <AtomTitle
        :text="'Purchase Order'"
        :color="'white-primary'"
        :size="'medium'"
        :weight="'semibold'"
      />

      <AtomTitle
        :text="number"
        :color="'white-primary'"
        :size="'large'"
        :weight="'bold'"
      />

      <AtomText
        :text="`SerialME ${serial}`"
        :color="'white-primary'"
        :size="'small'"
        :weight="'boldItalic'"
      />
    </div>
  </div>
</template>

<script>
import AtomTitle from "../../atoms/AtomTitle.vue";
import AtomText from "../../atoms/AtomText";

export default {
  name: "MoleculeCardOrder",
  components: {
    AtomTitle,
    AtomText,
  },
  computed: {
    number() {
      return this.$store.state.data.header.number.toString();
    },
    serial() {
      return this.$store.state.data.header.serial.toString();
    },
  },
};
</script>

<style lang="scss" scoped>
.cardOrder {
  display: flex;
  align-items: center;
  border-radius: 0px 7px 7px 0px;
  width: 200px;
  height: 90px;
  background-color: $blue-primary;

  &__text {
    margin-left: 20px;
  }
}
</style>
