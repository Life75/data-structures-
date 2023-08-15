<template>
    <div>
    <h1>404 page Not Found</h1>
    <p>Sorry, the page you are looking for doesn't exist</p>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import router from '../router';

var lastPath = ref()

onMounted(() => {
    router.router.beforeEach((from, to, next) => {
        console.log(from)
    })
    lastPath.value = router.router.options.history.state.back
    router.router.push(``)
    //router.router.push(prevRoutePatch())
    //console.log(lastPath)
})


function prevRoutePatch (): string {
    return lastPath.value ? lastPath.value : '/'
}

</script>