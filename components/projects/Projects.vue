<template>
  <section
    id="projects"
    class="mt-14 pt-10 pb-14 bg-background-light w-full phone-sm:mt-16 tablet-xs:mt-24 tablet-xs:pt-10 tablet-xs:pb-14 lg:pt-14 lg:pb-24 xl:mt-0"
  >
    <!-- Section Header -->
    <div class="flex items-center justify-center">
      <div class="overflow-hidden">
        <Heading
          accent-img-class="w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 2xl:w-60"
          >Projects</Heading
        >
      </div>
    </div>

    <!-- Projects Grid -->
    <div
      class="grid grid-cols-1 px-8 gap-14 mt-11 phone-sm:mt-12 tablet-xs:px-14 tablet-xs:gap-14 lg:mt-16 lg:px-24 lg:grid-cols-2 lg:gap-24"
    >
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup>
// Import components
import ProjectCard from "./ProjectCard.vue";

// Import project images
import vectImg from "~/assets/works/vect.svg";
import weatherlyImg from "~/assets/works/weatherly.svg";
import travuImg from "~/assets/works/travu.svg";
import portfolioImg from "~/assets/works/portfolio.svg";
import talkeaseImg from "~/assets/works/talkease.svg";
import tripvoyagerImg from "~/assets/works/tripvoyager.svg";
import findfontImg from "~/assets/works/findfont.svg";
import ear1Img from "~/assets/works/ear1.svg";
import getfoodImg from "~/assets/works/getfood.svg";

// Define projects data
const projects = [
  // Vect Project
  {
    id: "vect",
    name: "Vect",
    description: "A simple tool for sketching and drawing.",
    bgColor: "bg-vect",
    img: vectImg,
    imgSize: "w-24 xs:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44",
    route: "/works/vect",
    technologies: ["HTML", "SCSS", "JavaScript", "Figma"],
    rowSpan:
      "row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6",
  },
  // Weatherly Project
  {
    id: "weatherly",
    name: "Weatherly",
    description:
      "An app that provides real-time weather forecasts and metrics for cities around the world.",
    bgColor: "bg-weatherly",
    img: weatherlyImg,
    imgSize: "w-24 xs:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44",
    route: "/works/weatherly",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Figma"],
    rowSpan:
      "row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-6 xl:row-span-8",
  },
  // Travu Project
  {
    id: "travu",
    name: "Travu",
    description: "A travel planning and booking website.",
    bgColor: "bg-travu-dark-1",
    img: travuImg,
    imgSize: "w-24 xs:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44",
    route: "/works/travu",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Figma"],
    rowSpan:
      "row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-6 xl:row-span-8",
  },
  // Portfolio Project
  {
    id: "portfolio",
    name: "Portfolio",
    description: "My portfolio website.",
    bgColor: "bg-black-primary",
    img: portfolioImg,
    imgSize: "w-width-9 xs:w-20 phone-sm:w-24 tablet-xs:w-28 xl:w-36",
    route: "/works/portfolio",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Figma"],
    rowSpan:
      "row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6",
  },
  // TalkEase Project
  {
    id: "talkease",
    name: "TalkEase",
    description:
      "An app design for real-time multilingual communication using AI translation.",
    bgColor: "bg-talkease",
    img: talkeaseImg,
    imgSize: "w-24 xs:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44",
    route: "/works/talkease",
    technologies: ["Figma"],
    rowSpan:
      "row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6",
  },
  // TripVoyager Project
  {
    id: "tripvoyager",
    name: "TripVoyager",
    description: "An app design for planning vacations and trips.",
    bgColor: "bg-tripvoyager",
    img: tripvoyagerImg,
    imgSize:
      "ml-4 w-width-11 xs:w-28 phone-sm:w-32 tablet-xs:w-width-14 xl:w-width-17",
    route: "/works/tripvoyager",
    technologies: ["Figma"],
    rowSpan:
      "row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-6 xl:row-span-8",
  },
  // FindFont Project
  {
    id: "findfont",
    name: "FindFont",
    description: "An app design for finding typeface names on images.",
    bgColor: "bg-[#FD5531]",
    customStyle: "background: linear-gradient(to top right, #fd5531, #fe673b)",
    img: findfontImg,
    imgSize:
      "ml-4 w-width-11 xs:w-28 phone-sm:w-32 tablet-xs:w-width-14 xl:w-width-17",
    route: "/works/findfont",
    technologies: ["Figma"],
    rowSpan:
      "row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-6 xl:row-span-8",
  },
  // Ear1 Project
  {
    id: "ear1",
    name: "Ear1",
    description: "A website design concept for Ear1.",
    bgColor: "bg-ear1",
    img: ear1Img,
    imgSize: "w-24 xs:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44",
    route: "/works/ear1",
    technologies: ["Figma"],
    rowSpan:
      "row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6",
  },
  // GetFood Project
  {
    id: "getfood",
    name: "GetFood",
    description: "An app design for ordering meals.",
    bgColor: "bg-getfood",
    img: getfoodImg,
    imgSize: "w-24 xs:w-width-11 phone-sm:w-width-12 tablet-xs:w-36 xl:w-44",
    route: "/works/getfood",
    technologies: ["Figma"],
    rowSpan:
      "row-span-6 xs:row-span-7 phone-sm:row-span-8 tablet-xs:row-span-10 lg:row-span-5 xl:row-span-6",
  },
];
</script>
