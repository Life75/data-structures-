<template>
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text text-neutral-200">{{ label }}</span>
      </label>
      <input 
        type="number" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event)"
        class="input input-bordered bg-base-300/30 backdrop-blur-md w-full max-w-xs text-neutral-200 focus:outline-none focus:border-green-400 transition-all"
        :placeholder="placeholder"
      />
    </div>
</template>

<script setup lang="ts">
defineProps({
    modelValue: Number,
    label: String,
    placeholder: String
})



defineEmits(['update:modelValue'])
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>