<template>
  <div class="tablet:flex-3">
    <div class="flex flex-col relative border border-secondary">
      <div class="w-full h-44 bg-contain bg-no-repeat bg-gray-300 animate-pulse">
        <div class="mw-32 h-8 text-white justify-center flex items-center px-1 animate-pulse"></div>
      </div>
      <div class="w-full flex flex-col gap-1 px-5 py-4">
        <div class="text-20p w-32 h-3 rounded-md bg-gray-300 mb-1 animate-pulse"></div>
        <div class="text-16p w-56 h-3 rounded-md bg-gray-300 animate-pulse"></div>
        <div class="text-16p w-full h-3 rounded-md bg-gray-300 mt-3 animate-pulse"></div>
        <div class="text-14 w-44 h-2 rounded-md bg-gray-300 mt-1 animate-pulse"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HouseItemLoader',
}
</script>

<script setup>
const props = defineProps({
  loaderColor: {
    type: String,
    required: true,
    default: 'green'
  },
  loaderSize: {
    type: Number,
    required: false,
    default: 20
  }
})
</script>