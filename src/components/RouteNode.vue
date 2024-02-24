<template>
     <div v-if="route.children != undefined" class="collapse ">
                        <input type="checkbox" class="peer " />
                        <div class="collapse-title justify-start text-primary-content flex align-middle ">
                            <svg v-show="route.children != undefined" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-down mt-1 mr-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                            </svg>
                            <p class="text-white" @click="router.router.push(route.meta?.fullPath)">{{ route.name }}</p>
                        </div>
                        <div class="collapse-content bg-base text-primary-content ">
                            <v-list>
                                <v-list-item v-if="route.children != undefined" v-for="(children , i) in route.children">
                                    <RouteNode :route="children"></RouteNode>
                                </v-list-item>
                            </v-list>
                        </div>
        </div>
        <div v-else>
            <p @click="router.router.push({path: route.meta?.fullPath})"> {{ route.name }}</p>
        </div>
</template>


<script setup lang="ts">
import RouterRecordRaw  from 'vue-router';
import router from '../router';

//make this node fall through with recursion inside of this div itself 
const props = defineProps(['route'])

</script>