<template lang="">
    <div class="w-full flex gap-3 overflow-x-scroll py-2">
        <div v-if="items && state !== 'loading'" :class="`w-[${items?.length}%] flex gap-2`">
            <nuxt-link :to="`http://localhost:3000${link}/${item?.track?.album?.id}/${item?.track?.preview_url}`" v-for="item in items" class="item-container flex flex-col gap-2 rounded-md hover:bg-gray-950 bg-gray-900 p-3 pb-1 w-[13rem] h-[17rem] cursor-pointer max-sm:hidden playlist-container--desktop">
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
        </div>
    </div>
</template>
<script setup>
const items = ref(null);
const state = ref('pending');

const getPlayLists = async () => {
    const url = 'https://spotify23.p.rapidapi.com/playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7cfe79fb4cmsha97c9c0ea2a5ac4p1fd173jsn0f3c71c9c278',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
      

    try {
        state.value = 'loading';
        const response = await fetch(url, options);
        const result = await response.json();
        items.value = result.items.filter(playList => {
            return playList?.track?.album?.album_type === 'single';
        })
    } catch (error) {
        console.error(error);
    } finally {
        state.value = 'not-loading';
    }
}

onMounted(() => {
    getPlayLists();
})

</script>
<style lang="">
    
</style>