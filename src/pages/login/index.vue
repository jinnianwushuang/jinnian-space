<template>
    <div>
      <div class="column" style="height: 150vm">
        <div class="col-3"></div>
        <div class="col-6">

        </div>
      </div>
      <div class="row justify-center q-mt-lg">
      <div style="width:00px"></div>

<q-form
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div class="row full-width">
        <q-btn label="登录" @click="go_to_main" color="primary"/>
        <q-space />
        <q-btn label="取消"  color="grey"  class="q-ml-sm" />
      </div>
    </q-form>




      </div>
 
    </div>
</template>

<script>

import {mapActions,mapGetters} from 'vuex'
    export default {
        data() {
            return {
               name: null,
      age: null,

      accept: false
            }
        },
        computed: {
            // ...mapActions({

            // })
          
        },
        created () { },
         methods: {
         ...mapActions([
            "set_account" 
         ]),
         go_to_main(){
             this.$router.push({
                 name:"main"
             })
         }
          },
    }
</script>


<style lang="sass" scoped>

</style>        