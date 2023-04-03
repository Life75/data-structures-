<template>
    <div class="flex">
        <!--Dependent on the class currently in place it will need to switch to different header components-->
        <LinkedListHeaderUI v-show="currentHeader == Header.LinkedList"></LinkedListHeaderUI>
        <RouterView class="flex w-3/4" @ui-header-request="setHeader" />
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { Header } from '../Contracts/Classes/Headers';
import LinkedListHeaderUI from '../components/LinkedListHeaderUI.vue';

var currentHeader = ref(0)

function setHeader(header: Header) {
    console.log(Header.LinkedList)
    currentHeader.value = header
}
</script>

<style>
</style>