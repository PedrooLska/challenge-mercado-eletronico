<template>
  <header class="header">
    <MoleculeCardOrder
      class="header__card"
      :title="'Purchase Order'"
      :orderNumber="'4510001114'"
      :serialME="'SerialME 11223344'"
    />

    <AtomLogo class="header__logo" />

    <div class="header__about">
      <Contact />
      <AboutPurchaseOrder />
    </div>
  </header>
</template>

<script>
import MoleculeCardOrder from "../molecules/Header/MoleculeCardOrder";
import AtomLogo from "../atoms/AtomLogo";
import Contact from "../molecules/Header/MoleculeContact";
import AboutPurchaseOrder from "../molecules/Header/MoleculeAboutPurchaseOrder.vue";

export default {
  components: {
    MoleculeCardOrder,
    AtomLogo,
    Contact,
    AboutPurchaseOrder,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  margin-top: 17px;
  position: absolute;

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

@media screen {
}
</style>
