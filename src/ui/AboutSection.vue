<script setup lang="ts">
import SectionLayoutMargins from "../components/SectionLayoutMargins.vue";
import TagWithTooltip from "../components/TagWithTooltip.vue";

const socialLinks = [
  { socialTitle: "facebook", socialIcon: "fa-facebook-f", socialLink: "#" },
  { socialTitle: "whatsapp", socialIcon: "bi-whatsapp", socialLink: "#" },
  { socialTitle: "github", socialIcon: "bi-github", socialLink: "#" },
  { socialTitle: "leetcode", socialIcon: "co-leetcode", socialLink: "#" },
  { socialTitle: "linkedin", socialIcon: "co-linkedin-in", socialLink: "#" },
  { socialTitle: "mail", socialIcon: "co-mail-ru", socialLink: "#" },
  { socialTitle: "phone", socialIcon: "bi-phone", socialLink: "#" },
];
</script>

<template>
  <SectionLayoutMargins class="my-6 flex">
    <div class="h-full xl:mx-24">
      <div
        class="h-full flex flex-col md:flex-row md:gap-10 justify-center items-center"
      >
        <div class="relative md:h-full md:bg-gray-900 flex items-center">
          <div
            class="hidden md:block absolute w-full h-16 bg-gray-900 top-px -translate-y-full"
          ></div>
          <div
            class="hidden md:block absolute w-full h-16 bg-gray-900 bottom-px translate-y-full"
          ></div>
          <div
            class="md:-rotate-90 text-3xl py-8 text-nowrap font-bold text-blue-500 md:bg-gray-900 text-center"
          >
            About Me
          </div>
        </div>

        <div class="w-full h-full flex items-end pt-8 md:pt-12">
          <div
            class="relative bg-gray-900 w-full h-full rounded-xl p-8 pt-14 mr-4 sm:mr-0"
          >
            <div
              class="absolute top-0 left-1/2 md:left-0 w-20 md:w-24 aspect-square -translate-y-1/2 -translate-x-1/2 md:translate-x-8 rounded-3xl overflow-hidden border-2 border-blue-500"
            >
              <img src="../assets/avatar-placeholder.jpg" alt="" />
            </div>

            <div class="">
              <div class="text-white">
                Student at the Faculty of Science, Computer Science Department,
                Benha University. seeking a challenging position within a large
                organisation as a front-end, back-end, full-stack, or
                problem-solving job. Provide a strong foundation in web page and
                database programming and problem solving, with a proven ability
                to drive efficiency, achieve successful outcomes, and
                collaborate within cross-functional teams.
              </div>

              <hr class="hidden sm:block border-gray-600 border-2 my-4" />

              <ul
                class="flex sm:flex-row flex-col gap-2 sm:relative absolute top-1/2 right-0 translate-x-1/2 sm:translate-x-0 -translate-y-1/2 sm:translate-y-0"
              >
                <TagWithTooltip
                  tag="li"
                  v-for="{ socialTitle, socialIcon, socialLink } in socialLinks"
                  :key="socialTitle"
                  x-position="center"
                  y-position="bottom"
                  :fill="true"
                >
                  <a
                    :href="socialLink"
                    target="_blank"
                    class="w-8 md:w-10 regular-fill-btn"
                  >
                    <v-icon :name="socialIcon" />
                  </a>

                  <template #tooltip>{{ socialTitle }}</template>
                </TagWithTooltip>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionLayoutMargins>
</template>
