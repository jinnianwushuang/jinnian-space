<!--
 * @Date           : 2021-01-30 02:07:31
 * @FilePath       : /jinnian-space/src/pages/linux/module/m11.vue
 * @Description    : 
-->
<template>
    <div>
         <iframe :src="src" frameborder="0"></iframe>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                src: require('src/pages/linux/iframe/linux-命令行.htm')
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>