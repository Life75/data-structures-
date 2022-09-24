<template>
    <div>Head over</div> <!--Setup where you can view a header that will emit events to update from the components, will need interface on what data to emit to VSorting Component TODO-->
    <RouterView>
    </RouterView>
            <!--Make a component for the header for Sorting that way to deal with this problem -->

</template>


<script setup lang="ts">
import BubbleSort from "../components/Algo/BubbleSort.vue";

</script>