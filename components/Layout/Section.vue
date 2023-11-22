<template lang="">
    <div class="flex flex-col gap-5 px-4 py-3">
        <div class="flex justify-between items-center">
            <div class="text-white font-bold text-lg">{{title}}</div>
            <nuxt-link class="text-gray-400 font-normal text-md border-b-2 border-transparent hover:border-white" :to="link">Show all</nuxt-link>
        </div>

        <div class="w-full flex gap-3 overflow-x-scroll py-2">
            <div v-if="items && state !== 'loading'" :class="`w-[${items?.length}%] flex gap-2`">
                <!-- Desktop -->
                <nuxt-link :to="`http://localhost:3001${link}/${item?.track?.album?.id}/${item?.track?.preview_url}`" v-for="item in items" class="item-container flex flex-col gap-2 rounded-md hover:bg-gray-950 bg-gray-900 p-3 pb-1 w-[13rem] h-[17rem] cursor-pointer max-sm:hidden playlist-container--desktop">
                <!-- <div @click="goto(`http://localhost:3000${link}/${item?.track?.album?.id}`,`${item?.track?.preview_url}`)" v-for="item in items" class="item-container flex flex-col gap-2 rounded-md hover:bg-gray-950 bg-gray-900 p-3 pb-1 w-[13rem] h-[17rem] cursor-pointer max-sm:hidden playlist-container--desktop"> -->
                    <!-- Item poster -->
                    <div :class="`w-[${item?.track?.album?.images[0]?.width ?? '100%'} h-[${item?.track?.album?.images[0]?.width ?? '100%'} flex-[0.95] rounded-md overflow-hidden relative`">
                        <img class="w-full h-full object-cover" :src="item?.track?.album?.images[0]?.url" />
                        <!-- Video icon -->
                        <div class="play-btn-container absolute z-10 bottom-2 right-2 cursor-pointer text-gray-400 playlist-play-icon--desktop">
                            <IconPlay cls="w-[50px] h-[50px] active:w-[45px] active:h-[45px]" />
                        </div>
                    </div>

                    <!-- Item description -->
                    <div class="flex flex-col gap-2 max-sm:hidden">
                        <span class="text-gray-200">{{item?.track?.name}}</span>
                        <div class="flex gap-1 items-center">
                            <nuxt-link v-for="artist in item?.track?.artists" :to="`/artist/${artist.uri}`" class="text-gray-400 text-xs">{{artist?.name}}</nuxt-link>
                        </div>
                    </div>
                </nuxt-link>
                <!-- Desktop -->

                <!-- Mobile -->
                <nuxt-link :to="`http://localhost:3000${link}/${item?.track?.album?.id}/${item?.track?.preview_url}`" v-for="item in items" class="item-container lg:hidden rounded-md hover:bg-gray-950 bg-gray-900 p-0 w-[13rem] h-[14rem] overflow-hidden playlist-container--mobile">
                    <!-- Item poster -->
                    <div class="w-full h-full rounded-md overflow-hidden relative">
                        <img class="w-full h-full object-cover" :src="item?.track?.album?.images[0]?.url" />
                        <!-- Video icon -->
                        <div class="play-btn-container absolute bottom-2 right-2 cursor-pointer text-gray-400 playlist-play-icon--mobile">
                            <IconPlay cls="w-[50px] h-[50px] active:w-[45px] active:h-[45px]" />
                        </div>
                        <!-- Item description -->
                        <div class="flex flex-col gap-2 absolute bottom-2 left-2 playlist-desc--mobile">
                            <span class="text-gray-200">{{item?.track?.name}}</span>
                        <div class="flex gap-1 items-center">
                            <nuxt-link v-for="artist in item?.track?.artists" :to="`/artist/${artist.uri}`" class="text-gray-400 text-xs">{{artist?.name}}</nuxt-link>
                        </div>
                        </div>
                    </div>
                </nuxt-link>
                <!-- Mobile -->
            </div>
            <div v-if="state === 'loading'" class=" w-full h-[100px] flex items-center justify-center">
                <IconLoader />
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['title', 'link', 'items', 'state']);
const router = useRouter();

onMounted(() => {
    // console.log('items[0]?.track?.album?.images[0]?.uri', props.items[0]?.track?.album?.images[0]?.uri)
})

const goto = (to, query) => {
    console.log('to', to, 'query', query);
    navigateTo({
        path: to,
        query: {
           query
        }
    })
}

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
</style>
<!-- https://media.istockphoto.com/id/1428972357/photo/404-error-isolated-on-white-background-page-not-found.jpg?s=612x612&w=0&k=20&c=t5mB3cldfjEyU6T3J9UoHlJj2vxcCvVpbPlnqDsXUqU= -->