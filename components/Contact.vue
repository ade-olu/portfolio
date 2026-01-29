<template>
  <section
    class="py-10 bg-white-soft relative w-full tablet-xs:py-16"
    id="contact"
  >
    <div class="flex flex-col items-center justify-center">
      <!-- Heading -->
      <Heading
        accent-img-class="w-32 phone-sm:w-36 tablet-xs:w-44 lg:w-48 2xl:w-56"
        >Contact</Heading
      >

      <!-- Contact Form -->
      <form
        class="flex flex-col items-center justify-center px-8 mt-8 gap-8 w-full tablet-xs:px-40 tablet-xs:mt-10 tablet-xs:gap-16 lg:px-padding-width-1 xl:px-padding-width-2 2xl:px-padding-width-3"
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
        <div class="input-wrapper">
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
        <div class="input-wrapper">
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
          class="focus:outline-none bg-black-primary font-bold text-white-soft px-14 py-5 rounded-full phone-sm:px-20 tablet-xs:text-lg 2xl:py-7 desktop:text-xl 2xl:px-20 transition-all duration-300 hover:bg-opacity-90 active:scale-95"
          style="cursor: none"
        >
          Send
        </button>
      </form>
    </div>
  </section>
</template>

<script setup></script>

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
  font-size: 16px;
  color: theme("colors.black-primary");
  transition: all 300ms;
}

.form-input::placeholder {
  color: theme("colors.gray");
}

.form-input:focus {
  outline: none;
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

@media (min-width: 601px) {
  .form-input {
    font-size: 18px;
  }
}

@media (min-width: 1440px) {
  .form-input {
    font-size: 20px;
  }
}
</style>
