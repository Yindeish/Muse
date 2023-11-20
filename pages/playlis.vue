<template lang="">
    <div class="w-full flex flex-col items-center gap-5 bg-gray-800 h-full p-4 max-sm:p-2 overflow-y-scroll">
        <!-- Playlist Poster -->
        <div class="w-full h-[20vh]">
            <img class="w-full h-full object-cover" src="" alt="">
        </div>

        <!-- Playlist controls -->
        <div class="w-full flex justify-between items-center">
            <div class="flex gap-6 max-sm:gap-3 items-center">
                <div class="text-green-600 w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px] rounded-full">
                    <IconPlay cls="w-full h-full" />
                </div>
                <div class="text-gray-400">
                    <IconFavourite cls="w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]" />
                </div>
                <div class="text-gray-400">
                    <IconMenu cls="w-[40px] h-[40px] max-sm:w-[30px] max-sm:h-[30px]" />
                </div>
            </div>


            <div>

            </div>
        </div>
        <!-- Playlist controls -->

        <!-- List -->
        <div class="w-full h-[fit-content] flex flex-col gap-3 items-center">
            <!-- List Header -->
            <div class="w-full border-b-2 border-b-gray-400 py-2 flex justify-between items-center px-4 max-sm:px-1">
                <div class="text-gray-400 flex gap-2 max-sm:text-sm">
                    <span>#</span>
                    <span>Title</span>
                </div>

                <span class="text-gray-400 max-sm:text-sm">Album Tiltle</span>

                <div class="text-gray-400">
                    <IconDuration cls="w-[25px] h-[25px]" />
                </div>
            </div>
            <!-- List Header -->

            <!-- List Body -->
           
            <div class="w-full py-2 flex justify-between items-center px-4 max-sm:px-1">
               <div class="flex gap-2 text-gray-400">
                    <span class="max-sm:text-sm">1</span>

                    <div class="w-full flex max-sm:flex-col gap-3 max-sm:gap-1 justify-start items-center max-sm:items-start rounded-md  max-sm:p-1 cursor-pointer">
                    <div class="w-[50px] h-[50px] max-sm:w-[35px] max-sm:h-[35px] rounded-md overflow-hidden">
                        <img class="w-full h-full object-contain" src="https://lh3.googleusercontent.com/ogw/AKPQZvw9hOaAosIwjnnU8bCyV5ru6yxGxZvADynOjmls1Q=s32-c-mo" alt="">
                    </div>
                    <div class="flex flex-col gap-3 max-sm:gap-1.5">
                        <span class="text-white max-sm:text-sm">Terminator</span>
                        <span class="text-gray-400 text-sm">Asake</span>
                    </div>
                </div>
               </div>

                <span class="text-gray-400 max-sm:text-sm">Me Moneny with the vibe</span>

                <span class="text-gray-400 max-sm:text-sm">2: 35</span>
            </div>
            <!-- List Body -->
        </div>
        <!-- List -->

        <!-- Section Footer -->
        <span class="text-gray-400 text-base lg:text-lg lg:font-semibold font-normal mt-1 mb-10 lg:mb-14 pb-2 text-center">&copy; 2023 Muse</span>
        <!-- Section Footer -->
    </div>
</template>
<script setup>

</script>
<style lang="">
    
</style>