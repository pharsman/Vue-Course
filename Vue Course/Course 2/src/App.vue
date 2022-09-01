<script>
export default {
  data() {
    return {
      count: 10,
      name: '',
      confirmedName: ''
    }
  },
  methods: {
    add(num) {
      this.count = this.count + num
    },
    reduce(num) {
      this.count = this.count - num
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    submitForm() {
      alert('Submitted!!!')
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  },
}
</script>

<template>
  <div class="header">
    <h1>Vue Event</h1>
  </div>
  <section class="events">
    <h2>Events in Action</h2>
    <div class="line"></div>
    <button @click="add(10)">Add 10</button>
    <button @click.right="reduce(5)">Reduce 5</button>
    <p v-once="">Starting Counter: {{ count }}</p>
    <p>Result is: {{ count }}</p>
    <input name="text" @input.="setName($event, 'Gogisvanidze')" @keyup.enter="confirmInput">
    <p>Your Name : {{ confirmedName }}</p>
    <form @submit.prevent="submitForm">
      <input type="text">
      <button>Sign Up</button>
    </form>
  </section>
</template>

<style>
@import './assets/base.css';

* {
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
}

.header {
  border-radius: 43px 43px 43px 43px;
  -webkit-border-radius: 43px 43px 43px 43px;
  -moz-border-radius: 43px 43px 43px 43px;
  box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  width: 700px;
  padding: 60px;
  background-color: #00ff73;
  margin: 30px auto;
  text-align: center;
}

.header h1 {
  color: #ffffff;
  font-weight: bold;
  font-size: 50px;
}

.events {
  border-radius: 43px 43px 43px 43px;
  -webkit-border-radius: 43px 43px 43px 43px;
  -moz-border-radius: 43px 43px 43px 43px;
  background-color: #ffffff;
  box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 42px -3px rgba(0, 0, 0, 0.75);
  width: 700px;
  margin: 0 auto;
  padding: 30px;
}

.events h2 {
  color: #00ff73;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}

.line {
  border-radius: 43px 43px 43px 43px;
  -webkit-border-radius: 43px 43px 43px 43px;
  -moz-border-radius: 43px 43px 43px 43px;
  width: 650px;
  padding: 2px;
  background-color: #8d8d8d;
  margin: 6px auto;
}

button {
  background-color: #ff0066;
  color: #ffffff;
  border-radius: 40px;
  font-size: 20px;
  border: 0px;
  margin-left: 20px;
  cursor: pointer;
  padding: 10px 30px;
}

p {
  background-color: #00ff73;
  border-radius: 40px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  margin-top: 10px;
}
</style>
