<template>
  <router-link :to="`/details/${house.id}`" class="tablet:flex-3">
    <div class="flex flex-col relative border border-secondary">
      <div class="w-full h-44 bg-cover bg-center flex flex-col items-end justify-end" :style="{backgroundImage:`url(https://via.placeholder.com/300x150/D4D4D8/FFFFFF?text=${house.title.split(' ').join('')})`}">
        <div class="mw-32 h-8 text-white justify-center flex items-center px-1" :class="{'bg-cyan-800': houseType, 'bg-orange-600': !houseType}">
          {{ !houseType ? 'Restaurant & Support available' : 'Independent living' }}
        </div>
      </div>
      <div class="w-full flex flex-col gap-1 px-5 py-4">
        <div class="text-20p text-black font-bold">{{house.title}}</div>
        <div class="text-16p text-black">{{house.address}}</div>
        <div class="text-16p text-black mt-2"> New Properties for Sale from £ <span class="font-bold">{{house.price}}</span></div>
        <div class="text-14 text-black "> Shared Ownership Available</div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'HouseItem',
}
</script>
<script setup>
const props = defineProps({
  house: {
    type: Object,
    required: true,
  },
  houseType: {
    type: Boolean,
    required: true,
  }
})
</script>