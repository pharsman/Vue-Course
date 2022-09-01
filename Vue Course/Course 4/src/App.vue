<script>
export default {
  data() {
    return {
      boxA: false,
      boxB: false,
      boxC: false,
    }
  },
  methods: {
    boxSelected(box) {
      if (box === 'A') {
        this.boxA = !this.boxA
      } else if (box === 'B') {
        this.boxB = !this.boxB
      } else if (box === 'C') {
        this.boxC = !this.boxC
      }
    }
  },
  computed: {
    boxAclasses() {
      return { active: this.boxA }
    }
  },
}
</script>

<template>
  <header>
    <h1>Vue Dynamic Styling</h1>
  </header>
  <section>
    <div class="div" :class="boxAclasses" @click="boxSelected('A')"></div>
    <div class="div" :class="{ active: boxB }" @click="boxSelected('B')"></div>
    <div :class="['div', { active: boxC }]" @click="boxSelected('C')"></div>
  </section>
</template>

<style>
@import './assets/base.css';

* {
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
}

header {
  width: 700px;
  padding: 50px 60px;
  background-color: #06a900;
  border-radius: 43px 43px 43px 43px;
  box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  margin: 50px auto;
}

header h1 {
  color: #ffffff;
  font-weight: bold;
  font-size: 50px;
}

section {
  width: 700px;
  padding: 50px 60px;
  background-color: #ffffff;
  border-radius: 43px 43px 43px 43px;
  box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
  margin-bottom: 50px;
}

.div {
  width: 550px;
  border: 6px dashed #666666;
  padding: 100px;
  margin: 50px auto;
  cursor: pointer;
}

.active {
  border-color: red;
  background-color: aqua;
}
</style>
