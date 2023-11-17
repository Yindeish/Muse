<template lang="">
    <div :class="color">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" :class="'bi bi-person-fill ' + cls" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
</svg>
    </div>
</template>
<script>
export default {
      props: {
        cls: {
            type: String
        },
        color: {
            type: String
        }
    }
}
</script>
<style lang="">
    
</style>