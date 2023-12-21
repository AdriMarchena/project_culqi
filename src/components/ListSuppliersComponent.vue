<template>
  <loading-spinner v-if="isLoading"></loading-spinner>
  <div class="container" v-if="!isLoading">
    <header-component header="Recargas"></header-component>
    <search-component @sendData="getData"></search-component><br>
    <filters-component></filters-component><br>
    <div class="provider-list">
      <div v-for="provider in providers" :key="provider._id" class="provider-card">
        <div class="provider-icon">
          <img :src="provider.image">
        </div>
        <div class="provider-details">
          <h3>{{ provider.company }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { getSuppliers } from '../services/services.service';
  import { Supplier } from '../interfaces/supplier.interface';
  import LoadingSpinner from './LoadingSpinner.vue';
  import SearchComponent from './SearchComponent.vue';
  import FiltersComponent from './FiltersComponent.vue';
  import HeaderComponent from './HeaderComponent.vue';

  export default defineComponent({
    components: {
      LoadingSpinner,
      SearchComponent,
      FiltersComponent,
      HeaderComponent
    },
    name: 'ListSuppliersComponent',
    data() {
      return {
        token: '' as string,
        isLoading: true as boolean,
        error: '' as string,
        providers: [] as Supplier[]
      };
    },
    created() {
      this.token = sessionStorage.getItem('token') || '';
      this.verifyToken();
    },

    methods: {
      verifyToken(): void {
        if (!this.token) {
          this.error = 'No autorizado (401)';
          this.isLoading = false;
          this.$router.push('/error');
        } else {
          this.getSupplierList();
        }
      },
      getSupplierList() {
        getSuppliers()
          .then(response => {
            this.providers = response.data.data.companies;
            this.providers.splice(8, 2);
            this.isLoading = false;

          })
          .catch(error => {
            if (error.response && error.response.status === 401) {
              this.error = 'Error 401: No autorizado.';
              console.log('error', this.error);
              this.isLoading = false;
            } else {
              // Manejar otros tipos de errores
              this.error = 'Error al cargar el saldo.';
              console.log('error', this.error);
              this.isLoading = false;
            }
          });
      },
      getData(value: string) {
        console.log('Evento recibido con:', value);
        this.providers.filter(provider => 
          provider.company.includes(value)
        );
        console.log('conjunto', this.providers);
      }
    }
  });
</script>

<style scoped>
  .container {
    font-family: 'Arial', sans-serif;
  }
  .provider-card {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer; 
  }

  .provider-card:last-child {
    border-bottom: none;
  }
  .provider-icon {
    margin-left: 20px;
    margin-right: 20px;
  }
  .provider-details {
    flex-grow: 1;
    display: flex;
    margin-left: 15px;
  }
</style>