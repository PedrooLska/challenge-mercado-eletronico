<template>
  <div class="cardOrder">
    <div class="cardOrder__text">
      <AtomTitle
        :text="title"
        :color="'white-primary'"
        :size="'medium'"
        :weight="'semibold'"
      />

      <AtomTitle
        :text="orderNumber"
        :color="'white-primary'"
        :size="'large'"
        :weight="'bold'"
      />

      <AtomText
        :text="serialME"
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
  props: {
    title: {
      type: String,
      default: () => "",
    },
    orderNumber: {
      type: String,
      default: () => "",
    },
    serialME: {
      type: String,
      default: () => "",
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
  height: 89px;
  background-color: $blue-primary;

  &__text {
    margin-left: 20px;
  }
}
</style>
