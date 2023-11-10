<template>
<div>
    <NavBar />
    <HeroContact />
    <AllContactUs />
    <AllFooter />
</div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroContact from '@/components/HeroContact.vue'
import AllContactUs from '@/components/AllContactUs.vue'
import AllFooter from '@/components/AllFooter.vue'

    export default {
        name: 'ContactUs',
        components: {
            NavBar,
            HeroContact,
            AllContactUs,
            AllFooter,
        },
        setup() {

            return {

            }
        }
    }
</script>