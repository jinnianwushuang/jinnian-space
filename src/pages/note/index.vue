<template>
    <div class="q-mx-lg">
<div class="text-h5 q-my-md">路在脚下</div>

<div v-for="(item,index) in record" :key="`record_note_${index}`" class="q-mb-sm"> 
    <span >{{item.date}} </span> <span class="q-mx-md"> :</span>  {{item.note}}
</div>


    </div>
</template>

<script>
import record from "src/config/note/record.js"
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