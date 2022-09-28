<template>
    <el-popover placement="top-start" title="Title" :width="200" trigger="hover"
        content="Some number here">
        <template #reference>
            <div class="border-l-4 border-green-500 h-52"> </div>
        </template>
    </el-popover>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "VerticalNode"
})
</script>