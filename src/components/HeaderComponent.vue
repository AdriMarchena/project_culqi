<template>
    <header class="header">
        <div class="div-header">
            <i class="fas fa-arrow-left icon-header" @click="goBack"></i>
            <span class="span-header">{{ header }}</span>
        </div>
    </header>
</template>


<script lang="ts">
    export default {
        props: {
            header: String
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .div-header {
        font-size: 22px;
        color: #ffffff;
        background-color: #000000;
        display: flex;
        text-align: center;
        padding: 5px 0;
        border-radius: 0px 0px 10px 10px;
        height: 40px;
    }
  
    .icon-header {
        width: 15%;
        margin-top: 7px;
        cursor: pointer;
    }
  
    .span-header {
        width: 75%;
    }
</style>