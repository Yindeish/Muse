<template lang="">
    <div class="flex flex-col gap-5 px-4 py-3">
        <div class="flex justify-between items-center">
            <div class="text-white font-bold text-lg">{{title}}</div>
            <nuxt-link class="text-gray-400 font-normal text-md border-b-2 border-transparent hover:border-white" :to="link">Show all</nuxt-link>
        </div>

        <div class="w-full flex gap-3 overflow-x-scroll py-2">
            <div :class="`w-[${items.length}%] flex gap-2`">
                <div v-for="item in items" class="item-container flex flex-col rounded-md hover:bg-gray-400 bg-gray-800 p-3 w-[13rem] h-[18rem]">
                <!-- Item poster -->
                <div class="w-full flex-[0.95] rounded-md overflow-hidden relative">
                    <img class="w-full h-full object-cover" :src="item.poster" />
                    <!-- Video icon -->
                    <div class="play-btn-container absolute bottom-2 right-2 cursor-pointer">
                        <IconPlay cls="w-[50px] h-[50px] active:w-[45px] active:h-[45px]" />
                    </div>
                </div>

                <!-- Item description -->
                <div class="flex flex-col gap-2">
                    <span>{{item.title}}</span>
                    <span>{{item.desc}}</span>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        items: {
            type: Array
        }
    }
}
</script>
<style lang="" scoped>
    /* .play-btn-container {
        display: none;
    }

    .item-container:hover .play-btn-container {
        display: block;
    } */
</style>