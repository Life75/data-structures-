<template>
    <div class="flex">
        <!--Dependent on the class currently in place it will need to switch to different header components-->
        <LinkedListHeaderUI @pop-event="popEvent" @push-event="pushEvent" v-show="currentHeader == Header.LinkedList"></LinkedListHeaderUI>
        <RouterView :linkedListAttributes="linkedListAttributes" class="flex w-3/4" @ui-header-request="setHeader" />
    </div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue';
import { Header } from '../Contracts/Classes/Headers';
import LinkedListHeaderUI from '../components/LinkedListHeaderUI.vue';
import LinkedListHeader from '../Contracts/Interfaces/LinkedListAttributes';

var currentHeader = ref(0)



var linkedListAttributes = ref<LinkedListHeader>({ popIterator: 0, pushIterator:  0, latestAction: ''}) 

function setHeader(header: Header) {
    currentHeader.value = header
}

function popEvent(iterator: number) {
    linkedListAttributes.value.popIterator++;
    linkedListAttributes.value.latestAction = 'pop'
}

function pushEvent(iterator: number) {
    linkedListAttributes.value.pushIterator++;
    linkedListAttributes.value.latestAction = 'push'
}

</script>

<style>
</style>