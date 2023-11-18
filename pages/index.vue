<template lang="">
    <div class="w-full h-full flex flex-col gap-6 overflow-y-scroll">
        <LayoutSection :items="items" title="Popular Radio" link="link" />
        <LayoutSection :items="items" title="Popular Artists" link="link" />
        <LayoutSection :items="items" title="Popular Albums" link="link" />

        <span class="text-gray-400 text-base lg:text-lg lg:font-semibold font-normal mt-1 mb-10 lg:mb-14 pb-2 text-center">&copy; 2023 Muse</span>
    </div>
</template>
<script setup>
const items = reactive([
  {
        title: 'Title One',
        desc: 'This is title one',
        poster: 'poster1'
    },
    {
        title: 'Title Two',
        desc: 'This is title two',
        poster: 'poster2'
    },
    {
        title: 'Title Three',
        desc: 'This is title three',
        poster: 'poster3'
    },
    {
        title: 'Title Four',
        desc: 'This is title four',
        poster: 'poster4'
    },
    {
        title: 'Title Five',
        desc: 'This is title five',
        poster: 'poster5'
    }
])


</script>
<style lang="">
    
</style>