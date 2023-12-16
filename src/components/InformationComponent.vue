<template>
    <button class="balance-load-btn">
        <i class="fas fa-heart heart-icon"></i>
        ¿Cómo cargar mi saldo virtual?
    </button>
    <div class="code">
        <span>Código para cargar tu saldo: </span>&nbsp;
        <span class="code-text">{{ rechargeCode }}</span>
    </div>
</template>

<script lang="ts">
  export default {
      props: {
        rechargeCode: String
      },
  }
</script>

<style scoped>
    .balance-load-btn {
        background-color: #ffffff;
        border: 1px solid #CCCCCC;
        border-radius: 15px;
        color: #00A7A7;
        padding: 0px 16px;
        font-size: 14px;
        cursor: pointer;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        margin-left: 12px;
        height: 30px;
    }

    .heart-icon {
        border: none;
        font-size: 15px;
        color: #00A7A7;
        font-weight: 100;
        transform: scaleX(0.85);
    }

    .code {
        display: flex;
        margin-top: 16px;
        margin-left: 12px;
        color: #676767;
    }

    .code-text {
        color: #00A7A7;
        font-weight: bold;
    }

</style>