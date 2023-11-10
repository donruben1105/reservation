<template>
<div>
    <NavBar />
    <HeroRoom />
    <ListingRoom />
    <OurServices />
    <AllFooter />
</div>    
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue';
import HeroRoom from '@/components/HeroRoom.vue';
import ListingRoom from '@/components/ListingRoom.vue';
import OurServices from '@/components/OurServices.vue';
import AllFooter from '@/components/AllFooter.vue';

    export default {
        name: 'AllRoom',
        components: {
            NavBar,
            HeroRoom,
            ListingRoom,
            OurServices,
            AllFooter
        },
            setup() {

            return {

            }
        }
    }
</script>