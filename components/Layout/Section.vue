<template lang="">
    <div class="flex flex-col gap-5 px-4 py-3">
        <div class="flex justify-between items-center">
            <div class="text-white font-bold text-lg">{{title}}</div>
            <nuxt-link class="text-gray-400 font-normal text-md border-b-2 border-transparent hover:border-white" :to="link">Show all</nuxt-link>
        </div>

        <div class="w-full flex gap-3 overflow-x-scroll py-2">
            <div :class="`w-[${items.length}%] flex gap-2`">
                <!-- Desktop -->
                <div @click="navigateTo('/playlist')" v-for="item in items" class="item-container flex flex-col gap-2 rounded-md hover:bg-gray-950 bg-gray-900 p-3 pb-1 w-[13rem] h-[17rem] cursor-pointer max-sm:hidden playlist-container--desktop">
                    <!-- Item poster -->
                    <div class="w-full flex-[0.95] rounded-md overflow-hidden relative">
                        <img class="w-full h-full object-cover" :src="item.poster" />
                        <!-- Video icon -->
                        <div class="play-btn-container absolute z-10 bottom-2 right-2 cursor-pointer text-gray-400 playlist-play-icon--desktop">
                            <IconPlay cls="w-[50px] h-[50px] active:w-[45px] active:h-[45px]" />
                        </div>
                    </div>

                    <!-- Item description -->
                    <div class="flex flex-col gap-2 max-sm:hidden">
                        <span class="text-gray-200">{{item.title}}</span>
                        <span class="text-gray-400">{{item.desc}}</span>
                    </div>
                </div>
                <!-- Desktop -->

                <!-- Mobile -->
                <div v-for="item in items" class="item-container rounded-md hover:bg-gray-950 bg-gray-900 p-0 w-[13rem] h-[14rem] overflow-hidden playlist-container--mobile">
                    <!-- Item poster -->
                    <div class="w-full h-full rounded-md overflow-hidden relative">
                        <img class="w-full h-full object-cover" :src="item.poster" />
                        <!-- Video icon -->
                        <div class="play-btn-container absolute bottom-2 right-2 cursor-pointer text-gray-400 playlist-play-icon--mobile">
                            <IconPlay cls="w-[50px] h-[50px] active:w-[45px] active:h-[45px]" />
                        </div>
                        <!-- Item description -->
                        <div class="flex flex-col gap-2 absolute bottom-2 left-2 playlist-desc--mobile">
                            <span class="text-gray-200">{{item.title}}</span>
                            <span class="text-gray-400">{{item.desc}}</span>
                        </div>
                    </div>
                </div>
                <!-- Mobile -->
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['title', 'link', 'items']);
const router = useRouter();

const navigateTo = (where) => {
    router.push(where);
}
</script>
<style lang="css" scoped>
    .playlist-play-icon--desktop {
        opacity: 0;
        transition: 0.25s linear all;
   }

   .playlist-container--desktop:hover .playlist-play-icon--desktop {
        opacity: 1;
   }

   .playlist-play-icon--mobile,
   .playlist-desc--mobile {
    opacity: 0;
    transition: 0.25s linear all;
   }

   .playlist-container--mobile:hover .playlist-play-icon--mobile,
   .playlist-container--mobile:hover .playlist-desc--mobile {
        opacity: 1;
   }
</style>