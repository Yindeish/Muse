<template lang="">
    <div class="bg-gray-950 text-white font-sans w-full h-full">
        <div class="w-full p-2 mx-auto">
            <input @input="search" v-model="searchText" type="search" name="search" class="w-[80%] border-[1px] border-gray-600 rounded-md bg-transparent py-2 px-3 mx-auto block" placeholder="Search playlists">
        </div>

         <div class="w-full flex gap-3 overflow-x-scroll py-2">
            <div v-if="playLists && state !== 'loading'" :class="`w-[${playListsitems?.length}%] flex gap-2`">
                <div v-for="item in playLists" @click="getTrack(item?.data?.id)" class="item-container flex flex-col gap-2 rounded-md hover:bg-gray-950 bg-gray-900 p-3 pb-1 w-[13rem] h-[17rem] cursor-pointer max-sm:hidden playlist-container--desktop">
                    <!-- Item poster -->
                    <div :class="`w-[100%] h-['100%'] flex-[0.95] rounded-md overflow-hidden relative`">
                        <img class="w-full h-full object-cover" :src="item?.data?.albumOfTrack?.coverArt?.sources?.[0]?.url" />
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
                </div>
            </div>
            <div v-if="state == 'loading'" class="flex items-center justify-center w-full h-[20vh]">
                <IconLoader />
            </div>
         </div>
    </div>
</template>
<script setup>
const router = useRouter();

const searchText = ref('');
const playLists = ref(null);
const state = ref('pending');

onBeforeMount(() => {
    if (!localStorage.getItem('loggedinUser')) {
        router.push('/login')
    }
})

const search = async () => {
    const url = `https://spotify81.p.rapidapi.com/search?q=${searchText.value}%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7cfe79fb4cmsha97c9c0ea2a5ac4p1fd173jsn0f3c71c9c278',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };

    try {
        state.value = 'loading';
        const response = await fetch(url, options);
        const result = await response.json();
        playLists.value = result?.tracks;

    } catch (error) {
        console.error(error);
    } finally {
        state.value = 'not-loading';
    }
}

async function getTrack(trackId) {
    const url = `https://spotify81.p.rapidapi.com/tracks?ids=${trackId}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '7cfe79fb4cmsha97c9c0ea2a5ac4p1fd173jsn0f3c71c9c278',
            'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const preview_url = result?.tracks?.[0]?.preview_url;
        router.push(`/playlist/${trackId}/${preview_url}`);
    } catch (error) {
        console.error(error);
    }
}

</script>
<style lang="">
    
</style>