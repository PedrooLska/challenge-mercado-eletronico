<template>
  <div class="app">
    <div class="page" v-if="!loading">
      <OrganismsHeader />

      <div class="page__container">
        <OrganismsCardSupplier />

        <div class="page__container__column">
          <OrganismsCardAddress
            v-for="(item, index) in addresses"
            :address="item"
            :key="index"
          />
        </div>
      </div>
    </div>

    <AtomSpinner v-else />
  </div>
</template>

<script>
import OrganismsHeader from "./components/organisms/Header.vue";
import OrganismsCardSupplier from "./components/organisms/CardSupplier.vue";
import OrganismsCardAddress from "./components/organisms/CardAddress.vue";

import AtomSpinner from "./components/atoms/AtomSpinner.vue";

export default {
  components: {
    OrganismsHeader,
    OrganismsCardSupplier,
    OrganismsCardAddress,
    AtomSpinner,
  },
  created() {
    this.$store.dispatch("SET_PURCHASE_ORDER_DETAILS");
  },
  computed: {
    addresses() {
      return this.$store.state.data.addresses;
    },
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: none;
}

body {
  font-family: "Open Sans", sans-serif;
}

.page {
  &__container {
    padding: 0px 20px;
    margin: 0 auto;
    margin-top: 30px;

    &__column {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
      margin-top: 30px;
    }
  }
}
</style>
