<template>
    <loading-spinner v-if="isLoading"></loading-spinner>
    <div class="container" v-if="!isLoading">
        <header-component header="Recargas y pagos"></header-component>
        <div class="balance">
            <div class="balance-info">         
                <balance-component :balance="balance"></balance-component>
                <information-component rechargeCode="1234567890"></information-component>
            </div>
            <option-list-component></option-list-component>
      </div>
    </div>
</template>
  
<script lang="ts">
    import { loadBalance } from '../services/services.service';
    import BalanceComponent from './BalanceComponent.vue';
    import HeaderComponent from './HeaderComponent.vue';
    import InformationComponent from './InformationComponent.vue';
    import LoadingSpinner from './LoadingSpinner.vue';
    import OptionListComponent from './OptionListComponent.vue';
  
    export default {
        components: {
            LoadingSpinner,
            BalanceComponent,
            HeaderComponent,
            InformationComponent,
            OptionListComponent
        },
        name: 'MainComponent',
        data() {
            return {
                token: '' as string,
                isLoading: true as boolean,
                error: '' as string,
                balance: '' as string
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
                    this.obtenerDatosSaldo();
                }
            },
            obtenerDatosSaldo() {
                loadBalance()
                .then(response => {
                    this.balance = response.data.data.balanceCommerce;
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
            }
        }
    };
</script>
  
<style scoped>
    .container {
      font-family: 'Arial', sans-serif;
    }
  
    .balance .balance-info {
      background-color: #ffffff;
      padding: 15px;
      margin-bottom: 15px;
      text-align: center;
    }
</style>