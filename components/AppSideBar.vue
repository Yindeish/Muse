<template lang="">
    <div :class="`col-span-2 max-sm:fixed max-sm:h-[100vh] max-sm:bg-gray-900 md:hidden bg-transparent row-start-1 row-end-6 flex flex-col gap-3 items-center ${opened ? ' top-0 left-0 z-10' : 'top-0 left-[-100%]'}`">

        <div class=" w-full p-4 rounded-lg bg-gray-800 flex flex-col gap-6">
            <div class="flex justify-start items-center gap-4 max-sm:gap-1 cursor-pointer">
                <IconHome cls="text-white w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px]" />
                <nuxt-link class="text-lg font-bold text-white max-sm:text-base" to="/">Home</nuxt-link>
            </div>
            <div class="flex justify-start items-center gap-4 max-sm:gap-0 cursor-pointer">
                <IconSearch cls="text-gray-400 w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px]" />
                <input type="search" placeholder="Search" class="text-lg max-sm:text-base font-bold text-gray-400 bg-transparent border-2 focus:outline-none focus:border-gray-400 border-transparent p-2 max-sm:p-1 rounded-md w-full">
            </div>
        </div>

       <div class=" w-full p-4 rounded-lg bg-gray-800 flex flex-col gap-6">
            <div class="flex items-center justify-between">
                <div class="flex justify-start items-center gap-4 cursor-pointer">
                <IconLibrary cls="text-gray-400 w-[25px] h-[25px]" />
                <span class="text-lg font-bold text-gray-400">Your Library</span>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <IconPlus cls="text-gray-400 w-[25px] h-[25px] cursor-pointer" />
                    <IconArrowRight cls="text-gray-400 w-[25px] h-[25px] cursor-pointer" />
                </div>
            </div>

            <span class="text-white text-md font-normal rounded-full bg-gray-900 p-2 px-4 w-[fit-content] cursor-pointer">Podcasts & Shows</span>

            <div class="flex items-center justify-between">
                <div class="flex justify-start items-center gap-4 cursor-pointer">
                <IconSearch cls="text-gray-400 w-[25px] h-[25px]" />
                </div>
                <div class="flex justify-start items-center gap-4 cursor-pointer">
                    <span class="text-lg font-bold text-white">Recents</span>
                    <IconRecent cls="text-gray-400 w-[25px] h-[25px]" />
                </div>
            </div>

            <div class="w-full flex flex-col gap-3 items-center h-[28vh] overflow-y-scroll">
                <div class="w-full bg-gray-900 flex gap-3 justify-start items-center rounded-md p-2 cursor-pointer">
                    <div class="w-[50px] h-[50px] rounded-md overflow-hidden">
                        <img class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/ogw/AKPQZvw9hOaAosIwjnnU8bCyV5ru6yxGxZvADynOjmls1Q=s32-c-mo" alt="">
                    </div>
                    <div class="flex flex-col gap-3">
                        <span class="text-white">Mystty Talks</span>
                        <span class="text-gray-400 text-sm">Podcast . Misturah Akanbi</span>
                    </div>
                </div>
                <div class="w-full bg-gray-900 flex gap-3 justify-start items-center rounded-md p-2 cursor-pointer">
                    <div class="w-[50px] h-[50px] rounded-md overflow-hidden">
                        <img class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/ogw/AKPQZvw9hOaAosIwjnnU8bCyV5ru6yxGxZvADynOjmls1Q=s32-c-mo" alt="">
                    </div>
                    <div class="flex flex-col gap-3">
                        <span class="text-white">Mystty Talks</span>
                        <span class="text-gray-400 text-sm">Podcast . Misturah Akanbi</span>
                    </div>
                </div>
                <div class="w-full bg-gray-900 flex gap-3 justify-start items-center rounded-md p-2 cursor-pointer">
                    <div class="w-[50px] h-[50px] rounded-md overflow-hidden">
                        <img class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/ogw/AKPQZvw9hOaAosIwjnnU8bCyV5ru6yxGxZvADynOjmls1Q=s32-c-mo" alt="">
                    </div>
                    <div class="flex flex-col gap-3">
                        <span class="text-white">Mystty Talks</span>
                        <span class="text-gray-400 text-sm">Podcast . Misturah Akanbi</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="opened" @click="onPress" class="max-sm:fixed top-0 right-0 w-[100%] h-[100vh] z-[9] bg-transparent lg:hidden cursor-pointer"></div>
</template>
<script>
export default {
    props: {
        opened: {
            type: Boolean
        },
        onPress: {
            type: Function
        }
    }
}
</script>
<style lang="">
</style>