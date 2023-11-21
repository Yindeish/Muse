<template lang="">
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:transparent;display:inline-block;" :class="cls" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="rotate(180 50 50)"><rect x="15" y="15" width="10" height="40" :fill="color">
<animate attributeName="height" ></animate>
</rect><rect x="35" y="15" width="10" height="40" :fill="color">
<animate attributeName="height" ></animate>
</rect><rect x="55" y="15" width="10" height="40" :fill="color">
<animate attributeName="height" ></animate>
</rect><rect x="75" y="15" width="10" height="40" :fill="color">
<animate attributeName="height"></animate>
</rect></g>
</svg>
    </div>
</template>
<script>
export default {
    props: {
        color: {
            type: String
        },
        cls: {
            type: String
        }
    }
}
</script>
<style lang="">
    
</style>