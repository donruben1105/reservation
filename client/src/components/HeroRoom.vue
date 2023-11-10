<template>
    <section class="bg-gray-700 h-[600px] bg-[50%] relative">
        <div class="relative min-h-screen bg-cover bg-no-repeat overflow-hidden">
          <img src="../images/main-room.jpg" alt="Background Image" class="h-[600px] bg-[50%] overflow-hidden w-full object-cover absolute mix-blend-overlay" />
          
          <div class="absolute top-0 left-0 right-0 bottom-52 flex flex-col items-center justify-center">
            <h1 class="text-white text-8xl font-extrabold">Cozzy Rooms</h1>
          </div>
        </div>
    </section>
</template>

<script lang="ts">
    export default {
        name: 'HeroRoom',
        setup() {

            return {

            }
        }
    }
</script>