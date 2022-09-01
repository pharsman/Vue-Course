<template>
  <router-view v-slot="slotProps">
    <transition name="fade-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <div class="container">
    <UsersList />
  </div>
  <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
      @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled">
      <p v-if="paraIsVisible">This is only somethimes visible</p>
    </transition>
    <button @click="toggleParagrhaph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="fade-button" mode="out-in">
      <button v-if="!usersAreVisible" @click="showUsers">Show Users</button>
      <button v-else @click="hideUsers">Hide Users</button>
    </transition>
  </div>
  <BaseModal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </BaseModal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>

export default {

  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null
    };
  },
  methods: {
    enterCancelled(el) {
      console.log(el)
      clearInterval(this.enterInterval)
    },
    leaveCancelled(el) {
      console.log(el)
      clearInterval(this.leaveInterval)
    },
    beforeEnter(el) {
      console.log('beforeEnter')
      console.log(el)
      el.style.opacity = 0
    },
    enter(el, done) {
      console.log('enter')
      console.log(el)
      let round = 1
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.1
        round++
        if (round > 10) {
          clearInterval(this.enterInterval)
          done()
        }
      }, 20)
    },
    afterEnter(el) {
      console.log('afterEnter')
      console.log(el)
    },
    beforeLeave(el) {
      console.log('beforeLeave')
      console.log(el)
      el.style.opacity = 1
    },
    leave(el, done) {
      console.log('leave')
      console.log(el)
      let round = 1
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.1
        round++
        if (round > 10) {
          clearInterval(this.leaveInterval)
          done()
        }
      }, 20)
    },
    afterLeave(el) {
      console.log('avterLeave')
      console.log(el)
    },
    showUsers() {
      this.usersAreVisible = true
    },
    hideUsers() {
      this.usersAreVisible = false
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock
    },
    toggleParagrhaph() {
      this.paraIsVisible = !this.paraIsVisible
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  animation: slideFade 0.3s ease-out forwards
}

.fade-button-enter-form,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-form {
  opacity: 1;
}

.route-enter-active {
  animation: slideFade 0, 4s ease-out;
}

.route-leave-active {
  animation: slideFade 0.4s ease-in forwards
}

@keyframes slideFade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.5);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

/* .para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

.para-enter-active {
  animation: slideFade 0.5s ease-out
}

/* .para-enter.to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

.para-leave-active {
  animation: slideFade 0.5s ease-out
}

/* .para-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */
</style>