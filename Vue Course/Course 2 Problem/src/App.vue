<script>
export default {
  data() {
    return {
      outputOne:'',
      outputTwo: '',
      confirmedOutput: ''
    }
  },
  methods: {
    showAlert(){
      alert('This is Alert!!!!!!')
    },
    setText(event){
      this.outputOne = event.target.value
    },
    confirmText(){  
      this.confirmedOutput = this.outputTwo
    }
  },
}
</script>

<template>
  <header>
    <h1>Events</h1>
  </header>
  <section>
    <h2>Event Practice</h2>
    <hr>
    <button @click.prevent="showAlert">Show Alert!</button>
    <hr>
    <input type="text" @input="setText" >
    <p>Output is: {{outputOne}}</p>
    <hr>
    <input type="text" v-model ="outputTwo" @keyup.enter="confirmText">
    <p>Output is: {{confirmedOutput}}</p>
  </section>
</template>

<style>
@import './assets/base.css';

* {
  box-sizing: border-box;
  text-decoration: none;
  text-align: center;
  margin: 0 auto;
  outline: none;
}

header {
  background-color: #008907;
  width: 600px;
  padding: 40px 90px;
  border-radius: 20px;
  margin: 30px auto;
}

header h1 {
  font-size: 50px;
  color: #ffffff;
  font-weight: bold;
}

section {
  width: 600px;
  background-color: #ffffff;
  box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  border-radius: 43px;
  padding: 40px;
}

section h2 {
  color: #008907;
  font-size: 40px;
  font-weight: bold;
}

hr {
  border-top: 4px solid #818181;
  border-radius: 10px;
  margin-top: 10px;
}
button{
  background-color: #de0000;
  color: #ffffff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
}
p{
  background-color: #008907;
  padding: 10px;
  border-radius: 40px;
  color: #000000;
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
}
</style>
