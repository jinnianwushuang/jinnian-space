<!--
 * @Date           : 2020-10-18 23:59:01
 * @FilePath       : /jinnian-space/src/pages/ios_android/module/m1.vue
 * @Description    : 
-->

<template>
    <div>
      <div>相关关键字</div>
     <pre>
       Android Studio
       dart  flutter  kotiln  
       ANDROID_SDK_ROOT
       ANDROID_HOME
       adb
       android
       dart
       flutter
     </pre>
     <div>
       <ul>
         <li v-for="(item,index) in link_arr" :key="`link_arr_${index}`">
             <a :href="item" target="_blank" rel="noopener noreferrer">{{item}} </a> </li>
       </ul>
     </div>
    </div>
</template>
<script>
 

 
export default {
 
  data() {
    return {
      link_arr:[
        'https://pub.dev/',
        "https://flutter.dev/",
        "https://dart.dev/"

      ]
 
    };
  }
};
</script>

<style lang="scss" scoped></style>
