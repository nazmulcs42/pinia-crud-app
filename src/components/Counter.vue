<template>
    <div class="border-1">
        <span class="alert alert-warning d-block"> Counter {{ count }}</span>
        <span class="alert alert-danger d-block">Double of Counter {{ doubleCount }}</span>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import { useCounterStore } from "../stores/counter";

    const counterStore = useCounterStore();
    const { count, doubleCount } = storeToRefs(counterStore);
</script>

<style scoped>

</style>