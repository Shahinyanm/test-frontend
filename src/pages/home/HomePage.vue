<template>
  <div class="max-w-7xl mx-auto py-12 cursor-pointer pb-14	px-10">
    <div class="w-full flex items-center justify-center mb-11">
      <div class="text-main text-[36px] font-medium">Our Latest Developments</div>
    </div>
    <div class="w-full flex items-center justify-start mb-11">
      <div class="w-full flex items-center justify-start gap-4">
        <div class="text-black text-[16px] font-medium">Filter</div>
        <div class="flex items-center justify-start">
          <div class="flex justify-center">
            <div class="xl:w-96">
              <input
                type="text"
                class="rounded-full form-control block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none "
                v-model="searchQuery"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center gap-10 flex-wrap">
      <template v-if="isLoading">
        <house-item-loader v-for="i in 3" :key="i"/>
      </template>

      <template v-else>
        <house-item
            v-for="house in getFilteredHomes"
            :key="house.id"
            :house="house"
            :house-type="houseType(house)"
        />
      </template>
    </div>

    <div v-if="!isLoading" class="w-32 mx-auto flex rounded-full form-control block w-full px-4 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 hover:text-green-700 focus:bg-white hover:border-green-600 hover:outline-none  mt-14">
      See more
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { HomeService } from '@/service/home/home.service'
import HouseItem from '@/components/pages/home/HouseItem'
import HouseItemLoader from '@/components/pages/home/HouseItemLoader.vue'

const homes = reactive([])
const isLoading = ref(true)
const searchQuery = ref('')
const getFilteredHomes = computed(()=>{
  return searchQuery.value.length >= 3 ? homes.filter(item => item.title.toLowerCase().includes(searchQuery.value.toLowerCase())): homes
})
const houseType = (house) => {
  return house.title.length > 10
}

onMounted(async () => {
  HomeService.fetchHomes().then((houses) => {
    homes.push(...houses)

    isLoading.value = false
  })
})
</script>