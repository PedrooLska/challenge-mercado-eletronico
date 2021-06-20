<template>
  <div class="aboutPurchaseOrder">
    <AtomTitle
      :text="'USD 20,000.00'"
      :color="'black-primary'"
      :size="'xlarge'"
      :weight="'semibold'"
    />

    <AtomText
      :text="'Need to Confirm'"
      :color="'yellow-primary'"
      :size="'large'"
      :weight="'semibold'"
    />

    <AtomText
      :text="'Created on 04/16/2020'"
      :color="'black-primary'"
      :size="'medium'"
      :weight="'regular'"
    />
  </div>
</template>

<script>
import AtomTitle from "../../atoms/AtomTitle";
import AtomText from "../../atoms/AtomText";

export default {
  components: {
    AtomTitle,
    AtomText,
  },
};
</script>

<style lang="scss" scoped>
.aboutPurchaseOrder {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
}
</style>
