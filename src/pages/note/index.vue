<template>
    <div class="q-mx-lg">
<div class="text-h5 q-my-md">路在脚下</div>

<div v-for="(item,index) in record" :key="`record_note_${index}`"> 
    <span >{{item.date}} :</span> {{item.note}}
</div>


    </div>
</template>

<script>
import record from "src/pages/note/record.js"
    export default {
        data() {
            return {
                record,
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>