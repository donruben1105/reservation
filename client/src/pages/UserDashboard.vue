<template>
<div>
  <NavBar />
  <HeroSection />
  <AboutUs />
  <OurServices />
  <FeaturedRoom />
</div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue';
import OurServices from '@/components/OurServices.vue'
import AboutUs from '@/components/AboutUs.vue';
import FeaturedRoom from '@/components/FeaturedRoom.vue';
// import AllPricing from '@/components/AllPricing.vue'
// import AllFooter from '@/components/AllFooter.vue'
// import ContactUs from '@/components/ContactUs.vue'

    export default {
        name: 'UserDasboard',
        components: {
          NavBar,
          HeroSection,
          OurServices,
          AboutUs,
          FeaturedRoom
      },
          setup() {

            return {

            }
        }
    }
</script>
