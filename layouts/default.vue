<template lang="">
    <div class="bg-black grid grid-cols-6 grid-rows-6 gap-2 w-full h-[100vh] m-0 p-2">
        <AppSideBar />
        <div class="bg-gray-700 col-span-4 row-start-1 row-end-6 rounded-lg maxh-[50vh] overflow-y-hidden">
            <AppHeader />
            <slot></slot>
        </div>
        <AppFooter />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>