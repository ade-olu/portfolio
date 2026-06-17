<template>
  <div
    class="relative font-body bg-white-soft"
    :class="{ stop: active }"
    id="container"
  >
    <!-- Nav -->
    <Nav variant="other" />

    <!-- Project content -->
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

      <!-- Roles & tools/technologies -->
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
            href="https://www.figma.com/proto/VZ5NbSUwvN3w0tEx03x8we/TalkEase-Project?page-id=0%3A1&node-id=1-167&p=f&viewport=-505%2C298%2C0.47&t=sSwX9AzIC1S4PcVJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A167"
            class="text-gray-dark text-base underline tablet-xs:text-lg desktop:text-xl"
            target="_blank"
          >
            View in Figma ↗
          </a></ProjectMeta
        >
      </div>

      <!-- Background -->
      <div
        class="w-full h-[15rem] my-14 bg-talkease rounded-sm tablet-xs:my-16 tablet-xs:h-[25rem]"
        data-cursor-hover
      ></div>

      <!-- Case study -->
      <div class="w-full flex flex-col gap-14 tablet-xs:gap-16">
        <!-- Overview -->
        <HeadingContent
          containerClass="overview"
          csHeading="Overview"
          paragraph1="TalkEase started with a simple idea: what would a translation app look and feel like if it were designed around the conversation experience first?Rather than creating another version of existing translation tools, I wanted to explore how research-driven design decisions could shape the experience of an everyday product."
          paragraph2="This project took me through the entire UX design process, from user research and analysis to a high-fidelity prototype in Figma. Along the way, I focused on understanding the challenges faced by people who encounter language barriers in their daily lives, whether in classrooms, workplaces, or casual social interactions, and used those insights to guide each design decision."
        ></HeadingContent>

        <!-- Problem -->
        <HeadingContent
          containerClass="problem"
          csHeading="Problem"
          paragraph1="Language barriers can make everyday conversations difficult, whether in classrooms, workplaces, or social settings. While translation apps help bridge that gap, they can sometimes interrupt the conversation itself. I wanted to explore how a translation app could better support the conversation experience, helping people communicate more naturally and smoothly in everyday situations."
          paragraph2Class="mt-0"
        ></HeadingContent>

        <!-- Design question -->
        <div class="bg-black-primary p-6 rounded-sm w-full" data-cursor-hover>
          <ProjectMeta
            label="The Design Question"
            metaClass="!text-[#A2A4AD]"
          ></ProjectMeta>
          <p
            class="mt-4 text-background-light text-lg tablet-xs:text-xl desktop:text-2xl"
          >
            What does a translation app feel like when it's built around
            <span class="text-brand-orange"
              >how people actually talk to each other</span
            >, rather than how they look up words?
          </p>
        </div>

        <!-- Solution -->
        <HeadingContent
          containerClass="solution"
          csHeading="Solution"
          paragraph1="I designed a mobile translation app prototype around the conversation experience, focusing on simple navigation, quick access to saved phrases, and making core features easy to find and use without instructions."
          paragraph2Class="mt-0"
        ></HeadingContent>

        <!-- User Research & Insights -->
        <HeadingContent
          containerClass="user-research"
          csHeading="User Research & Insights"
          paragraph1="To better understand the problem, I conducted surveys and interviews with people who regularly face language barriers in everyday situations. Four key themes consistently emerged from the research."
          paragraph2Class="mt-0"
        >
          <!-- Research & insights themes -->
          <CaseStudyCard :items="insights" />
        </HeadingContent>

        <!-- Personas -->
        <HeadingContent
          containerClass="personas"
          csHeading="Personas"
          paragraph1="Using insights from the research, I created personas to better understand the different needs, goals, and challenges of potential TalkEase users."
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
          paragraph1="Based on the research, I built a high-fidelity Figma prototype featuring six core features. Rather than focusing on the translation technology itself, I focused on how the app would support users during live conversations. I also chose a purple color palette to create a calmer, more approachable experience than a typical utility app."
          paragraph2Class="mt-0"
        >
          <!-- Features -->
          <CaseStudyCard :items="features"
        /></HeadingContent>

        <!-- Interaction Design -->
        <HeadingContent
          containerClass="interaction-design"
          csHeading="Interaction Design"
          paragraph1="The interaction design flowchart maps the user’s journey through the app, from the first launch and account creation to each core feature. I used it to ensure navigation felt clear and consistent, with every screen leading naturally to the next."
          paragraph2="The flow begins with onboarding → account creation or sign-in → the main translate screen. Four navigation tabs provide quick access to voice, camera, and favorites, while every mode connects back to the main translate screen so users always have a clear path forward."
        >
          <!-- Interaction design flowchart -->
          <img
            src="../../assets/works/talkease/interaction-design-flowchart.svg"
            class="w-full h-auto mt-8 rounded-sm"
          />
        </HeadingContent>

        <!-- See the interactive prototype -->
        <div
          class="bg-black-primary px-6 py-8 rounded-sm w-full flex flex-wrap gap-6 justify-between"
          data-cursor-hover
        >
          <p
            class="text-background-light text-lg my-auto tablet-xs:text-xl desktop:text-2xl"
          >
            See the full interactive prototype
          </p>
          <!-- Open prototype btn -->
          <a
            href="https://www.figma.com/proto/VZ5NbSUwvN3w0tEx03x8we/TalkEase-Project?page-id=0%3A1&node-id=1-167&p=f&viewport=-505%2C298%2C0.47&t=sSwX9AzIC1S4PcVJ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A167"
            class="bg-brand-orange text-background-light font-bold rounded-full px-6 py-4 text-base transition-all duration-300 hover:bg-opacity-90 active:scale-95 tablet-xs:text-lg desktop:text-xl"
            target="_blank"
          >
            Open prototype ↗
          </a>
        </div>

        <!-- User Evaluation & Feedback -->
        <HeadingContent
          containerClass="user-eval"
          csHeading="User Evaluation & Feedback"
          paragraph1="I tested the prototype with people from different cultural backgrounds to understand how the experience worked for different users. I gathered feedback through two methods: the Critical Incident Method, where I observed moments of struggle or success, and surveys that captured users’ overall experience, what they liked, and areas for improvement."
          paragraph2Class="mt-0"
        ></HeadingContent>

        <!-- Outcomes -->
        <HeadingContent
          containerClass="outcomes"
          csHeading="Outcomes"
          paragraph1="Language barriers can make everyday moments like school, healthcare visits, and conversations more challenging. I designed TalkEase to help people communicate more easily in those situations. Throughout the project, research guided each design decision. The app focuses on simple navigation, quick access to saved phrases, and camera translation for text that users do not need to type."
          paragraph2="During prototype testing, users from different backgrounds found the app easy to use and helpful. While there are still areas to improve, such as clearer guidance and faster access to frequently used languages, TalkEase was built around the needs and feedback of real users."
        ></HeadingContent>

        <!-- Key Takeaways -->
        <HeadingContent
          containerClass="takeaways"
          csHeading="Key Takeaways"
          paragraph1Class="my-0"
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
import CaseStudyCard from "@/components/projects/CaseStudyCard.vue";

// Import SVG icons
import micIcon from "~/assets/works/talkease/mic.svg";
import cameraIcon from "~/assets/works/talkease/camera.svg";
import chatIcon from "~/assets/works/talkease/chat.svg";
import historyIcon from "~/assets/works/talkease/history.svg";
import favoritesIcon from "~/assets/works/talkease/favorites.svg";
import offlineIcon from "~/assets/works/talkease/offline.svg";

// Research & insights themes
const insights = [
  {
    title: "Accents over vocabulary",
    description:
      "Understanding accents is harder than understanding unfamiliar words for most multilingual users.",
  },
  {
    title: "Lost in translation",
    description:
      "Cultural meaning gets lost in most translation tools, so even correct words can cause misunderstandings.",
  },
  {
    title: "Real-time translation",
    description:
      "People want real-time translations that work in classrooms, workplaces, and casual conversations.",
  },
  {
    title: "Simplicity under pressure",
    description:
      "When language is a barrier, users need an app they can use instantly without learning it first.",
  },
];

// Features
const features = [
  {
    img: micIcon,
    title: "Instant voice & text translation",
    description:
      "Translate spoken and typed messages instantly with a language selector that stays active. Designed for fast, smooth conversations in real time.",
  },
  {
    img: cameraIcon,
    title: "Camera-based translation",
    description:
      "Point the camera at documents, signs, or menus to get instant translations without any typing.",
  },
  {
    img: chatIcon,
    title: "Conversation mode",
    description:
      "A shared screen where two people use one device and take turns speaking to each other with live translation.",
  },
  {
    img: historyIcon,
    title: "Chat history",
    description:
      "A log that shows what was translated and when, organized by date. Useful in work settings where people need to check what was said later.",
  },
  {
    img: favoritesIcon,
    title: "Favorites",
    description:
      "Save commonly used phrases for quick one-tap access, placed on the main screen instead of hidden in settings like most translation apps.",
  },
  {
    img: offlineIcon,
    title: "Offline indicator",
    description:
      "A clear indicator showing which features work without internet, important for travelers and people in areas with poor connection.",
  },
];

// Reactive state
const active = ref(false);
const zIndex = ref(false);
</script>

<style scoped>
@import "../../assets/styles/nav.css";
</style>
