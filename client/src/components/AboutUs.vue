<template>
<!-- Container for demo purpose -->
<div class="bg-slate-100 my-24 mx-auto md:px-6">
    <!-- Section: Design Block -->
    <section class="mb-32 text-center lg:text-left">
      
  
      <div class="py-24 md:px-12">
        <div class="container mx-auto xl:px-48">
          <div class="grid items-center lg:grid-cols-2">
            <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
              <div
                class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                <p class="text-orange-400">ABOUT US</p>
                <h1 class="mt-0 mb-5 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                    Unwind A Hotel <br /><span class="text-orange-400 dark:text-danger-400">Booking Agency</span>
                </h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div class="mb-6 mt-6 flex-row md:mb-0 md:flex">
                  <button type="submit"
                    class="inline-block rounded-md font-semibold border-2 border-orange-400 hover:bg-orange-400 hover:text-white px-7 pt-3 pb-2.5">
                    BOOK YOUR ROOM NOW
                  </button>
                </div>
              </div>
            </div>
            <div class="md:mb-12 lg:mb-0">
              <img src="../images/about.jpg"
                class="w-full rounded-lg brightness-75" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Section: Design Block -->
  </div>
  <!-- Container for demo purpose -->
</template>

<script lang="ts">
    export default {
        name: 'AboutUs',
        setup() {

            return {

            }
        }
    }
</script>