<template lang="">
    <div :class="`col-start-1 col-span-2 max-sm:w-[70%] max-sm:fixed max-sm:h-[100vh] max-sm:bg-gray-900 bg-transparent row-start-1 row-end-6 flex flex-col gap-3 items-center ${opened ? ' top-0 left-0 z-10' : 'top-0 left-[-100%]'}`">

        <div class=" w-full p-4 max-sm:p-2 rounded-lg bg-gray-800 flex flex-col gap-6">
            <div class="flex justify-start items-center gap-4 max-sm:gap-1 cursor-pointer">
                <IconHome cls="text-white w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px]" />
                <nuxt-link class="text-lg font-bold text-white max-sm:text-base" to="/">Home</nuxt-link>
            </div>
            <div class="flex justify-start items-center gap-4 max-sm:gap-0 cursor-pointer">
                <IconSearch cls="text-gray-400 w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px]" />
                <input type="search" placeholder="Search" class="text-lg max-sm:text-base font-bold text-gray-400 bg-transparent border-2 focus:outline-none focus:border-gray-400 border-gray-700 p-2 max-sm:p-1 rounded-md w-full">
            </div>
        </div>

       <div class=" w-full p-4 max-sm:p-2 rounded-lg bg-gray-800 flex flex-col gap-6">
            <div class="flex items-center justify-between">
                <div class="flex justify-start items-center gap-4 max-sm:gap-1 cursor-pointer">
                <IconLibrary cls="text-gray-400 w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px]" />
                <span class="text-lg font-bold text-gray-400 max-sm:text-base">Your Library</span>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <IconPlus cls="text-gray-400 w-[25px] h-[25px] cursor-pointer" />
                    <IconArrowRight cls="text-gray-400 w-[25px] h-[25px] cursor-pointer" />
                </div>
            </div>

            <span class="text-white text-md font-normal rounded-full bg-gray-900 p-2 px-4 w-[fit-content] cursor-pointer max-sm:text-sm">Podcasts & Shows</span>

            <div class="flex max-sm:flex-col items-center max-sm:items-start justify-between max-sm:gap-2">
                <div class="flex justify-start items-center gap-4 cursor-pointer max-sm:order-2">
                <IconSearch cls="text-gray-400 w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px]" />
                <input type="search" class="text-lg max-sm:text-base font-bold text-gray-400 bg-transparent border-2 focus:outline-none focus:border-gray-400 border-gray-700 p-2 max-sm:p-1 rounded-md w-full">
                </div>
                <div class="flex justify-start items-center gap-4 cursor-pointer max-sm:order-1">
                    <span class="text-lg font-bold text-white max-sm:text-base">Recents</span>
                    <IconRecent cls="text-gray-400 w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px]" />
                </div>
            </div>

            <div class="w-full flex flex-col gap-3 max-sm:gap-1 items-center h-[28vh] overflow-y-scroll">
                <div v-if="recents" v-for="item in recents" class="w-full bg-gray-900 flex gap-3 max-sm:gap-1 justify-start items-center rounded-md p-2 max-sm:p-1 cursor-pointer">
                    <div class="w-[50px] h-[50px] rounded-md overflow-hidden">
                        <img class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/ogw/AKPQZvw9hOaAosIwjnnU8bCyV5ru6yxGxZvADynOjmls1Q=s32-c-mo" alt="">
                    </div>
                    <div class="flex flex-col gap-3">
                        <span class="text-white max-sm:text-sm">Mystty Talks</span>
                        <span class="text-gray-400 text-sm">Podcast . Misturah Akanbi</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="opened" @click="onPress" class="max-sm:fixed top-0 right-0 w-[100%] h-[100vh] z-[9] bg-transparent lg:hidden cursor-pointer"></div>
</template>
<script setup>

const props = defineProps(['opened', 'onPress'])
const recents = ref(null);

const state = ref('pending');
</script>
<style lang="">
</style>