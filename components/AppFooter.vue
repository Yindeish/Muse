<template lang="">
    <div class="col-span-full bg-gray-800 row-span-1 p-4 flex items-center justify-center">
        <div v-if="currentSong" class="w-full h-full flex items-center justify-between">
            <!-- Podcast/Song playing -->
            <div class="w-[fit-content] flex max-sm:flex-col gap-3 justify-start items-center max-sm:items-start max-sm:justify-center max-sm:p-0 rounded-md p-2">
                <div class="w-[50px] h-[50px] max-sm:w-[35px] max-sm:h-[35px] rounded-md overflow-hidden cursor-pointer">
                    <img class="w-full h-full object-contain" :src="currentSong?.playListImg" alt="">
                </div>
                <div class="flex flex-col gap-3">
                    <span class="text-white max-sm:text-sm">{{currentSong?.track?.name}}</span>
                    <div class="flex items-center gap-1">
                        <span v-for="artist in currentSong?.track?.artists?.items" class="text-gray-400 text-sm">{{artist?.profile.name}}</span>
                    </div>
                </div>
            </div>
            <!-- Play Controls -->
            <div>
                <video ref="videoPlayer" class="w-[50px] h-[1px]" controls="" autoplay="" name="media"><source :src="currentSong?.preview_url" type="audio/mpeg"></video>
                <IconPlay v-if="!isPlaying" @click="toggleVideo" color="text-white" cls="w-[50px] h-[50px] text-white cursor-pointer active:w-[45px] active:h-[45px]" />
                <IconPause v-else @click="toggleVideo" color="text-white" cls="w-[50px] h-[50px] text-white cursor-pointer active:w-[45px] active:h-[45px]" />
            </div>

            <!-- Volume Controls -->
            <div v-if="isPlaying" class="w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px] bg-transparent">
                <IconPlayIndicator cls="w-full h-full" color="white" />
            </div>
            <div v-else class="w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px] bg-transparent">
                <IconPauseIndicator cls="w-full h-full" color="white" />
            </div>
        </div>

    </div>
</template>
<script setup>
const videoPlayer = ref(null);

const currentSong = ref(null);
const isPlaying = ref(false);

const toggleVideo = () => {
    console.dir(videoPlayer.value);
    if (isPlaying.value) {
        videoPlayer.value.pause();
    } else {
        videoPlayer.value.play();
    }

    isPlaying.value = !isPlaying.value;
};

onMounted(() => {
    const intervalId = setInterval(() => {

        if (currentSong.value !== JSON.parse(localStorage.getItem('currentSong'))) {
            currentSong.value = JSON.parse(localStorage.getItem('currentSong'));

            // clearInterval(intervalId);
        }
    }, 1000);
})

</script>
<style lang="">
    
</style>