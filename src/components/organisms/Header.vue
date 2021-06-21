<template>
  <header class="header">
    <MoleculeCardOrder class="header__card" />

    <AtomLogo class="header__logo" />

    <div class="header__about">
      <MoleculeContact />
      <MoleculeAboutPurchaseOrder />
    </div>
  </header>
</template>

<script>
import MoleculeCardOrder from "../molecules/Header/MoleculeCardOrder";
import AtomLogo from "../atoms/AtomLogo";
import MoleculeContact from "../molecules/Header/MoleculeContact";
import MoleculeAboutPurchaseOrder from "../molecules/Header/MoleculeAboutPurchaseOrder.vue";

export default {
  name: "Header",
  components: {
    MoleculeCardOrder,
    AtomLogo,
    MoleculeContact,
    MoleculeAboutPurchaseOrder,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  margin-top: 16px;

  &__logo {
    position: relative;
    right: 35px;
  }

  &__about {
    display: flex;
    justify-content: space-between;
    flex: 1;
    height: 90px;
    margin-left: -20px;
    padding-right: 20px;
  }
}
</style>
