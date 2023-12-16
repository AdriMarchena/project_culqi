<template>
    <div class="button-group">
        <button class="btn" :class="{ active: activeButton === 'todas' }" @click="setActive('todas')">
            <i class="fas fa-heart icon-card"></i>
            &nbsp;Todas
        </button>
        <button class="btn" :class="{ active: activeButton === 'favoritas' }" @click="setActive('favoritas')">
            <i class="fas fa-star icon-card"></i>
            &nbsp;Favoritas
        </button>
        <button class="btn" :class="{ active: activeButton === 'telefonia' }" @click="setActive('telefonia')">
            <i class="fas fa-phone"></i>
            &nbsp;Telefonía
        </button>
    </div>
</template>
  
<script lang="ts">
  export default {
    data() {
      return {
        activeButton: 'todas'
      };
    },
    methods: {
      setActive(button) {
        this.activeButton = button;
      }
    }
  };
</script>
  
<style scoped>
  .button-group {
    display: flex;
    gap: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
  
  .btn {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: white;
    cursor: pointer;
    outline: none;
    font-size: 13px;
  }
  
  .btn.active {
    border-color: #ff9500;
  }

  .icon-card {
    font-weight: 100;
    transform: scaleX(0.85);
  }
  
</style>