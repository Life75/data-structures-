<template>
  <div class=" p-3 mr-12 space-y-3">
    <span class="w-14 text-2xl py-4">Linked List</span>
    <div>
      <el-button
        class="text-green-300 bg-[#1D1E1F] hover:border-green-300 hover:bg-[#1D1E1F]"
        type="primary"
        color="#1D1E1F"
        @click="popEvent()"
        >Pop</el-button
      >
    </div>
    <div>
      <el-button
        class="text-green-300 bg-[#1D1E1F] hover:border-green-300 hover:bg-[#1D1E1F]"
        type="primary"
        color="#1D1E1F"
        @click="pushEvent()"
        >Push</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from "vue";

var popIterator = ref(0);
var pushIterator = ref(0);

const emit = defineEmits<{
    (e: "pop-event", popIterator: number): void;
    (e: "push-event", pushIterator: number): void;
}>()

function popEvent() {
    popIterator.value++;
    emit("pop-event", popIterator.value)
    
}

function pushEvent() {
    pushIterator.value++;
    emit("push-event", pushIterator.value)
}
</script>
