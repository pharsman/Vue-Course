<script >
export default {
  data() {
    return {
      // input: '',
      msg: 'Vue is great!'
    }
  },
  methods: {
    // saveInput(event){
    //   this.input = event.target.value
    // },
    setText() {
      // this.msg = this.input
      this.msg = this.$refs.userText.value

      // console.dir(this.$refs.userText)
    }
  },
  beforeCreate() {
    console.log('beforeCreated()')
  },
  created() {
    console.log('created()')
  },
  beforeMount() {
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted()')
  },
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('update()')
  },
  beforeUnmount() {
    console.log('beforeUnmount()')
  },
  unmounted() {
    console.log('unmounted()')

  },

}
</script>

<template>
  <header>
    <h1>Vue Behind The Scenes</h1>
  </header>
  <section>
    <h1>How Vue Works</h1>
    <hr>
    <input type="text" ref="userText">
    <button @click="setText()">Set Text</button>
    <p>Input is: {{ msg }}</p>
  </section>
</template>

<style>
@import './assets/base.css';

* {
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  list-style-type: none;
}

header {
  width: 700px;
  padding: 50px 60px;
  background-color: #06a900;
  border-radius: 43px 43px 43px 43px;
  box-shadow: 0px 0px 42px -10px rgba(0, 0, 0, 0.75);
  margin: 50px auto;
}

header h1 {
  color: #ffffff;
  font-weight: bold;
  font-size: 50px;
}

section {
  width: 700px;
  padding: 50px;
  background-color: #ffffff;
  border-radius: 43px;
  box-shadow: 0px 0px 50px -20px rgba(0, 0, 0, 0.75);
  margin: 0 auto;
}

section h1 {
  color: #06a900;
  font-size: 50px;
  font-weight: bold;
}

hr {
  height: 10px;
  background-color: #ccc;
  border: none;
  border-radius: 10px;
}

input {
  margin-top: 30px;
}

button {
  cursor: pointer;
  background-color: #ff0077;
  border: none;
  color: #ffffff;
  padding: 4px 10px;
}

p {
  background-color: #06a900;
  border-radius: 40px;
  padding: 10px 40px;
  margin-top: 20px;
  color: #ffffff;
  font-size: 30px;
  font-weight: bold;
}
</style>
