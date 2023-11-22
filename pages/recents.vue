<template lang="">
    <div class="w-full h-full flex justify-center">
        <span class="text-2xl text-white font-sans font-semibold">No Recents</span>
    </div>
</template>
<script setup>
onBeforeMount(() => {
    if (!localStorage.getItem('loggedinUser')) {
        router.push('/login')
    }
})
</script>
<style lang="">
    
</style>