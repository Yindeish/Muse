<template lang="">
    <div class="col-span-full bg-gray-800 row-span-1 p-4 flex items-center justify-center">
        <div class="w-full h-full flex items-center justify-between">
            <!-- Podcast/Song playing -->
            <div class="w-[fit-content] flex gap-3 justify-start items-center rounded-md p-2">
                <div class="w-[50px] h-[50px] rounded-md overflow-hidden cursor-pointer">
                    <img class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/ogw/AKPQZvw9hOaAosIwjnnU8bCyV5ru6yxGxZvADynOjmls1Q=s32-c-mo" alt="">
                </div>
                <div class="flex flex-col gap-3">
                    <span class="text-white">Mystty Talks</span>
                    <span class="text-gray-400 text-sm">Podcast . Misturah Akanbi</span>
                </div>
                <div>
                    <IconPlus color="text-white" cls="w-[25px] h-[25px] tetxt-white cursor-pointer" />
                </div>
            </div>
            <!-- Play Controls -->
            <div>
                <IconPlay color="text-white" cls="w-[50px] h-[50px] tetxt-white cursor-pointer active:w-[45px] active:h-[45px]" />
            </div>

            <!-- Volume Controls -->
            <div v-if="musicStatus == states.playing" class="w-[45px] h-[45px] bg-transparent">
                <IconPlayIndicator cls="w-full h-full" color="white" />
            </div>
        </div>


    </div>
</template>
<script setup>

const currentMusic = ref({});

const states = ref({
    notPlaying: 'not-playing',
    playing: 'playing',
    paused: 'paused',
    stopped: 'stopped'
})

const musicStatus = ref('playing');

const play = () => {
    musicStatus.value = states.value.playing;
}

const pause = () => {
    musicStatus.value = states.value.paused;
}

const stop = () => {
    musicStatus.value = states.value.stopped;
}

const reset = () => {
    musicStatus.value = states.value.notPlaying;
}
</script>
<style lang="">
    
</style>