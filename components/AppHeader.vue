<template lang="">
    <div class="flex justify-between items-center px-3 py-2">
        <nuxt-link class="text-white font-bold max-sm:text-sm text-3xl" to="/">Muse</nuxt-link>

        <div class="flex items-center gap-3">
            <div class="w-[25px] h-[25px] bg-gray-800 rounded-full flex items-center justify-center">
                <IconBell cls="w-[20px] text-white cursor-pointer" />
            </div>
            <div class="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] bg-gray-800 rounded-full flex items-center justify-center">
                <IconPerson cls="w-[20px] text-white cursor-pointer" />
            </div>
            <div @click="onPress">
                <IconHamburger cls="lg:hidden xl w-[20px] text-white cursor-pointer active:w-[18px]" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        onPress: {
            type: Function
        }
    }
}
</script>
<style lang="">
    
</style>