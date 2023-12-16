<template>
    <div class="card-container" @click="goToNextScreen">
        <div class="icon-container">
            <i class="fas fa-mobile-alt"></i>
        </div>
        <div class="text-container">Recargas</div>
    </div>
    <div class="card-container">
        <div class="icon-container">
            <i class="fas fa-lightbulb icon-card"></i>
        </div>
        <div class="text-container">Pago de servicios</div>
    </div>
    <div class="card-container">
        <div class="icon-container">
            <i class="fas fa-chart-bar icon-card"></i>
        </div>
        <div class="text-container">Historial de ganancias y operaciones</div>
    </div>
</template>

<script lang="ts">
    export default {
        methods: {
            goToNextScreen()  {
                this.$router.push('/listSuppliersComponent');
            }
        }
    }
</script>

<style scoped>
    .card-container {
        display: flex;
        align-items: center;
        background-color: #f5f5f5;
        border-radius: 6px;
        padding: 10px 20px;
        color: #FF9500;
        font-size: 19px;
        margin-bottom: 20px;
        cursor: pointer; 
    }
  
    .icon-container {
        padding: 5px 10px;
        background: #FF9500;
        border-radius: 3px;
        color: #ffffff;
    }
  
    .text-container {
        margin-left: 20px;
        color: #000000;
    }
  
    .icon-card {
        font-weight: 100; /* Hace el icono más fino */
        transform: scaleX(0.85); /* Comprime el ícono horizontalmente para que se vea más delgado */
    }
</style>