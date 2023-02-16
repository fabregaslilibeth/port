<template>
  <div class="my-8">
    <div class="relative w-52 mx-auto">
      <div class="absolute -top-12">
        <icons-sunrays />
      </div>
      <div class="font-cursive text-4xl text-right">About me</div>
    </div>
    <div id="about" class="">
      <div class="w-11/12 mx-auto md:w-full py-20 max-w-screen-xl">
        <div class="flex items-stretch justify-center space-x-20 mb-12">
          <p class="w-1/2">
            As a Full Stack Web Developer, I bring a unique perspective to my
            work thanks to my previous career in Finance and Accounting. I
            specialize in building web applications that are related to
            Accounting and Finance, leveraging my expertise to create
            user-friendly tools that meet the needs of businesses in these
            industries.
          </p>
          <div class="border border-border py-4 px-8 rounded-md shadow-sm">
            <div class="text-4xl font-extrabold font-cursive text-accent">
              {{ getYears() }}<sup>+</sup> years
            </div>
            <p class="text-center pt-4">Web development</p>
          </div>
        </div>
        <div class="flex items-stretch justify-center space-x-20 mb-12">
          <p class="w-1/2 md:ml-20">
            My experience in Accounting has taught me the importance of being
            mindful of even the smallest details. I understand that even the
            slightest error can have a significant impact on a company's bottom
            line, so I always strive for accuracy and attention to detail in my
            work. Additionally, I recognize the importance of staying up-to-date
            with the latest industry regulations, and I make a point to
            continuously educate myself so that I can provide the most relevant
            solutions to my clients.
          </p>
          <div
            class="border border-border py-4 px-8 rounded-md shadow-sm order-first flex items-center"
          >
            <div>
              <div class="text-4xl font-extrabold font-cursive text-accent">
                7<sup>+</sup> years
              </div>
              <p class="text-center pt-4">
                Accounting <span class="font-cursive">&</span> Finance
              </p>
            </div>
          </div>
        </div>

        <div class="w-3/4 mx-auto">
          <p class="text-center">
            Overall, my background in Accounting has instilled a sense of
            responsibility and diligence in me, which I bring to every project
            that I work on as a Full Stack Web Developer.
          </p>
        </div>

        <router-link to="/about">
          <div class="relative w-90 my-8 cursor-pointer mx-auto">
            <div
              class="border border-accent rounded-full px-20 h-16 text-xl uppercase tracking-wider flex items-center font-extrabold custom-btn"
            >
              More about me
            </div>
            <div
              class="absolute w-16 h-16 bg-accent rounded-full top-0 right-0 flex items-center justify-center"
            >
              <icons-arrow-right />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconsSunrays from "../components/icons/sunrays.vue";
import IconsArrowRight from "../components/icons/arrowright.vue";

var start = new Date("10/1/2019");
const present = new Date(Date.now());

const getYears = () => {
  let months = 0;
  months = (start.getFullYear() - present.getFullYear()) * 12;
  months += start.getMonth() - present.getMonth();
  return Math.ceil(months / 12) * -1;
};
</script>

<style scoped>
.accent {
  font-size: 300px;
}
</style>
