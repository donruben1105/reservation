<template>
<!-- Container for demo purpose -->
<div class="bg-slate-100 py-24 mx-auto md:px-6">
    <!-- Section: Design Block -->
    <section class="mb-5 text-center">
      <p class="text-orange-400 font-semibold">OUR ROOMS</p>
      <h1 class="mb-24 pb-4 text-center text-6xl font-bold">
        Featured Rooms
      </h1>
  
      <div class="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
        <div class="mb-6 lg:mb-0">
          <div
            class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="flex">
              <div
                class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/024.webp" class="w-full" />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                  </div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h1 class="mb-3 text-3xl font-bold">Suite Room</h1>
              <p class="mb-4 text-orange-400 font-semibold">
                $450 / NIGHT
              </p>
              <p class="mb-4 pb-2">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <button type="submit"
                    class="inline-block rounded-md font-semibold border-2 border-orange-400 hover:bg-orange-400 hover:text-white px-7 pt-3 pb-2.5">
                    BOOK NOW
              </button>
            </div>
          </div>
        </div>
  
        <div class="mb-6 lg:mb-0">
          <div
            class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="flex">
              <div
                class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp" class="w-full" />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                  </div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h1 class="mb-3 text-3xl font-bold">Family Room</h1>
              <p class="mb-4 text-orange-400 font-semibold">
                $450 / NIGHT
              </p>
              <p class="mb-4 pb-2">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <button type="submit"
                    class="inline-block rounded-md font-semibold border-2 border-orange-400 hover:bg-orange-400 hover:text-white px-7 pt-3 pb-2.5">
                    BOOK NOW
              </button>
            </div>
          </div>
        </div>
  
        <div class="mb-0">
          <div
            class="relative block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div class="flex">
              <div
                class="relative mx-4 -mt-4 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                data-te-ripple-init data-te-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/081.webp" class="w-full" />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                  </div>
                </a>
              </div>
            </div>
            <div class="p-6">
              <h1 class="mb-3 text-3xl font-bold">Deluxe Room</h1>
              <p class="mb-4 text-orange-400 font-semibold">
                $450 / NIGHT
              </p>
              <p class="mb-4 pb-2">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </p>
              <button type="submit"
                    class="inline-block rounded-md font-semibold border-2 border-orange-400 hover:bg-orange-400 hover:text-white px-7 pt-3 pb-2.5">
                    BOOK NOW
              </button>
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
        name: 'FeaturedRoom',
        setup() {

            return {

            }
        }
    }
</script>