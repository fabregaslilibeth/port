<template>
  <div class="bg-custom relative">
    <div class="flex justify-between w-full">
      <div class="text-white w-full flex items-center justify-between">
        <div class="text-center mx-auto pt-24">
          <p class="text-5xl md:text-7xl font-extrabold">Beth Fabregas</p>
          <p class="text-2xl font-semibold pt-4 hidden md:inline-block">
            Certified Public <span class="text-red-500">Accountant</span> |
            FullStack <span class="text-red-500">Developer</span>
          </p>
          <p class="text-2xl font-semibold pt-4 md:hidden">
           CPA. Web Developer.
          </p>

          <div class="flex justify-center space-x-8 my-12">
            <button
              class="bg-white rounded-full px-4 md:px-12 py-2 text-gray-800 md:text-xl font-semibold duration-300 hover:bg-red-100"
            >
              Hire me
            </button>
            <button
              class="border border-white rounded-full px-4 md:px-12 py-2 text-white md:text-xl font-semibold duration-300 hover:bg-gray-900"
            >
              View CV
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="blob absolute z-1 -top-8 right-24 rounded-full">
        <svg viewBox="0 0 200 200">
          <path
            fill="#A12828"
            d="M41.8,24.2C28,48.2,-27.6,48.1,-41.5,24.1C-55.5,0,-27.7,-48,0.1,-47.9C27.9,-47.9,55.7,0.2,41.8,24.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div> -->
      <div class="banner w-full hidden md:inline-block"></div>
    </div>
  </div>
</template>

<style scoped>
.bg-custom {
  background: #131313;
}

.banner {
  height: 600px;
  background: linear-gradient(to top, rgb(19, 19, 19), rgba(19, 19, 19, 0.2)),
    url("../../src/assets/beth-images/1.png") left center no-repeat;
  background-size: 80%;
  filter: grayscale(60%);
  clip-path: polygon(
    50% 0%,
    100% 0,
    100% 43%,
    100% 76%,
    68% 100%,
    32% 100%,
    0 75%,
    0% 43%,
    0 0
  );
}

.blob {
  width: 900px;
  height: 900px;
}
</style>
