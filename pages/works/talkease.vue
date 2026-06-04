<template>
  <div
    class="relative font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <Nav variant="other" />

    <!-- Project Content -->
    <div
      class="max-w-[45rem] mx-auto px-6 pb-8 tablet-xs:pb-16 desktop:max-w-[48rem]"
      :class="{ change: zIndex }"
    >
      <!-- Heading -->
      <Heading
        accent-img-class="w-36 phone-sm:w-40 tablet-xs:w-48 lg:w-52 2xl:w-64"
      >
        TalkEase
      </Heading>

      <!-- Intro -->
      <p
        class="text-gray-dark mt-8 text-base tablet-xs:mt-10 tablet-xs:text-lg desktop:text-xl"
      >
        An app design for real-time multilingual communication using AI
        translation.
      </p>

      <!-- Roles & Tools/Technologies -->
      <div class="flex flex-wrap gap-8 mt-8 tablet-xs:mt-10 tablet-xs:gap-24">
        <!-- Role -->
        <ProjectMeta label="Role"
          ><p
            class="text-gray-dark text-base tablet-xs:text-lg desktop:text-xl"
          >
            Designer & Researcher
          </p></ProjectMeta
        >
        <!-- Tool -->
        <ProjectMeta label="Tool"
          ><p
            class="text-gray-dark text-base tablet-xs:text-lg desktop:text-xl"
          >
            Figma
          </p></ProjectMeta
        >
        <!-- Prototype -->
        <ProjectMeta label="Prototype"
          ><a
            href="https://tinyurl.com/38cwnrms"
            class="text-gray-dark text-base underline tablet-xs:text-lg desktop:text-xl"
          >
            View in Figma
          </a></ProjectMeta
        >
      </div>

      <!-- Background -->
      <div
        class="w-full h-[15rem] my-16 bg-talkease rounded-sm tablet-xs:my-[4.5rem] tablet-xs:h-[25rem]"
        data-cursor-hover
      ></div>

      <!-- Case Study -->
      <div class="w-full flex flex-col gap-16 tablet-xs:gap-[4.5rem]">
        <!-- Overview -->
        <HeadingContent
          containerClass="overview"
          csHeading="Overview"
          paragraph1="TalkEase is a real-time translation app designed to help people from different language backgrounds communicate more easily. It goes beyond basic translation by adapting to different accents, understanding cultural differences, and providing instant translations for speech, text, and images."
          paragraph2="The goal is to make conversations smoother in schools, workplaces, and everyday interactions."
        ></HeadingContent>

        <!-- Problem -->
        <HeadingContent
          containerClass="problem"
          csHeading="Problem"
          paragraph1="Language barriers make it difficult for people to learn, work together, and connect socially. While tools like Google Translate exist, they often miss cultural meaning, struggle with accents, and don’t work well in real-time conversations."
          paragraph2="TalkEase solves these problems by offering faster, more accurate, and culturally aware translations that help people communicate naturally."
        ></HeadingContent>

        <!-- User Research & Insights -->
        <HeadingContent
          containerClass="user-research"
          csHeading="User Research & Insights"
          paragraph1="Surveys and interviews were conducted with people who often face language challenges in real-life settings. Four consistent themes emerged from the research."
          paragraph2Class="mt-0"
        ></HeadingContent>

        <!-- Personas -->
        <HeadingContent
          containerClass="personas"
          csHeading="Personas"
          paragraph1="Personas were created based on user research to understand different needs and expectations for TalkEase."
          paragraph2Class="mt-0"
        >
          <!-- Persona 1 -->
          <img
            src="../../assets/works/talkease/user-persona-1.svg"
            class="w-full h-auto mt-8 rounded-sm"
          />
          <!-- Persona 2 -->
          <img
            src="../../assets/works/talkease/user-persona-2.svg"
            class="w-full h-auto mt-8 rounded-sm"
          />
        </HeadingContent>

        <!-- Design & Prototyping -->
        <HeadingContent
          containerClass="design"
          csHeading="Design & Prototyping"
          paragraph1="A prototype was created in Figma with four core features determined directly by research. A purple color scheme was chosen to create a calm and creative feel, making the design intentional rather than purely decorative."
          paragraph2Class="mt-0"
        ></HeadingContent>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Nav from "@/components/navigation/Nav.vue";
import ProjectMeta from "@/components/projects/ProjectMeta.vue";
import HeadingContent from "@/components/projects/HeadingContent.vue";

// Reactive state
const active = ref(false);
const zIndex = ref(false);
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
