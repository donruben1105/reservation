<template>
    <section class="bg-gray-700 relative">
        <div class="relative min-h-screen bg-cover bg-no-repeat overflow-hidden">
          <img src="../images/hero.webp" alt="Background Image" class="w-full h-full object-cover absolute mix-blend-overlay" />
          
          <div class="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center">
            <p class="text-white">ENJOY YOUR WONDERFUL HOLIDAYS WITH A GREAT LUXURY EXPERIENCE!</p>
            <h1 class="text-white text-8xl font-extrabold">Most Relaxing Place</h1>
            <div class="pt-5">
              <button class="p-3 border-2 font-semibold border-orange-400 hover:bg-orange-400 hover:text-white rounded-md">Take a Tour</button>
            </div> 
          </div>
        </div>
    </section>
</template>

<script lang="ts">

    export default {
        name: 'HeroSection',
        setup() {

            return {

            }
        }
    }
</script>