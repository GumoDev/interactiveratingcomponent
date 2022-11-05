<script setup>
  import {ref} from 'vue'

  let rating = ref(0)

  let selected = () => {
    let rate = parseInt(event.target.innerText)
    rating.value = rate

    event.target.parentNode.querySelectorAll('SPAN').forEach(element => {
      element.classList.add('bg-[#29333a]')
      element.classList.add('opacity-60')
      element.classList.remove('bg-orange-orange')
    });

    let selected = event.target

    selected.classList.remove('bg-[#29333a]')
    selected.classList.add('bg-orange-orange')
    selected.classList.add('opacity-100')
    
    console.log(rating.value, selected);
  }

  let submitRating = () =>{
    let ratingCard = document.getElementById('rating-card')
    let thanksCard = document.getElementById('thanks-card')

    if(rating.value === 0) {
      alert('please select a valid rate')
    }else{
      ratingCard.classList.add('hidden')
      thanksCard.classList.add('flex')
      thanksCard.classList.remove('hidden')
    }
  }

</script>

<template>

  <main class="bg-VeryDarkBlue-VeryDarkBlue min-h-screen flex flex-col justify-center items-center">

    <section id="rating-card" class="
    text-white rounded-3xl p-5 bg-DarkBlue-DarkBlue w-11/12 max-w-[330px] min-h-[350px] 
    md:w-[450px] md:h-[450px] md:p-7 ">

      <figure class="bg-[#29333a] w-10 h-10 md:w-14 md:h-14 rounded-full grid place-content-center">
        <img src="../src/assets/icon-star.svg" alt="icon star">
      </figure>

      <h1 class="text-2xl md:text-2xl my-3 md:my-5 font-bold">
        How did we do?
      </h1>

      <p class="text-[.9rem] md:text-lg opacity-60">
        Please let us know how we did with your <br> 
        support <br class="hidden"> request. All feedback is appreciated <br> to help us <br class="hidden">
        improve our offering!
      </p>

      <div class="rating my-7 md:my-5 flex justify-between items-center h-10 md:h-20 w-full">
        <span @click="selected"
          class="flex cursor-pointer hover:bg-lightGrey-lightGrey hover:opacity-100 transition justify-center items-center w-12 h-12 md:h-14 md:w-14 rounded-full bg-[#29333a] opacity-60">1</span>
        <span @click="selected"
          class="flex cursor-pointer hover:bg-lightGrey-lightGrey hover:opacity-100 transition justify-center items-center w-12 h-12 md:h-14 md:w-14 rounded-full bg-[#29333a] opacity-60">2</span>
        <span @click="selected"
          class="flex cursor-pointer hover:bg-lightGrey-lightGrey hover:opacity-100 transition justify-center items-center w-12 h-12 md:h-14 md:w-14 rounded-full bg-[#29333a] opacity-60">3</span>
        <span @click="selected"
          class="flex cursor-pointer hover:bg-lightGrey-lightGrey hover:opacity-100 transition justify-center items-center w-12 h-12 md:h-14 md:w-14 rounded-full bg-[#29333a] opacity-60">4</span>
        <span @click="selected"
          class="flex cursor-pointer hover:bg-lightGrey-lightGrey hover:opacity-100 transition justify-center items-center w-12 h-12 md:h-14 md:w-14 rounded-full bg-[#29333a] opacity-60">5</span>
      </div>

      <button @click="submitRating" class=" hover:text-orange-orange hover:bg-white transition
      bg-orange-orange w-full rounded-full mt-2 md:mt-4 py-[.5rem] md:py-3 uppercase tracking-[.2rem]">
        Submit
      </button>

    </section>

    <section id="thanks-card" class="
    flex-col items-center hidden
    text-white rounded-3xl p-5 bg-DarkBlue-DarkBlue w-[330px] min-h-[330px] 
     
    md:w-[450px] md:h-[450px] md:p-7">
      <figure class="my-2 md:my-5 ">
        <img class="h-20 md:h-auto" src="../src/assets/illustration-thank-you.svg" alt="ilustration-thank-you">
      </figure>
      <p class="bg-[#29333a] text-sm md:text-base md:my-5 my-2 text-orange-orange py-2 px-5 rounded-full">
        you selected {{rating}} out of 5
      </p>
      <h2 class="text-2xl my-5 md:text-3xl mf:my-4">Thank you!</h2>
      <p class="opacity-60 text-sm md:text-[1.1rem] text-center">
        We appreciate you taking the time to give a <br class="hidden md:hidden"> rating <br class="hidden md:flex"> 
        If you ever need more support, don’t <br class=" flex md:hidden"> hesitate to <br class="hidden md:flex"> 
        get in touch!
      </p>
    </section>

    <footer class="attribution text-white">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/GumoDev">GumoDev</a>.
    </footer>
  </main>
</template>

<style scoped>

</style>
