<script>
export default {
  data() {
    return {
      inputClass: '',
      show: true,
      inputBackgroundColor: ''
    }
  },
  watch: {
    check() {
      if (this.inputClass === 'user1') {
        { user1 }
      } else if (this.inputClass === 'user2') {
        { user2 }
      }
    }
  },
}
</script>

<template>
  <header>
    <h1>Vue Styling</h1>
  </header>
  <section>
    <input type="text" v-model="inputClass">
    <p v-if="show" :class="inputClass">Style Me!</p>
    <br>
    <button :class="visible" @click="show = !show">Toggle Paragraph</button>
    <br>
    <input v-model="inputBackgroundColor" type="text">
    <p :style="{ backgroundColor: inputBackgroundColor }">Style Me Inline!</p>
  </section>
</template>

<style>
@import './assets/base.css';

* {
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
}

.user1 {
  background-color: blue;
  color: white;
}

.user2 {
  background-color: purple;
  color: white;
}

.hidden {
  display: none;
}

.visible {
  display: block;
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

input {
  outline: none;
  margin-top: 10px;
}

p {
  background-color: #09ff00;
  color: #000000;
  border-radius: 40px;
  padding: 15px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 30px;
}

button {
  background-color: #f10044;
  color: #ffffff;
  font-weight: bold;
  border: 0px;
  padding: 5px;
  cursor: pointer;
}
</style>
