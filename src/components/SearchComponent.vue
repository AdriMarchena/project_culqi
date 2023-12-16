<template>
    <br><span class="span-title">Buscar empresa</span>
    <div class="search-bar">
      <input
        v-model="searchTerm"
        @keyup.enter="performSearch"
        placeholder="ej. Culqi"
        type="text"
        class="search-input"
      />
      <button @click="performSearch" class="search-button">
        <i class="fas fa-search"></i>
      </button>
    </div>
</template>
  
<script lang="ts">
    export default {
        data() {
            return {
                searchTerm: ''
            };
        },
        methods: {
            performSearch() {
                // Lógica para realizar la búsqueda
                console.log('Buscando:', this.searchTerm);
            }
        }
    };
</script>
  
<style scoped>
    .span-title {
        font-weight: bold;
        display: flex;
        margin-left: 10px;
        font-size: 12px
    }
    .search-bar {
        display: flex;
        align-items: center;
        border: 1px solid #eeeeee;
        border-radius: 4px;
        padding: 5px 10px;
        background: #eeeeee;
        margin-left: 10px;
        margin-right: 10px
    }
    
    .search-input {
        border: none;
        outline: none;
        flex-grow: 1;
        padding: 5px 10px;
        background: #eeeeee;
    }
    
    .search-button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        padding: 5px 10px;
    }
    
    .search-button .fas {
        color: #ff9500;
    }
</style>