<template>
<div class="wrapper">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <router-view></router-view>

</div>
  
</template>

<script>
import vHead from './Header.vue'
import vSidebar from './Sidebar'
export default {
    data(){

    },
    components:{
        vHead,
        vSidebar

    }

}
</script>

<style>

</style>