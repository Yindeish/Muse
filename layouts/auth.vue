<template lang="">
    <div class="">
        <slot></slot>
    </div>
</template>
<script setup>
const router = useRouter();

onBeforeMount(() => {
    console.log('before munt');
    if (!localStorage.getItem('loggedinUser')) {
        router.push('/login');
    }

})
</script>
<style lang="">
    
</style>