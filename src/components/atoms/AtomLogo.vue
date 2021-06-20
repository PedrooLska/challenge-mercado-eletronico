<template>
  <div class="logo">
    <img class="logo__img" src="../../assets/img/logo.png" alt="Logo" />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $white-primary;
  border: solid $blue-dark 2px;
  border-radius: 50px;
  width: 60px;
  height: 60px;

  &__img {
    width: 35px;
  }
}
</style>
