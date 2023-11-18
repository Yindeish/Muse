<template lang="">
    <div class="bg-black grid grid-cols-6 grid-rows-6 gap-2 w-full h-[100vh] m-0 p-2">
        <AppSideBar :opened="opened" :onPress="closeSideBar" />
        <div class="bg-gray-700 col-span-4 max-sm:col-span-full row-start-1 row-end-6 rounded-lg maxh-[50vh] overflow-y-hidden">
            <AppHeader :onPress="openSideBar" />
            <slot></slot>
        </div>
        <AppFooter />
    </div>
</template>
<script setup>
    const opened = ref(false);

const openSideBar = () => {
    opened.value = true;
}

const closeSideBar = () => {
        opened.value = false;
    }
</script>
<style lang="">
    
</style>