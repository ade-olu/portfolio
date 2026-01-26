<template>
  <section
    class="mt-2 pt-10 pb-14 bg-white-soft relative w-full phone-sm:mt-4 tablet-xs:mt-10 tablet-xs:pt-10 tablet-xs:pb-14 lg:mt-6 lg:pt-14 lg:pb-20 xl:mt-14"
    id="contact"
  >
    <div class="flex flex-col items-center justify-center">
      <!-- Heading -->
      <div class="text-center">
        <h2
          class="font-heading font-bold text-3xl text-black-primary leading-10 phone-sm:text-heading-1 phone-sm:leading-tight tablet-xs:text-heading-2 tablet-xs:leading-normal lg:text-heading-4 lg:leading-loose 2xl:text-heading-6"
        >
          <span class="relative z-20">Contact</span>
          <AccentLine
            class="-mt-4 phone-sm:-mt-5 lg:-mt-5"
            img-class="w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 2xl:w-56"
          />
        </h2>
      </div>

      <!-- Contact Form -->
      <form
        class="flex flex-col items-center justify-center px-8 mt-11 w-full tablet-xs:px-40 lg:mt-11 lg:px-padding-width-1 xl:px-padding-width-2 2xl:px-padding-width-3"
        action="https://formspree.io/f/mrgroypw"
        method="POST"
      >
        <!-- Name Input -->
        <div class="input-wrapper">
          <input
            class="form-input"
            type="text"
            name="Name"
            id="name"
            placeholder="Enter your name"
            required
          />
          <span class="focus-border"></span>
        </div>

        <!-- Email Input -->
        <div class="input-wrapper mt-12 lg:mt-16">
          <input
            class="form-input"
            type="email"
            name="Email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <span class="focus-border"></span>
        </div>

        <!-- Message Input -->
        <div class="input-wrapper mt-12 lg:mt-16">
          <input
            class="form-input"
            type="text"
            name="Message"
            id="message"
            placeholder="Enter your message"
            required
          />
          <span class="focus-border"></span>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="focus:outline-none bg-black-primary font-bold text-white-soft h-16 px-14 py-2.5 rounded-full mt-16 w-width-18 phone-sm:text-lg phone-sm:h-16 phone-sm:px-20 phone-sm:w-width-19 tablet-xs:text-xl tablet-xs:h-height-7 tablet-xs:w-width-20 tablet-xs:px-20 lg:mt-24 2xl:h-20 2xl:px-20 transition-all duration-300 hover:bg-opacity-90"
          style="cursor: none"
        >
          Send
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import AccentLine from "./AccentLine.vue";
</script>

<style scoped>
.input-wrapper {
  position: relative;
  width: 100%;
}

.form-input {
  background: transparent;
  border-bottom: 1.5px solid theme("colors.gray");
  width: 100%;
  padding: 0.625rem 0;
  color: theme("colors.black-primary");
  transition: all 300ms;
}

.form-input::placeholder {
  color: theme("colors.gray");
}

.form-input:focus {
  outline: none;
}

@media (min-width: 411px) {
  .form-input {
    font-size: 1.125rem;
  }
}

@media (min-width: 601px) {
  .form-input {
    font-size: 1.25rem;
  }
}

.focus-border {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  border-bottom: 1.5px solid theme("colors.brand-orange");
  transition: all 400ms ease;
}

.form-input:focus ~ .focus-border {
  width: 100%;
  left: 0;
}
</style>
