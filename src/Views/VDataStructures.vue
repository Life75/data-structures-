<template>
    <div class="flex">
        <!--Dependent on the class currently in place it will need to switch to different header components-->
        <LinkedListHeaderUI></LinkedListHeaderUI>
        <RouterView class="flex w-3/4" @ui-header-request="" />
    </div>
</template>

<script setup lang="ts">
import LinkedListHeaderUI from '../components/LinkedListHeaderUI.vue';


</script>

<style>
</style>