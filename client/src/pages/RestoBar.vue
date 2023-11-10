<template>
<div>
    <NavBar />
    <HeroResto />
    <RestoBeach />
    <AllFooter />
</div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroResto from '@/components/HeroResto.vue'
import RestoBeach from '@/components/RestoBeach.vue'
import AllFooter from '@/components/AllFooter.vue'

    export default {
        name: 'RestoBar',
        components: {
            NavBar,
            HeroResto,
            RestoBeach,
            AllFooter
        },
        setup() {

            return {

            }
        }
    }
</script>