<template>
<div>
  <NavBar />
  <HeroSection />
  <AboutUs />
  <OurServices />
  <FeaturedRoom />
  <RestoBeach />
  <AllFooter />
</div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue';
import OurServices from '@/components/OurServices.vue'
import AboutUs from '@/components/AboutUs.vue';
import FeaturedRoom from '@/components/FeaturedRoom.vue';
import AllFooter from '@/components/AllFooter.vue'
import RestoBeach from '@/components/RestoBeach.vue';

    export default {
        name: 'UserDasboard',
        components: {
    NavBar,
    HeroSection,
    OurServices,
    AboutUs,
    FeaturedRoom,
    AllFooter,
    RestoBeach
},
          setup() {

            return {

            }
        }
    }
</script>
