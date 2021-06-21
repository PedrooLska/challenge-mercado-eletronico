<template>
  <div class="aboutPurchaseOrder">
    <AtomTitle
      :text="`${currency} ${formatPrice(price)} `"
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
      :text="`Created on ${formatDate(createAt)}`"
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
  computed: {
    currency() {
      return this.$store.state.data.header.currency;
    },
    price() {
      return this.$store.state.data.header.price;
    },
    createAt() {
      return this.$store.state.data.header.createdAt;
    },
  },
  methods: {
    formatPrice(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(value);
    },
    formatDate(value) {
      return new Date(value).toLocaleDateString();
    },
  },
};
</script>

<style lang="scss" scoped>
.aboutPurchaseOrder {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: right;
}
</style>
