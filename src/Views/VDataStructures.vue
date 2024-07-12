<template>
    <div class="px-2">
        <!--Dependent on the class currently in place it will need to switch to different header components-->
        <!--<LinkedListHeaderUI @pop-event="popEvent" @push-event="pushEvent" v-show="currentHeader == Header.LinkedList"></LinkedListHeaderUI>
        <component/>    

        -->
        <component :is="request?.component" :request="request" />
        <router-view @request="setRequest" />
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import IHeaderRequest from "../Contracts/Interfaces/IHeaderRequest"
let request: Ref<IHeaderRequest<unknown>> | Ref<undefined>  = ref()

function setRequest(headerRequest: IHeaderRequest<unknown>) {
    request.value = headerRequest
}


</script>

<style>
</style>