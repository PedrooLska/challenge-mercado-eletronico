<template>
  <div>
    <teste />
  </div>
</template>

<script>
import teste from "./components/organisms/Header";

export default {
  components: {
    teste,
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

.cardOrder {
  background-color: $blue-primary;
}
</style>
