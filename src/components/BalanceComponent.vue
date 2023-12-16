<template>
  <div class="title-with-icon">
      <span class="title">Saldo virtual</span>
      <i class="fas fa-info-circle info-icon"></i>
  </div>
  <div class="balance-amount-with-icon">
      <h2 class="amount">S/ {{ balance }}</h2>
      <i class="fas fa-sync reload-icon"></i>
  </div>
</template>

<script lang="ts">
  export default {
      props: {
        balance: String
      },
  }
</script>

<style scoped>
  .title-with-icon {
    display: flex;
    align-items: center;
    margin-left: 12px;
  }

  .title {
    color: #000000;
  }

  .info-icon {
    color: #00A7A7;
    margin-left: 10px;
  }

  .balance-amount-with-icon {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 70px;
    margin-left: 12px;
  }

  .amount {
    font-size: 35px;
    font-weight: bold;
    color: #000;
    margin-right: 10px;
  }

  .reload-icon {
    font-size: 20px;
    color: #00A7A7;
    transform: scaleX(0.85);
  }
</style>