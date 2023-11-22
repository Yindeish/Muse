<template lang="">
    <div class="flex justify-between items-center px-3 py-2">

        <div class="flex gap-2 items-center">
        <div @click="backward" class="rounded-full  w-[25px] h-[25px] max-sm:w-[23px] max-sm:h-[23px] bg-gray-800 hover:bg-gray-800 cursor-pointer flex items-center justify-center active:scale-95">
                <IconChevronLeft cls="text-white  w-[20px] h-[20px] max-sm:w-[18px] max-sm:h-[18px]" />
            </div>
        <div @click="forward" class="rounded-full  w-[25px] h-[25px] max-sm:w-[23px] max-sm:h-[23px] bg-gray-800 hover:bg-gray-800 cursor-pointer flex items-center justify-center active:scale-95">
                <IconChevronRight cls="text-white  w-[20px] h-[20px] max-sm:w-[18px] max-sm:h-[18px]" />
            </div>

            <span class="text-white font-base text-lg">{{`${ currentSegment !== '' ? currentSegment[0].toUpperCase() : ''}${currentSegment !== '' ? currentSegment.slice(1) : ''}`}}</span>
        </div>

        <nuxt-link class="text-white font-bold max-sm:text-sm text-3xl" to="/">Muse</nuxt-link>


        <div class="flex items-center gap-3">
            <div class="w-[25px] h-[25px] bg-gray-800 rounded-full flex items-center justify-center">
                <IconBell cls="w-[20px] text-white cursor-pointer" />
            </div>
            <div @click="toggleLogout" class="w-[25px] h-[25px] max-sm:w-[20px] max-sm:h-[20px] bg-gray-800 rounded-full flex items-center justify-center relative">
                <IconPerson cls="w-[20px] text-white cursor-pointer" />
                <span v-if="logoutShown" @click="logout" class="text-black bg-white rounded-md p-2 font-sans text-bold absolute top-[100%] right-0 cursor-pointer z-10">logout</span>
            </div>
            <div @click="onPress">
                <IconHamburger cls="lg:hidden xl w-[20px] text-white cursor-pointer active:w-[18px]" />
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps(['onPress']);
const router = useRouter();
const logoutShown = ref(false);

const currentSegment = ref('');

const toggleLogout = () => {
    logoutShown.value = !logoutShown.value;
}

const logout = () => {
    localStorage.removeItem('loggedinUser');
    router.replace('/login')
}

const forward = () => {
    router.forward()
}
const backward = () => {
    router.back()
}

onMounted(() => {
    const segment = useRequestURL().pathname;
    currentSegment.value = segment.split("/")[1];
})

</script>
<style lang="">
    
</style>