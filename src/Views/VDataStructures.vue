<template>
    <div class="px-2">
        <component :is="request?.component" :request="request" />
        <router-view @request="setRequest" />
    </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import ILinkedListRequest from "../Contracts/Interfaces/ILinkedListRequest"

let request: Ref<ILinkedListRequest> | Ref<undefined>  = ref()
    
function setRequest(headerRequest: ILinkedListRequest) {
    request.value = headerRequest
}


</script>

<style>
</style>