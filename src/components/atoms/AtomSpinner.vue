<template>
  <div class="grid">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style lang="scss" scoped>
.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .spinner {
    border: 8px solid rgba(0, 0, 0, 0.1);
    border-left-color: $blue-primary;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    animation: spin 2s linear infinite;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
