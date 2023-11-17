<template lang="">
    <div class="w-full h-full pb-6 flex flex-col gap-6 overflow-y-scroll">
        <LayoutSection :items="items" title="title1" link="link" />
        <LayoutSection :items="items" title="title2" link="link" />
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