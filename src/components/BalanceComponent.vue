<template>
  <div class="title-with-icon">
      <span class="title">Saldo virtual</span>
      <i class="fas fa-info-circle info-icon"></i>
  </div>
  <div class="balance-amount-with-icon">
      <div class="loading" v-if="isLoading">
        <loading-spinner class="spinner"></loading-spinner>
      </div>
      <h2 class="amount" v-if="!isLoading">S/ {{ balance }}</h2>
      <i class="fas fa-sync reload-icon" @click="reloadBalance"></i>
  </div>
</template>

<script lang="ts">
  import LoadingSpinner from './LoadingSpinner.vue';
  export default {
    components: {
      LoadingSpinner,
    },
    props: {
      balance: String,
      isLoading: Boolean
    },
    methods: {
      reloadBalance() {
        this.$emit('reloadBalance');
      }
    }
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
    cursor: pointer;
  }

  .loading {
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    width: 25px;
    height: 25px;
  }
</style>