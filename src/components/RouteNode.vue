<template>
    <div id="route-child">
        <div class="collapse">
            <input type="checkbox" class="peer" />
            <div
                class="collapse-title bg-base-100  justify-start text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Click me to show/hide content
            </div>
            <div
                class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                <p>hello</p>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
//make this node fall through with recursion inside of this div itself 
const props = defineProps({

})
</script>